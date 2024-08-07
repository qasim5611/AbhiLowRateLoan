"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./../../../utils/loading";
import Breadcrumb from "./../../../components/Breadcrumbs/Breadcrumb";
import { Grid, TextField } from "@mui/material";
import {
  editHeroSection,
  getHeroSection,
} from "./../../../redux/slices/globalSlice";

export default function HeroSection(props) {
  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getHeroSection({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      console.log("herosection", resp?.payload?.data?.mydata);
      console.log("herosection", resp?.payload?.data?.mydata[0].tagline);
      console.log("qasim", resp?.payload?.data?.mydata[0].tagline);

      setrecord(resp?.payload?.data?.mydata);
      setidtoUpdate(resp?.payload?.data?.mydata[0]._id);
    };
    fetchData();
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

  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(values.email);
    console.log("isemailVer", isemailVer);

    const pass = values.password;
    console.log("pass", pass);

    const conpass = values.cpassword;
    console.log("conpass", conpass);

    let isvalid = true;

    if (
      values.name.length < 3 ||
      values.name.length > 30 ||
      values.name.length == 0
    ) {
      isvalid = false;
      setnameerr("Username needs to be 3 to 30 characters long");
      setemailerr("");
      setpasserr("");
    } else if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setpasserr("");
      setnameerr("");
    } else if (pass !== conpass || pass.length == 0 || conpass.length == 0) {
      isvalid = false;
      setpasserr("Password is not Match/Correct");
      setemailerr("");
      setnameerr("");
    } else {
      setnameerr("");
      setemailerr("");
      setpasserr("");
    }

    return isvalid;
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
        <Breadcrumb pageName="Home Banner" />

        {record.length > 0 ? (
          <>
            {record.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label htmlFor="heroSec" className="lblform">
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
                      <label htmlFor="heroSec" className="lblform">
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
                      <label htmlFor="heroSec" className="lblform">
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
                </React.Fragment>
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
