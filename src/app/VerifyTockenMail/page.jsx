"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link.js";
import PasswordIcon from "@mui/icons-material/Password";
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
} from "@mui/material";
import { Box } from "@mui/system";

import back from "../../images/welcome-back.png";
// import userName from "../../images/man-user.png";
import userName from "./../../../public/images/padlock.png";

import email from "../../images/email.png";
import padlock from "../../images/padlock.png";
import check from "../../images/check-mark.png";
import marketing from "../../images/marketing.png";
import robot from "../../images/robot.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VerifyTokenForPass } from "./../../redux/slices/globalSlice.js";

const VerifyTockenMail = () => {
  const router = useRouter();

  let dispatch = useDispatch();

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  const [loader, setLoader] = useState(false);

  const [values, setValues] = useState({ token: "" });

  const [tokenerr, settokenerr] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const validate = () => {
    let isvalid = true;

    console.log("values.token", values.token);

    if (values.token == "") {
      isvalid = false;
      settokenerr("Token Should not  be Empty!");
    } else {
    }

    return isvalid;
  };

  const ForgPassDetail = useSelector((store) => store.global);
  console.log("ForgPassDetail", ForgPassDetail);
  let mailforcode = ForgPassDetail.ForgPassMsgMail;

  console.log("UserMailForVerify mailforcode", mailforcode);

  const Slicecode = useSelector((store) => store.global);
  let isVerifiedToEdit = Slicecode.TokenMsgPassUpdate;

  console.log("isVerifiedToEdit", isVerifiedToEdit);

  if (
    isVerifiedToEdit ==
    "You Have Been Verified for Password Update. Redirecting..."
  ) {
    setTimeout(() => {
      // navigate("/resetpass", { replace: true });
      router.push("/ResetPass", { replace: true });
    }, 2000);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      let obj = {
        email: mailforcode,
        values: values,
      };
      console.log("verify code obj", obj);
      toast.warn("Please wait...", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(VerifyTokenForPass(obj));
    }
  };

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
            Enter gmail Code
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "5%",
            }}
          >
            <PasswordIcon
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
                Have an email code?
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "20px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "Poppins, sans-serif",
                  position: "relative",
                  top: "2px",
                }}
              >
                Verify Now
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
                placeholder="Enter Your Recovery Code"
                onChange={handleChange("token")}
              />
            </Paper>
            <center>
              {tokenerr ? <div style={errmsg}>{tokenerr}</div> : null}
            </center>
          </Box>

          <Box
            border="2.5px solid #C96100"
            borderRadius="30px"
            my={3}
            sx={{ width: "fit-content" }}
          >
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
        </Box>
      </Container>
    </Box>
  );
};

export default VerifyTockenMail;
