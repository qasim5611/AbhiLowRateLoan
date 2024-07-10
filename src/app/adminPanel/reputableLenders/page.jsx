"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

import Breadcrumb from "./../../../components/Breadcrumbs/Breadcrumb";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  editReputeableBanner,
  getReputeableBanner,
} from "../../../redux/slices/globalSlice";
import axios from "axios";

export default function ReputeableLenders(props) {
  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    return async () => {
      let resp = await dispatch(getReputeableBanner());
      console.log("getReputeableBanner", resp);
      setrecord(resp?.payload?.data?.data);
      setidtoUpdate(resp?.payload?.data?.data[0]._id);
    };
  }, []);

  const [state, setState] = useState({
    tagline: "",
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

  const updateHomeBanner = async (e) => {
    e.preventDefault();
    console.log("Reputeable Lender state", state);
    let obj = {
      ...state,
      idtoUpdate,
    };
    setLoader(true);
    let resp = await dispatch(editReputeableBanner(obj));
    console.log("resp editReputeableBanner", resp);
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
        <Breadcrumb pageName="Reputeable Lenders" />

        {record ? (
          <>
            {record.map((item, index) => {
              return (
                <>
                  <React.Fragment key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={7}>
                        <label for="heroSec" className="lblform">
                          Banner Tag Line:
                        </label>
                        <textarea
                          id="heroSec"
                          name="tagline"
                          rows="3"
                          cols="30"
                          onChange={onChangeHandler}
                          defaultValue={item.tagline || "Please Enter:"}
                          // defaultValue={"Please Enter:"}
                        ></textarea>
                      </Grid>
                      <Grid item xs={5}>
                        &nbsp;
                      </Grid>
                    </Grid>
                    <br />
                    <Grid
                      item
                      sm={12}
                      md={12}
                      lg={12}
                      style={{ textAlign: "left" }}
                    >
                      <label for="heroSec" className="lblform">
                        Upload Banner Image
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
                          hidden
                          onChange={onChangeHandler}
                        />
                      </Button>

                      {ImagePreview && (
                        <img
                          src={ImagePreview}
                          alt="Preview"
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                      <Grid item>
                        <button onClick={updateHomeBanner}>
                          {loader ? (
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                              }}
                            >
                              <Typography>Update Reputable Lenders </Typography>
                              &nbsp; &nbsp;
                              <CircularProgress size={20} color="inherit" />
                            </Box>
                          ) : (
                            "Update Reputable Lenders"
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
          <div style={{ textAlign: "center" }}>Loading...</div>
        )}
      </div>
    </Adminlayout>
  );
}
