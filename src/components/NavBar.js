"use client";
import { React, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Money";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { BorderBottom } from "@mui/icons-material";

import { styled } from "@mui/material";

const drawerWidth = 350;
const navItems = ["Home", "About", "Contact"];
// const navItems = [{}];

function DrawerAppBar(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setMobileOpen((prevState) => !prevState);

    console.log("activeIndex", activeIndex);
  };

  const submenuStyl = {
    paddingLeft: "50px",
    fontSize: "24px",
    textTransform: "uppercase",
    borderBottom: "1px #222528 solid",
    // color: "white",
  };
  const submenuStylMain = {
    fontSize: "24px",
    textTransform: "uppercase",
    borderBottom: "1px #222528 solid",
    // color: "white",
    padding: "0px !important",
    marginBottom: "30px",
  };

  const submenuStylMainDrop = {
    fontSize: "24px",
    textTransform: "uppercase",
    // color: "white",
    padding: "0px !important",
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    // setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "none" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          background: "transparent",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            top: "26px",
            right: "15px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, backgroundColor: "black" }}
          >
            <MenuIcon
              sx={{
                color: "white",

                background: "black",

                position: "absolute",
                height: "47px",
                width: "49px",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "none" } }}
          >
            MUI2
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "none", lg: "none" },
              backgroundColor: "black",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "red" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav style={{ backgroundColor: "red" }}>
        <Drawer
          // container={container}
          //  variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
              width: drawerWidth,
            },
          }}
          variant="temporary"
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              margin: "10px 20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              color: "white",
            }}
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </Typography>

          <List>
            <ListItem
              button
              onClick={handleClick}
              style={{
                display: "flex",
                justifyContent: "fkexStart",
                marginBottom: "30px",
                marginTop: "50px",

                borderBottom: "1px #222528 solid",
              }}
            >
              <Link href={"/home-loans"}>
                <ListItem
                  style={submenuStylMainDrop}
                  sx={{
                    color: activeIndex === 0 ? "green" : "white",
                    padding: "0px",
                  }}
                >
                  Home Loans
                </ListItem>
              </Link>
              {open ? (
                <ExpandLess sx={{ position: "absolute", right: "15px" }} />
              ) : (
                <ExpandMore sx={{ position: "absolute", right: "15px" }} />
              )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  href={"/buy-a-new-home"}
                  // onClick={handleDrawerToggle}
                  onClick={() => handleLinkClick(1)}
                  style={{ color: "white" }}
                >
                  <ListItem
                    button
                    style={submenuStyl}
                    sx={{ color: activeIndex === 1 ? "green" : "white" }}
                  >
                    Buy a New Home: Mortgage Solutions Tailored for New Home
                    Buyers
                  </ListItem>
                </Link>
                <Link
                  href={"/refinance-home-loan"}
                  onClick={() => handleLinkClick(2)}
                  style={{ color: "white" }}
                >
                  <ListItem
                    style={submenuStyl}
                    sx={{ color: activeIndex === 2 ? "green" : "white" }}
                  >
                    Refinance Your Home – Lower Your Payments!
                  </ListItem>
                </Link>

                <Link
                  href={"/buy-investment-property"}
                  onClick={() => handleLinkClick(3)}
                  style={{ color: "white" }}
                >
                  <ListItem
                    style={submenuStyl}
                    sx={{ color: activeIndex === 3 ? "green" : "white" }}
                  >
                    Investment Property Opportunities: Unlock Your Real Estate
                    Potential
                  </ListItem>
                </Link>
                <Link
                  href={"/compare-rates"}
                  onClick={() => handleLinkClick(4)}
                  style={{ color: "white" }}
                >
                  <ListItem
                    style={submenuStyl}
                    sx={{ color: activeIndex === 4 ? "green" : "white" }}
                  >
                    Compare Rates
                  </ListItem>
                </Link>
                {/* Add more submenu items as needed */}
              </List>
            </Collapse>
            <Link
              href={"/areas-we-service"}
              // onClick={handleDrawerToggle}
              style={{ color: "white" }}
              onClick={() => handleLinkClick(5)}
            >
              <ListItem
                style={submenuStylMain}
                sx={{
                  color: activeIndex === 5 ? "green" : "white",
                }}
              >
                AREAS WE SERVICES
              </ListItem>
            </Link>

            <Link
              href={"/about-us"}
              // onClick={handleDrawerToggle}
              style={{ color: "white" }}
              onClick={() => handleLinkClick(6)}
            >
              <ListItem
                style={submenuStylMain}
                sx={{ color: activeIndex === 6 ? "green" : "white" }}
              >
                ABOUT US
              </ListItem>
            </Link>

            <Link
              href={"/contact"}
              // onClick={handleLinkClick}
              style={{ color: "white" }}
              onClick={() => handleLinkClick(7)}
            >
              <ListItem
                style={submenuStylMain}
                sx={{ color: activeIndex === 7 ? "green" : "white" }}
              >
                TALK TO US
              </ListItem>
            </Link>
          </List>

          {/* {drawer} */}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window: PropTypes.func,
};

export default DrawerAppBar;
