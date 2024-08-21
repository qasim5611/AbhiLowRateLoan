"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
  editFeatureTopSection,
  getFeatureSection,
} from "../../../redux/slices/globalSlice";
import Loading from "./../../../utils/loading";
import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function FeatureTop() {
  const [record1, setRecord1] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await dispatch(
        getFeatureSection({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      const images = resp?.payload?.data?.images || [];
      setRecord1(images);

      const initialFormData = {};
      const initialLoading = {};
      images.forEach((item, index) => {
        initialFormData[`tagline${index + 1}`] = item.tagline;
        initialFormData[`page_link${index + 1}`] = item.page_link;
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

    if (files) {
      newFormData[`image${index + 1}`] = files[0];
      newFormData[`imagePreview${index + 1}`] = URL.createObjectURL(files[0]);
    } else {
      newFormData[name] = value;
    }
    setFormData(newFormData);
  };

  const handleSubmit = async (e, index, id) => {
    e.preventDefault();
    const fieldName = `tagline${index + 1}`;
    const linkName = `page_link${index + 1}`;
    const imageName = `image${index + 1}`;

    const obj = {
      tagline: formData[fieldName],
      page_link: formData[linkName], // Include page link in the object
      image: formData[imageName],
      idtoUpdate: id,
    };

    try {
      const newLoading = { ...loading };
      newLoading[`loader${index + 1}`] = true;
      setLoading(newLoading);

      const result = await dispatch(editFeatureTopSection(obj));

      newLoading[`loader${index + 1}`] = false;
      setLoading(newLoading);

      if (result) {
        toast.success("Feature Top Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error("Feature Top Update Failed!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (err) {
      console.error("Error Uploading File!", err);
      const newLoading = { ...loading };
      newLoading[`loader${index + 1}`] = false;
      setLoading(newLoading);
    }
  };

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
              record1.map((itm, index) => {
                const fieldName = `tagline${index + 1}`;
                const linkName = `page_link${index + 1}`;
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
                        style={{ marginBottom: "8px" }}
                      />
                    </Grid>
                    <Grid item sm={12} md={2} lg={2}>
                      <textarea
                        label="Page Link"
                        variant="outlined"
                        defaultValue={itm.page_link}
                        name={linkName}
                        onChange={(e) => handleChange(e, index)}
                        fullWidth
                        sx={{ mb: 2 }}
                      />
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
                          height: "64px",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <CenterFocusStrongIcon /> Upload Image
                        <input
                          sx={{ mb: 2, backgroundColor: "#fcc26e" }}
                          type="file"
                          name={`image${index + 1}`}
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
              })
            ) : (
              <Loading />
            )}
          </Box>
        </Box>
      </div>
    </Adminlayout>
  );
}
