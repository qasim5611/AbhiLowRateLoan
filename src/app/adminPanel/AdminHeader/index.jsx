"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Button } from "react-bootstrap";

import { logoutuserNow } from "../../../redux/slices/globalSlice";

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const logoutUser = async () => {
    dispatch(logoutuserNow());
    // window.location.reload();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Adjust the timeout delay as needed
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000); // Adjust the timeout delay as needed
    // router.push("/login");
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
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
