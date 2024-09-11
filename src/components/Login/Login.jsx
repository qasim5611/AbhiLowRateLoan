"use client";
import React, { useState, useEffect, useContext } from "react";
import API from "./../../redux/url.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";

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
  useMediaQuery,
  Button,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

// import back from "../../images/welcome-back.png";
import userName from "./../../../public/images/email.png";
import email from "../../images/email.png";
import padlock from "../../../public/images/padlock.png";
import check from "../../images/check-mark.png";
// import marketing from "../../images/marketing.png";
// import robot from "../../images/robot.png";
import Link from "next/link.js";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MuiAlert from "@mui/material/Alert";

import { authuser } from "./../../redux/slices/globalSlice.js";
import { isLogin } from "./../../Hooks/useAuth.js";
import { myRole } from "./../../Hooks/useAuth.js";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const matches1 = useMediaQuery("(min-width:1050px)");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const router = useRouter();

  const [general, setgeneral] = useState(false);
  const [loader, setLoader] = useState(false);
  const matches2 = useMediaQuery("(min-Width:600px)");

  let dispatch = useDispatch();

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [emailerr, setemailerr] = useState("");
  const [passerr, setpasserr] = useState("");

  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(values.email);
    console.log("isemailVer", isemailVer);

    const pass = values.password;
    console.log("pass", pass);

    let isvalid = true;

    if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setpasserr("");
    } else if (pass == "") {
      isvalid = false;
      setpasserr("Password ShouldNot Be Empty");
      setemailerr("");
    } else {
      setemailerr("");
      setpasserr("");
    }

    return isvalid;
  };

  const Submithandler = async (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    console.log("isFormvalid", isFormvalid);

    if (isFormvalid) {
      setLoader(true);
      console.log("values", values);
      await dispatch(authuser(values));
      console.log("ok");
      window.location.reload();
    }
  };

  const LoginMsg = useSelector((store) => store.global.data);

  // console.log(LoginMsg?.data?.payload?.msg);

  useEffect(() => {
    if (LoginMsg?.payload?.msg == "Password Not Correct") {
      setLoader(false);
      toast.error("Password Not Correct!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      LoginMsg?.payload?.msg ==
      "NOT Verified, Check Mail, We Already Have Send you Email"
    ) {
      setLoader(false);

      toast.info("NOT Verified, Check Mail, We Already Have Send you Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (LoginMsg?.payload?.msg == "Login Successfull") {
      setLoader(false);

      toast.success("Admin Login Successfull", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Login Successfull");
      // navigate("/adminPanel", { replace: true });
      router.push("/adminPanel");
    } else if (LoginMsg?.payload?.msg == "Login Successfull") {
      // dispatch(setSnackbar(true, "success", "Login Successfull"));
      setLoader(false);

      toast.success("User Login Successfull", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/logo", { replace: true });
    } else if (LoginMsg?.payload?.msg == "Not available email") {
      // dispatch(setSnackbar(true, "error", "Not available email"));
      setLoader(false);

      toast.warn("Not available email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [LoginMsg, router]);

  const [isRecapVerfid, setisRecapVerfid] = useState(true);

  function onChange(value) {
    console.log("Captcha value:", value);
    setisRecapVerfid(true);
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgb(255 189 117 / 54%) 0%, rgba(255, 250, 246, 1) 100%)",
        mb: "30px",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <br />
          <Link
            href={"/"}
            className="brand has-logo-image"
            // style={{
            //   position: "relative",
            //   top: "-196px",
            // }}
          >
            <Image
              src="lowratehomeloan-logo.svg"
              className="custom-logo svg-logo-image"
              alt="low rate home loan logo"
              decoding="async"
              width={200}
              height={200}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "2%",
              mt: "5%",
            }}
          >
            <Image
              src="/authLogo.png"
              className="custom-logo svg-logo-image"
              alt="low rate home loan logo"
              decoding="async"
              width={60}
              height={60}
              style={{ cursor: "pointer" }}
            />
            &nbsp;
            <Box>
              <Typography
                fontSize={{ xs: "18px", sm: "28px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "Poppins, sans-serif",
                  position: "relative",
                  top: "2px",
                }}
              >
                Admin Account
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
                Log In
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
              <IconButton
                sx={{ p: "5px", padding: "10px !important" }}
                aria-label="menu"
              >
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
                autoComplete
                type="email"
                required
              />
            </Paper>
            <center>
              {emailerr ? <div style={errmsg}>{emailerr}</div> : null}
            </center>

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
              <IconButton
                sx={{ p: "5px", padding: "10px !important" }}
                aria-label="menu"
              >
                {/* <img src={padlock} alt="" style={{ maxWidth: "40px" }} /> */}
                <Image src={padlock} alt="" style={{ maxWidth: "40px" }} />
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
                placeholder="Enter your Password"
                type="password"
                onChange={handleChange("password")}
              />
            </Paper>
            <center>
              {passerr ? <div style={errmsg}>{passerr}</div> : null}
            </center>
          </Box>
          <Box mt={-1.8} mb={1} width="100%" textAlign="right">
            <Link
              href="/Forgotpass"
              style={{ textDecoration: "none", color: "#ff6704" }}
            >
              <Box color="#ff6704" fontSize={{ md: "15px", xs: "13px" }}>
                <p>Forgot password?</p>
              </Box>
            </Link>
          </Box>

          <Box
            border="2.5px solid #C96100"
            borderRadius="30px"
            my={3}
            sx={{ width: "fit-content" }}
          >
            <Button
              // disabled={!isRecapVerfid}
              onClick={Submithandler}
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
              }}
              className="LoginButon"
            >
              {loader ? (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography>Log In</Typography>
                  &nbsp; &nbsp;
                  <CircularProgress size={20} color="inherit" />
                </Box>
              ) : (
                "Log In"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
      <br />
      <br />
    </Box>
  );
};

export default Login;
