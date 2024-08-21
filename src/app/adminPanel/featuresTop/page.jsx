"use client";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
  editFeatureTopSection,
  getFeatureSection,
} from "../../../redux/slices/globalSlice";
import Loading from "./../../../utils/loading";

import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function FeatureTop(props) {
  const [record1, setRecord1] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getFeatureSection({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      const images = resp?.payload?.data?.images || [];
      setRecord1(images);

      // Initialize formData and loading state
      const initialFormData = {};
      const initialLoading = {};
      images.forEach((item, index) => {
        initialFormData[`tagline${index + 1}`] = item.tagline;
        initialFormData[`image${index + 1}`] = null;
        initialLoading[`loader${index + 1}`] = false;
      });
      setFormData(initialFormData);
      setLoading(initialLoading);
    };

    fetchData();
  }, [dispatch]);

  const handleChange = (e, index) => {
    const { name, value, files } = e.target;
    const newFormData = { ...formData };
    const fieldName = `tagline${index + 1}`;

    if (files) {
      newFormData[`image${index + 1}`] = files[0];
      const url = URL.createObjectURL(files[0]);
      newFormData[`imagePreview${index + 1}`] = url;
    } else {
      newFormData[fieldName] = value;
    }
    setFormData(newFormData);
  };

  const handleSubmit = async (e, index, id) => {
    e.preventDefault();
    const fieldName = `tagline${index + 1}`;
    const imageName = `image${index + 1}`;

    if (!formData[imageName]) {
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
    } else if (!formData[fieldName]) {
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

    const obj = {
      tagline: formData[fieldName],
      image: formData[imageName],
      idtoUpdate: id,
    };

    try {
      const newLoading = { ...loading };
      newLoading[`loader${index + 1}`] = true;
      setLoading(newLoading);

      let result = await dispatch(editFeatureTopSection(obj));

      newLoading[`loader${index + 1}`] = false;
      setLoading(newLoading);

      if (result) {
        toast.success("Feature Top Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(initialLoading);
      } else {
        toast.error("Feature Top Update Failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(initialLoading);
      }
    } catch (err) {
      console.error(err, "Error Uploading File!");
      const newLoading = { ...loading };
      newLoading[`loader${index + 1}`] = false;
      setLoading(newLoading);
    }
  };

  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <Breadcrumb pageName="Feature Top" />
        <Box component="form" noValidate autoComplete="off">
          <Box display="flex" alignItems="center" mb={2} flexDirection="column">
            {record1.length > 0 ? (
              <>
                {record1.map((itm, index) => {
                  const fieldName = `tagline${index + 1}`;
                  const imageName = `image${index + 1}`;
                  const loaderName = `loader${index + 1}`;

                  return (
                    <Grid
                      key={index}
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
                        <textarea
                          label="Tagline"
                          variant="outlined"
                          defaultValue={itm.tagline}
                          name={fieldName}
                          onChange={(e) => handleChange(e, index)}
                          fullWidth
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item sm={12} md={2} lg={2}>
                        {/* <input
                          type="text"
                          name="refinancebtn"
                          className="textfild"
                          placeholder="Page Link"
                          onChange={(e) => handleChange(e, index)}
                          style={{ padding: "0px", fontSize: "13px" }}

                        /> */}

                        {/* <p
                          htmlFor="heroSec"
                          className="lblform"
                          style={{ fontSize: "14px", lineHeight: "18px" }}
                        >
                          /gift-card-terms-condition
                        </p> */}
                        <abbr title="Placed Link Correctly only if you sured that page Exists, OR leave it blank for no Link">
                          <textarea
                            label="Tagline"
                            variant="outlined"
                            defaultValue={itm.page_link}
                            name={fieldName}
                            onChange={(e) => handleChange(e, index)}
                            fullWidth
                            sx={{ mb: 2 }}
                          />
                        </abbr>
                      </Grid>
                      <Grid
                        item
                        sm={12}
                        md={5}
                        lg={5}
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            zIndex: "9999",
                            mb: 2,
                            backgroundColor: "#fcc26e",
                            backgroundImage: `url(${itm.image_url})`,
                            backgroundPosition: "right",
                            // backgroundSize: "cover",
                            height: "64px",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <CenterFocusStrongIcon /> Upload Image
                          <input
                            sx={{ mb: 2, backgroundColor: "#fcc26e" }}
                            type="file"
                            name={imageName}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </Button>
                      </Grid>
                      <Grid item sm={12} md={2} lg={2}>
                        <button
                          onClick={(e) => handleSubmit(e, index, itm._id)}
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
                          />
                          {loading[loaderName] ? (
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                              }}
                            >
                              <Typography>Update </Typography>
                              &nbsp; &nbsp;
                              <CircularProgress size={10} color="inherit" />
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
              <Loading />
            )}
          </Box>
        </Box>
      </div>
    </Adminlayout>
  );
}
