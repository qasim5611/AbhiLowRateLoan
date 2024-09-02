"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import back from "../../images/welcome-back.png";
import userName from "./../../../public/images/email.png";

import email from "../../images/email.png";
import padlock from "../../images/padlock.png";
import check from "../../images/check-mark.png";
import marketing from "../../images/marketing.png";
import robot from "../../images/robot.png";
import Link from "next/link.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Forgotpass } from "../../redux/slices/globalSlice.js";

const ForgotPassword = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const [authloginMsg, setauthloginMsg] = useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [newtest, setNewtest] = useState(false);

  // const EmailMsg = useSelector((state) => state.global.ForgPassMsg);
  // console.log("AllFormsData", EmailMsg);

  let dispatch = useDispatch();

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [emailerr, setemailerr] = useState("");

  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(values.email);
    console.log("isemailVer", isemailVer);

    let isvalid = true;
    // const isvalid = {
    //   isvalidbool: true,

    // };

    if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
    } else {
      setemailerr("");
    }

    return isvalid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      // setLoader(true);s
      toast.warn("Please wait...", {
        position: "bottom-left",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let req = await dispatch(Forgotpass(values));
      console.log("forgotpass comp", req);
      // setLoader(true);
    }
  };

  const ForgPassDetail = useSelector((store) => store.global);

  let EmailMsg = ForgPassDetail.ForgPassMsg;
  console.log("EmailMsg EmailMsg ...", EmailMsg);

  useEffect(() => {
    setNewtest(EmailMsg);
  }, [EmailMsg]);

  if (newtest == "Cool Email Found, Redirecting to Verify Email") {
    // setLoader(false);
    setTimeout(() => {
      setNewtest(false);

      router.push("/VerifyTockenMail", { replace: true });
    }, 2000);
  } else if (newtest == "Not available email") {
    // setLoader(false);
    setTimeout(() => {
      setNewtest(false);
    }, 2000);
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        mb: "30px",
      }}
    >
      {/* <BelowHead /> */}
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "48px" }}
            sx={{
              fontWeight: "Bold",
              color: "#371f00",
              fontFamily: "Poppins, sans-serif",
              position: "relative",
              top: "2px",
              marginTop: "70px",
            }}
          >
            Forgott Password?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "5%",
            }}
          >
            {/* <img
              src={back}
              alt=""
              style={{ marginRight: "30px", maxWidth: "80px", width: "100%" }}
            /> */}
            <SyncLockIcon
              sx={{ fontSize: "65px", color: "black", marginRight: "10px" }}
            />
            <Box>
              <Typography
                fontSize={{ xs: "18px", sm: "30px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "Poppins, sans-serif",
                  position: "relative",
                  top: "2px",
                }}
              >
                Have an email?
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "20px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "Poppins, sans-serif",
                  position: "relative",
                  top: "-8px",
                }}
              >
                Recover Now
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "2px solid #ff5100",
                borderRadius: "40px",
                mb: "20px",
              }}
            >
              <IconButton sx={{ p: "5px", padding: "10px" }} aria-label="menu">
                <Image src={userName} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{
                  color: "#903800",
                  width: "100%",
                  border: "none",
                  "& .MuiInputBase-input": {
                    border: "none",
                    borderRadius: "40px",
                  },
                }}
                placeholder="Enter Your Email"
                onChange={handleChange("email")}
                type="email"
              />
            </Paper>
            <center>
              {emailerr ? <div style={errmsg}>{emailerr}</div> : null}
            </center>
          </Box>

          {/* **********Recaptcha code************ */}
          {/* <Box>
            <ReCAPTCHA
              sitekey="6Ldr2nYfAAAAAJEpd-DPS96WfKa0nFCzOnj5N2Zu"
              onChange={onChange}
            />
          </Box> */}
          {/* **********END Recaptcha code************ */}
          <Box
            border="2.5px solid #C96100"
            borderRadius="30px"
            my={3}
            sx={{ width: "fit-content" }}
          >
            {/* <Button
              onClick={submitHandler}
              sx={{
                border: "1.5px solid white",
                borderRadius: "30px",
                backgroundImage: "linear-gradient(to right, #FF8605, #FFAB24)",
                fontSize: { xs: "17px", md: "24px" },
                fontWeight: "800",
                boxShadow: 4,
                textAlign: "center",
                py: "10px",
                px: "50px",
              }}
            >
              Recover
            </Button> */}

            <Button
              // disabled={!isRecapVerfid}
              onClick={submitHandler}
              sx={{
                border: "1.5px solid white",
                borderRadius: "30px",
                backgroundImage: "linear-gradient(to right, #FF8605, #FFAB24)",
                fontSize: { xs: "17px", md: "20px" },
                fontWeight: "800",
                boxShadow: 4,
                textAlign: "center",
                py: "8px",
                px: "40px",
                color: "black",

                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to right, #FFAB24, #FF8605)", // Reverse gradient
                  boxShadow: 6,
                },
                "&:active": {
                  backgroundImage:
                    "linear-gradient(to right, #FF8605, #FFAB24)", // Original gradient
                  boxShadow: 2,
                },
                "&:focus": {
                  backgroundImage:
                    "linear-gradient(to right, #FF8605, #FFAB24)", // Original gradient
                  boxShadow: 2,
                },
              }}
            >
              {loader ? (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography>Recover</Typography>
                  &nbsp; &nbsp;
                  <CircularProgress size={20} color="inherit" />
                </Box>
              ) : (
                "Recover"
              )}
            </Button>
          </Box>

          {/* <Box
            sx={{
              width: "100%",
              height: "8px",
              background: "#9e8164",
              borderRadius: "20px",
              mb: "5%",
            }}
          ></Box> */}
          {/* <Typography
            fontSize={{ xs: "18px", sm: "30px" }}
            sx={{
              fontWeight: "Bold",
              color: "#371f00",
              //   fontFamily: "MilkyNice",
              textAlign: "center",
            }}
          >
            New to RagDoll NFT?
          </Typography> */}

          {/* <Link
            href="/signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              sx={{
                borderRadius: "30px",
                background: "#ff5100",
                fontSize: { xs: "14px", md: "24px" },
                "&:hover": {
                  background: "#ff5100a1",
                },
                color: "#371f00",
                fontWeight: "800",
                boxShadow: 4,
                textAlign: "center",
                py: "10px",
                px: "20px",
                my: "5%",
              }}
            >
              Create Account
            </Button>
          </Link> */}
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
