"use client";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
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
  CircularProgress,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function FeaturTop(props) {
  const [faqs, setFaqs] = useState([
    { tagline: "", tagline1: "", tagline2: "", tagline3: "" },
  ]);
  const [images, setImages] = useState([{ image: null }]);
  const [record1, setrecord1] = useState([]);
  const [idtoUpdate1, setidtoUpdate1] = useState(false);

  const [ImageSrc1, setImageSrc1] = useState(false);

  const [state1, setState1] = useState({
    tagline1: "",
    image1: null,
  });

  const [state2, setState2] = useState({
    tagline2: "",
    image2: null,
  });

  const [state3, setState3] = useState({
    tagline3: "",
    image3: null,
  });

  const [state4, setState4] = useState({
    tagline4: "",
    image4: null,
  });

  const [loader, setLoader] = useState(false);

  const [ImagePreview, setImagePreview] = useState(null);
  const [ImagePreview2, setImagePreview2] = useState(null);
  const [ImagePreview3, setImagePreview3] = useState(null);
  const [ImagePreview4, setImagePreview4] = useState(null);

  const onChangeHandler1 = (e) => {
    if (e.target.name == "image1") {
      let val = e.target.files[0];

      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview(url);
      setState1({ ...state1, [e.target.name]: val });
    } else {
      setState1({ ...state1, [e.target.name]: e.target.value });
    }
  };

  const onChangeHandler2 = (e) => {
    if (e.target.name == "image2") {
      let val = e.target.files[0];

      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview2(url);
      setState2({ ...state1, [e.target.name]: val });
    } else {
      setState2({ ...state1, [e.target.name]: e.target.value });
    }
  };

  const onChangeHandler3 = (e) => {
    if (e.target.name == "image3") {
      let val = e.target.files[0];

      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview3(url);
      setState3({ ...state1, [e.target.name]: val });
    } else {
      setState3({ ...state1, [e.target.name]: e.target.value });
    }
  };

  const onChangeHandler4 = (e) => {
    if (e.target.name == "image4") {
      let val = e.target.files[0];

      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview4(url);
      setState4({ ...state1, [e.target.name]: val });
    } else {
      setState4({ ...state1, [e.target.name]: e.target.value });
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      let resp = await dispatch(getFeatureSection());
      console.log("herosection", resp?.payload?.data?.images);
      // console.log("data1", resp?.payload?.data?.mydata[0]);
      // console.log("image1", resp?.payload?.data?.mydata[0].cashBackImage);
      // setrecord1(resp?.payload?.data?.mydata);
      // setidtoUpdate1(resp?.payload?.data?.mydata[0]._id);
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

    if (!state1.image1) {
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
    } else if (state1.tagline1 == "") {
      toast.error("Please Enter Tagline!", {
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
      ...state1,
      // idtoUpdate1,
    };

    try {
      setLoader(true);
      let result = await dispatch(editFeatureTopSection(obj));

      console.log("result", result);

      // result = await result.json();
      if (result) {
        setLoader(false);
        toast.success("Feature Top Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // setImagePreview(result.imageUrl);
      } else {
        setLoader(false);
        toast.error("Feature Top Updated Failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // console.error("Failed to upload File!");
      }
    } catch (err) {
      console.error(err, "Error Uploading File!");
    }
  };

  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <Breadcrumb pageName="Feature Top" />

        {/* {record1
          ? record1.map((item, index) => {
              console.log("item", item);
              return (
                // <div key={index}>
                //   <img
                //     src={item.cashBackImage}
                //     alt="image"
                //     style={{ width: "100%" }}
                //   />
                // </div>

             
              );
            })
          : null} */}
        <Box component="form" noValidate autoComplete="off">
          <Box
            // key={index}
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
              <Grid item sm={12} md={7} lg={7}>
                <textarea
                  label="Tagline"
                  variant="outlined"
                  // defaultValue={item.cashBack}
                  name="tagline1"
                  onChange={onChangeHandler1}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item sm={12} md={3} lg={3} style={{ textAlign: "center" }}>
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
                    name="image1"
                    // onChange={(e) => handleImageChange(index, e)}
                    onChange={onChangeHandler1}
                  />
                </Button>

                <Typography variant="body2" color="textSecondary">
                  {ImagePreview && (
                    <img
                      src={ImagePreview}
                      style={{
                        height: "100px",
                        width: "100px",
                        margin: "0px auto",
                      }}
                    />
                  )}
                </Typography>
              </Grid>
              <Grid item sm={12} md={2} lg={2}>
                {" "}
                <button
                  onClick={updateFeatureTop}
                  // onClick={onSubmit}
                  style={{
                    padding: "0px 15px 7px 15px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
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
                  {loader ? (
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Typography>Update First</Typography>
                      &nbsp; &nbsp;
                      <CircularProgress size={20} color="inherit" />
                    </Box>
                  ) : (
                    "Update First"
                  )}
                </button>
              </Grid>
            </Grid>
          </Box>

          <Box
            // key={index}
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
                  // defaultValue={item.cashBack}
                  name="tagline2"
                  onChange={onChangeHandler2}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item sm={12} md={3} lg={3} style={{ textAlign: "center" }}>
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
                    name="image2"
                    // onChange={(e) => handleImageChange(index, e)}
                    onChange={onChangeHandler2}
                  />
                </Button>

                <Typography variant="body2" color="textSecondary">
                  {ImagePreview2 && (
                    <img
                      src={ImagePreview2}
                      style={{
                        height: "200px",
                        width: "200px",
                        margin: "0px auto",
                      }}
                    />
                  )}
                </Typography>
              </Grid>
              <Grid item sm={12} md={1} lg={1}>
                {/* <IconButton
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
                              </IconButton> */}
              </Grid>
            </Grid>
          </Box>

          <Box
            // key={index}
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
                  // defaultValue={item.cashBack}
                  name="tagline3"
                  onChange={onChangeHandler3}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item sm={12} md={3} lg={3} style={{ textAlign: "center" }}>
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
                    name="image3"
                    // onChange={(e) => handleImageChange(index, e)}
                    onChange={onChangeHandler3}
                  />
                </Button>

                <Typography variant="body2" color="textSecondary">
                  {ImagePreview3 && (
                    <img
                      src={ImagePreview3}
                      style={{
                        height: "200px",
                        width: "200px",
                        margin: "0px auto",
                      }}
                    />
                  )}
                  {/* {
                          <img
                            src={`data:${item.contentType};base64,${Buffer.from(
                              item.data
                            ).toString("base64")}`}
                            alt={item.name}
                            style={{ maxHeight: "200px", maxWidth: "200px" }}
                          />
                        } */}
                  {}
                </Typography>
              </Grid>
              <Grid item sm={12} md={1} lg={1}>
                {/* <IconButton
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
                              </IconButton> */}
              </Grid>
            </Grid>
          </Box>

          <Box
            // key={index}
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
                  // defaultValue={item.cashBack}
                  name="tagline4"
                  onChange={onChangeHandler4}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item sm={12} md={3} lg={3} style={{ textAlign: "center" }}>
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
                    name="image4"
                    // onChange={(e) => handleImageChange(index, e)}
                    onChange={onChangeHandler4}
                  />
                </Button>

                <Typography variant="body2" color="textSecondary">
                  {ImagePreview4 && (
                    <img
                      src={ImagePreview4}
                      style={{
                        height: "200px",
                        width: "200px",
                        margin: "0px auto",
                      }}
                    />
                  )}
                  {/* {
                          <img
                            src={`data:${item.contentType};base64,${Buffer.from(
                              item.data
                            ).toString("base64")}`}
                            alt={item.name}
                            style={{ maxHeight: "200px", maxWidth: "200px" }}
                          />
                        } */}
                  {}
                </Typography>
              </Grid>
              <Grid item sm={12} md={1} lg={1}>
                {/* <IconButton
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
                              </IconButton> */}
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
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
            &nbsp; &nbsp;
          </Box>
        </Box>
      </div>
    </Adminlayout>
  );
}
