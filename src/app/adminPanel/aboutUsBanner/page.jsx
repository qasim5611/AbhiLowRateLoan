"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import Loading from "../../../utils/loading";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  editAboutUsBanner,
  getAboutusBanner,
} from "../../../redux/slices/globalSlice";
import axios from "axios";

export default function ReputeableLenders(props) {
  let dispatch = useDispatch();
  const [record2, setrecord2] = useState([]);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(getAboutusBanner());

      setrecord2(resp?.payload?.data?.data);
      setidtoUpdate(resp?.payload?.data?.data[0]._id);
    };

    fetchData();
  }, []);

  const [state, setState] = useState({
    // tagline: "",
    image: null,
  });

  const [ImagePreview, setImagePreview] = useState(null);

  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview(url);

      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const updateAboutusBanner = async (e) => {
    e.preventDefault();
    console.log("Reputeable Lender state", state);

    if (!state.image) {
      toast.error("Please Upload Image!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }

    let obj = {
      ...state,
      idtoUpdate,
    };
    setLoader(true);
    let resp = await dispatch(editAboutUsBanner(obj));
    console.log("resp editAboutUsBanner", resp);
    if (resp.payload.status == 200) {
      toast.success("Updated Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
      setLoader(false);
    } else if (!resp.payload.status == 200) {
      toast.error("Updated Fail!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
      setLoader(false);
    }
  };

  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <Breadcrumb pageName="AboutUs Banner" />

        {record2.length > 0 ? (
          <>
            {record2.map((itm, index) => {
              return (
                <>
                  <React.Fragment key={index}>
                    <Grid
                      item
                      sm={12}
                      md={12}
                      lg={12}
                      style={{ textAlign: "left" }}
                    >
                      <label for="heroSec" className="lblform">
                        Upload AboutUs Banner Image :
                      </label>
                      <br />
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          zIndex: "9999",
                          mb: 2,
                          backgroundColor: "#fcc26e",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                          },
                        }}
                      >
                        <CenterFocusStrongIcon /> Upload Image
                        <input
                          sx={{ mb: 2, backgroundColor: "#fcc26e" }}
                          type="file"
                          name="image"
                          // hidden
                          onChange={onChangeHandler}
                        />
                      </Button>

                      {itm && (
                        <img
                          src={itm.image_url}
                          alt="Preview"
                          style={{ width: "400px", height: "250px" }}
                        />
                      )}
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                      <Grid item>
                        <button onClick={updateAboutusBanner}>
                          {loader ? (
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                              }}
                            >
                              <Typography>Update AboutUs Banner </Typography>
                              &nbsp; &nbsp;
                              <CircularProgress size={20} color="inherit" />
                            </Box>
                          ) : (
                            "Update AboutUs Banner "
                          )}
                        </button>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                </>
              );
            })}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Adminlayout>
  );
}
