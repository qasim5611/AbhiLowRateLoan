"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";

import Breadcrumb from "./../../../components/Breadcrumbs/Breadcrumb";
import { Grid, TextField } from "@mui/material";
import {
  editHeroSection,
  getHeroSection,
} from "../../../redux/slices/globalSlice";
import axios from "axios";

export default function ReputeableLenders(props) {
  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  useEffect(() => {
    return async () => {
      let resp = await dispatch(getHeroSection());
      console.log("herosection", resp?.payload?.data?.mydata);
      console.log("herosection", resp?.payload?.data?.mydata[0].tagline);
      setrecord(resp?.payload?.data?.mydata);
      setidtoUpdate(resp?.payload?.data?.mydata[0]._id);
    };
  }, []);

  const [state, setState] = useState({
    tagline: "",
    refinancebtn: "",
    lownbtn: "",
  });

  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const updateHomeBanner = async (e) => {
    e.preventDefault();
    console.log("Regiter state", state);
    let obj = {
      ...state,
      idtoUpdate,
    };
    let resp = await dispatch(editHeroSection(obj));
    console.log("resp editHeroSection", resp.payload.data.msg);
    if (resp.payload.data.msg == "Updated Successful") {
      toast.success("Updated Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
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
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
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
                      ></textarea>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label for="heroSec" className="lblform">
                        Refinance Button Text
                      </label>
                      <br />
                      <input
                        type="text"
                        name="refinancebtn"
                        className="textfild"
                        placeholder="(Left)"
                        onChange={onChangeHandler}
                        defaultValue={item.refinancebtn}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <label for="heroSec" className="lblform">
                        Lown Button Text
                      </label>
                      <br />
                      <input
                        type="text"
                        name="lownbtn"
                        className="textfild"
                        placeholder="(Right)"
                        onChange={onChangeHandler}
                        defaultValue={item.lownbtn}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item>
                      <button onClick={updateHomeBanner}>
                        Update Home Banner
                      </button>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </Adminlayout>
  );
}
