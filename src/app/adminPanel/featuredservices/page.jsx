"use client";

import React, { useState, useEffect, useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
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
  editServiceContent,
  getServiceContent,
} from "../../../redux/slices/globalSlice";
import axios from "axios";
import { basic, complex, formatting } from "./buttonList";

export default function ReputeableLenders(props) {
  const editorRef = useRef < SunEditor > null;

  const [desc, setdesc] = useState(null);

  useEffect(() => {
    console.log(editorRef.current?.editor.core);
  }, []);

  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    return async () => {
      let resp = await dispatch(getServiceContent());
      console.log("getReputeableBanner", resp);
      // const images = resp?.payload?.data?.data || [];

      setrecord(resp?.payload?.data?.data);
      setidtoUpdate(resp?.payload?.data?.data[0]._id);
    };
  }, []);

  const [state, setState] = useState({
    tagline: "",
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

  const handleChange = (content) => {
    setdesc(content); //Get Content Inside Editor
  };

  const updateHomeBanner = async (e) => {
    e.preventDefault();
    console.log("Reputeable Lender state", state, desc);
    let obj = {
      ...state,
      idtoUpdate,
      desc,
    };
    setLoader(true);
    let resp = await dispatch(editServiceContent(obj));
    console.log("resp editServiceContent", resp);
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
        <Breadcrumb pageName="Featured Services" />
        {record ? <div> Ok</div> : <>not ok</>}

        {record.length > 0 ? (
          <>
            {record.map((item, index) => {
              return (
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
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
                    <Grid item xs={4}>
                      &nbsp;
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                    <Grid
                      item
                      sm={8}
                      md={8}
                      lg={8}
                      style={{ textAlign: "left" }}
                    >
                      <label for="pwd" className="lblform">
                        Edit Featured Service Description
                      </label>

                      <SunEditor
                        height="200px"
                        setOptions={{
                          height: 300,
                          // width: "60%",
                          buttonList: formatting,
                          buttonList: basic,
                          buttonList: complex,
                        }}
                        onChange={handleChange}
                        defaultValue={item.desc}
                      />
                    </Grid>
                    <Grid
                      item
                      sm={4}
                      md={4}
                      lg={4}
                      style={{ textAlign: "left" }}
                    >
                      &nbsp;
                    </Grid>
                  </Grid>
                  <br />

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
                </div>
              );
            })}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Adminlayout>
  );
}
