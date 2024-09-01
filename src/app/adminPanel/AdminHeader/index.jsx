"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import {
  logoutuserNow,
  clearLoginState,
} from "../../../redux/slices/globalSlice";
import { CircularProgress, Box, Typography } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AdminHeader({ open, setOpen }) {
  const dispatch = useDispatch();
  const router = useRouter(); // Use the router inside the component

  const [loader, setloader] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const logoutUser = async () => {
    setloader(true);
    let resp = await dispatch(
      logoutuserNow({
        headers: {
          "Cache-Control": "no-cache",
        },
      })
    );
    console.log("resp logout", resp);
    let resp2 = await dispatch(clearLoginState);
    console.log("resp2 clearLoginState", resp2);
    if (resp?.payload?.data.msg === "Logout Successful") {
      toast.warn("Logout Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setloader(false);

      // also clear login redux state ms

      router.replace("/login?reload=true");
    }
  };

  return (
    <Box>
      <AppBar position="fixed" open={open} style={{ backgroundColor: "green" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Link href="/adminPanel" passHref>
              <Typography variant="h6" noWrap component="div" color="white">
                Admin Panel (Low Rate Home Loan)
              </Typography>
            </Link>
          </Box>
          <Box>
            <Button
              onClick={logoutUser}
              style={{ textDecoration: "none", color: "white" }}
            >
              {loader ? (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    mb: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      mb: "0px !important",
                      padding: "10px 20px !important",
                    }}
                  >
                    Logout
                  </Typography>
                  &nbsp; &nbsp;
                  <CircularProgress size={20} color="inherit" />
                </Box>
              ) : (
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    mb: "0px !important",
                  }}
                >
                  <Typography
                    sx={{
                      mb: "0px !important",
                      padding: "1px 10px !important",
                    }}
                  >
                    Logout
                  </Typography>

                  {/* <CircularProgress size={20} color="inherit" /> */}
                </Box>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
