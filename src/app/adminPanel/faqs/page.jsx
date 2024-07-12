"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useDispatch } from "react-redux";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { editFaqs, getFaqs } from "../../../redux/slices/globalSlice";

export default function FeaturTop(props) {
  const [faqs, setFaqs] = useState([]);
  const [images, setImages] = useState([]);
  const [record, setRecord] = useState([]);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(getFaqs());
      console.log("getFaqs,", resp);
      console.log("herosection", resp?.payload?.data?.data[0]?.tagline);
      const data = resp?.payload?.data?.data || [];
      setRecord(data);
      setFaqs(data.map((item) => ({ tagline: item.tagline, desc: item.desc })));
    };

    fetchData();
  }, [dispatch]);

  const handleAddFAQ = () => {
    setFaqs([...faqs, { tagline: "", desc: "" }]);
    setImages([...images, { image: null }]);
  };

  const handleRemoveFAQ = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);

    // delete function called here
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
    console.log("faqs clicked", faqs);
    let obj = {
      faqs,
      // idtoUpdate,
    };

    setLoader(true);

    let resp = await dispatch(editFaqs(obj));
    console.log("resp...", resp);

    if (resp?.payload?.data?.msg == "Records created successfully") {
      toast.success("Records created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoader(false);
    } else {
      toast.error("Added Failed!", {
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
        <Breadcrumb pageName="FAQs" />

        <Box component="form" noValidate autoComplete="off">
          {faqs.length > 0 ? (
            <>
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
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid item sm={12} md={3} lg={3}>
                      <label htmlFor="heroSec" className="lblform">
                        Question {index + 1}:
                      </label>
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
                    <Grid item sm={12} md={8} lg={8}>
                      <label htmlFor="heroSec" className="lblform">
                        Awnser {index + 1}:
                      </label>
                      <textarea
                        label="Description"
                        variant="outlined"
                        value={faq.desc}
                        onChange={(e) =>
                          handleFAQChange(index, "desc", e.target.value)
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                      />
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
                          position: "relative",
                          top: "15px",
                        }}
                      >
                        <DeleteIcon size={10} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
          <Box style={{ display: "flex", flexDirection: "row" }}>
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
            <button
              onClick={updateFeatureTop}
              style={{
                padding: "0px 20px 7px 20px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CloudSyncIcon
                style={{
                  position: "relative",
                  top: "3px",
                  right: "3px",
                }}
              />{" "}
              {loader ? (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    alignItems: "inherit",
                  }}
                >
                  <Typography>Update Steps </Typography>
                  &nbsp; &nbsp;
                  <CircularProgress size={20} color="inherit" />
                </Box>
              ) : (
                "Update Steps"
              )}
            </button>
          </Box>
        </Box>
      </div>
    </Adminlayout>
  );
}
