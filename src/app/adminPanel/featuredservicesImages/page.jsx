"use client";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminlayout from "../Adminlayout";
import { useSelector, useDispatch } from "react-redux";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
  editFeatureMedia,
  getFeatureMedia,
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
      let resp = await dispatch(getFeatureMedia());
      const images = resp?.payload?.data?.images || [];
      console.log("images....", images);
      setRecord1(images);

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

      let result = await dispatch(editFeatureMedia(obj));

      newLoading[`loader${index + 1}`] = false;
      setLoading(newLoading);

      if (result) {
        toast.success("Services Images Updated Successfully", {
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
        toast.error("Services Images Update Failed!", {
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
        <Breadcrumb pageName="Featured Services Images" />
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
                      <Grid item sm={12} md={4} lg={4}>
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
                            backgroundImage: `url(${itm.image_url})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
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
