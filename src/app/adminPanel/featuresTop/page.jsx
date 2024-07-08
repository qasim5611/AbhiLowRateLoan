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
  const [record2, setrecord2] = useState(false);
  const [record3, setrecord3] = useState(false);
  const [record4, setrecord4] = useState(false);

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

  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);

  const [ImagePreview1, setImagePreview1] = useState(null);
  const [ImagePreview2, setImagePreview2] = useState(null);
  const [ImagePreview3, setImagePreview3] = useState(null);
  const [ImagePreview4, setImagePreview4] = useState(null);

  const onChangeHandler1 = (e) => {
    if (e.target.name == "image1") {
      let val = e.target.files[0];

      const url = URL.createObjectURL(val);
      console.log("url", url);
      setImagePreview1(url);
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
    const fetchData = async () => {
      let resp = await dispatch(getFeatureSection());
      console.log("herosection", resp?.payload?.data?.images);
      console.log("herosection", resp?.payload?.data?.images[0]);
      setrecord1(resp?.payload?.data?.images);
    };

    fetchData();
  }, [dispatch]);

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

  const updateFeatureTop = async (e, id) => {
    e.preventDefault();
    console.log("id", id);

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
      idtoUpdate: id,
    };

    try {
      setLoader1(true);
      let result = await dispatch(editFeatureTopSection(obj));

      console.log("result", result);

      // result = await result.json();
      if (result) {
        setLoader1(false);
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
        setLoader1(false);
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
        <Box component="form" noValidate autoComplete="off">
          <Box
            // key={index}
            display="flex"
            alignItems="center"
            mb={2}
            flexDirection="column"
          >
            {record1.length > 0 ? (
              <>
                {record1.map((itm, index) => {
                  return (
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
                      <Grid item sm={12} md={4} lg={4}>
                        <textarea
                          label="Tagline"
                          variant="outlined"
                          defaultValue={itm.tagline}
                          name="tagline1"
                          onChange={onChangeHandler1}
                          fullWidth
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={12}
                        md={6}
                        lg={6}
                        style={{ textAlign: "center" }}
                      >
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
                            sx={{
                              mb: 2,
                              backgroundColor: "#fcc26e",
                            }}
                            type="file"
                            // hidden
                            name="image1"
                            // onChange={(e) => handleImageChange(index, e)}
                            onChange={onChangeHandler1}
                          />
                        </Button>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                        ></Typography>
                      </Grid>
                      <Grid item sm={12} md={2} lg={2}>
                        <button
                          // onClick={updateFeatureTop(itm._id)}
                          onClick={(e) => updateFeatureTop(e, itm._id)}
                          style={{
                            padding: "1px 25px 4px 25px",
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
                          {loader1 ? (
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                              }}
                            >
                              <Typography>Update </Typography>
                              &nbsp; &nbsp;
                              <CircularProgress size={20} color="inherit" />
                            </Box>
                          ) : (
                            "Update"
                          )}
                        </button>
                      </Grid>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <>Loading...</>
            )}
          </Box>
        </Box>
      </div>
    </Adminlayout>
  );
}
