"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "./../../../components/Breadcrumbs/Breadcrumb";
// import { Grid, TextField } from "@mui/material";
import {
  editFeatureTopSection,
  getFeatureSection,
} from "../../../redux/slices/globalSlice";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function FeaturTop(props) {
  const [faqs, setFaqs] = useState([{ tagline: "" }]);
  const [images, setImages] = useState([{ image: null }]);

  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      // let resp = await dispatch(getFeatureSection());
      // console.log("getFeatureSection", resp);
      // console.log("herosection", resp?.payload?.data?.mydata[0].tagline);
      // setrecord(resp?.payload?.data?.mydata);
      // setidtoUpdate(resp?.payload?.data?.mydata[0]._id);
    };
  }, []);

  const handleAddFAQ = () => {
    if (faqs.length >= 4) {
      toast.error("You can only add (4) Features", {
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
    } else {
      setFaqs([...faqs, { tagline: "" }]);
      setImages([...images, { image: null }]);
    }
  };

  const handleRemoveFAQ = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleFAQChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleImageChange = (index, event) => {
    const newFaqs = [...faqs];
    newFaqs[index].image = event.target.files[0];
    setFaqs(newFaqs);
  };

  const updateFeatureTop = async (e) => {
    e.preventDefault();

    let isValiud = isFormValid();
    console.log("isValiud", isValiud);
    if (isValiud == true) {
      let obj = {
        ...faqs,
        // idtoUpdate,
        // name: "qasim",
      };

      const formData = new FormData();

      // // Append taglines to formData
      // faqs.forEach((faq, index) => {
      //   formData.append(`tagline[${index}]`, faq.tagline);
      // });

      faqs.forEach((faq, index) => {
        formData.append(`tagline[${index}]`, faq.tagline);
      });

      // Append images to formData
      images.forEach((image, index) => {
        formData.append("images", image);
      });

      console.log("formData:", formData);
      let resp = await dispatch(editFeatureTopSection(obj));
      console.log("resp...", resp);
    }
    function isFormValid() {
      let isValiud = true;

      if (faqs.length == 0) {
        toast.error("Please add atleast one feature", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        isValiud = false;
        return;
      }

      for (let i = 0; i < faqs.length; i++) {
        if (faqs[i].tagline == "") {
          toast.error("Please enter all 4 tagline", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          isValiud = false;
          return;
        } else if (faqs[i].image == null) {
          toast.error("Please select all 4 image", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          isValiud = false;
          return;
        }
      }

      return isValiud;
    }

    // console.log("resp editHeroSection", resp.payload.data.msg);
    // if (resp.payload.data.msg == "Updated Successful") {
    //   toast.success("Updated Successful", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,

    //     progress: undefined,
    //   });
    // }
  };
  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <Breadcrumb pageName="Feature Top" />

        <Box component="form" noValidate autoComplete="off">
          {faqs.map((faq, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              mb={2}
              flexDirection="column"
            >
              <Grid
                container
                spacing={2}
                style={{
                  borderLeft: "6px #fcc26e solid",
                  /* background: green; */
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid item sm={12} md={8} lg={8}>
                  <textarea
                    label="Tagline"
                    variant="outlined"
                    value={faq.tagline}
                    onChange={(e) =>
                      handleFAQChange(index, "tagline", e.target.value)
                    }
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={3}
                  lg={3}
                  style={{ textAlign: "center" }}
                >
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
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
                      sx={{
                        mb: 2,
                        backgroundColor: "#fcc26e",
                      }}
                      type="file"
                      hidden
                      onChange={(e) => handleImageChange(index, e)}
                    />
                  </Button>

                  {faq.image && (
                    <Typography variant="body2" color="textSecondary">
                      {faq.image.name}
                    </Typography>
                  )}

                  <button
                    onClick={updateFeatureTop}
                    style={{
                      padding: "0px 20px 7px 20px",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    <CloudSyncIcon
                      style={{
                        position: "relative",
                        top: "5px",
                        right: "3px",
                      }}
                    />{" "}
                    Update Features Top
                  </button>
                </Grid>
                <Grid item sm={12} md={1} lg={1}>
                  <IconButton
                    onClick={() => handleRemoveFAQ(index)}
                    sx={{
                      mb: 2,
                      backgroundColor: "#008000",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleAddFAQ}
            sx={{
              backgroundColor: "#008000",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Add Feature
          </Button>
          &nbsp;
        </Box>
      </div>
    </Adminlayout>
  );
}
