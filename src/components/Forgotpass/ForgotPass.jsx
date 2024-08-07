import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { Route, Navigate } from "react-router-dom";
import history from "../history/history.js";
import { useNavigate } from "react-router-dom";

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
} from "@mui/material";
import { Box } from "@mui/system";
import back from "../../images/welcome-back.png";
import userName from "../../images/man-user.png";
import email from "../../images/email.png";
import padlock from "../../images/padlock.png";
import check from "../../images/check-mark.png";
import marketing from "../../images/marketing.png";
import robot from "../../images/robot.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotpass } from "./../../redux/slices/globalSlice.js";

const Signup = () => {
  const navigate = useNavigate();

  const [authloginMsg, setauthloginMsg] = useState("");

  const loginMsg = useSelector((state) => state.Auth.data.msg);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [newtest, setNewtest] = useState(false);

  const EmailMsg = useSelector((state) => state.Auth.ForgPassMsg);

  console.log("AllFormsData", EmailMsg);

  useEffect(() => {
    setNewtest(EmailMsg);
  }, [EmailMsg]);

  if (newtest == "Cool Email Found, Redirecting to Change Password") {
    setTimeout(() => {
      setNewtest(false);
      // dispatch(clearstate());setNewtest

      navigate("/verifyTockenMail", { replace: true });
    }, 2000);
  }

  let dispatch = useDispatch();

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  if (loginMsg == "Login Successfull") {
    // setauthloginMsg("");
    setTimeout(() => {
      // navigate("/blog", { replace: true });
    }, 5000);
  }

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

  const submitHandler = (e) => {
    e.preventDefault();

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      dispatch(forgotpass(values));
      console.log("ok");
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
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
              color: "#903800",
              borderBottom: "3px solid #903800",
              my: "5%",
              fontFamily: "MilkyNice",
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
            <img
              src={back}
              alt=""
              style={{ marginRight: "30px", maxWidth: "80px", width: "100%" }}
            />
            <Box>
              <Typography
                fontSize={{ xs: "18px", sm: "30px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "MilkyNice",
                }}
              >
                Have an email?
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "20px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "MilkyNice",
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
              <IconButton sx={{ p: "5px" }} aria-label="menu">
                <img src={userName} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
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
            <Button
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
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "8px",
              background: "#9e8164",
              borderRadius: "20px",
              mb: "5%",
            }}
          ></Box>
          <Typography
            fontSize={{ xs: "18px", sm: "30px" }}
            sx={{
              fontWeight: "Bold",
              color: "#371f00",
              //   fontFamily: "MilkyNice",
              textAlign: "center",
            }}
          >
            New to RagDoll NFT?
          </Typography>

          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
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
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
