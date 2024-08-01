"use client";
import { React, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DomainIcon from "@mui/icons-material/Domain";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiDrawer from "@mui/material/Drawer";

import Image from "next/image";
import Link from "next/link";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import StorageIcon from "@mui/icons-material/Storage"; // service
import WifiTetheringIcon from "@mui/icons-material/WifiTethering"; // global
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; //lender
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // Featu service
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // app process
import QuizIcon from "@mui/icons-material/Quiz"; // faqs
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import CollectionsIcon from "@mui/icons-material/Collections";

export default function AdminPanel({ open, setOpen }) {
  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }

  const theme = useTheme();
  const [submenuOpen, setSubmenuOpen] = useState(true);
  const [submenuOpen2, setSubmenuOpen2] = useState(true);

  const drawerWidth = 240;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const handleSubmenuToggle2 = () => {
    setSubmenuOpen2(!submenuOpen2);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/adminPanel">
            <Image
              src="/images/adminLogo.png"
              alt="Description of the image"
              width={60}
              height={100}
            />
          </Link>
          <IconButton onClick={handleDrawerClose} style={{ color: "black" }}>
            {theme.direction === "rtl" ? null : ( //   <ChevronRightIcon />
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/adminPanel/herosection">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DomainIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Hero Section"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List> */}

        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleSubmenuToggle}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="LowRateLoan"
                sx={{ opacity: open ? 1 : 0 }}
              />

              {open ? (
                <>{submenuOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}</>
              ) : null}
            </ListItemButton>
          </ListItem>
          <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/herosection"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ViewCarouselIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Hero Banner"
                      sx={{
                        opacity: open ? 1 : 0,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/featuresTop"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <StorageIcon />
                      <div className="ripple">
                        <div className="rippledot"></div>
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary="Featured Top"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/reputableLenders"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AddPhotoAlternateIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Lenders Banner"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/featuredservices"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <DesignServicesIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Featured Service"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/featuredservicesImages"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <CollectionsIcon />
                      <div className="ripple">
                        <div className="rippledot"></div>
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary="Services Images"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/applicationprocess"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Application Process"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              {/* <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/testimonials"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemText
                      primary="Testimonials"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem> */}

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/faqs"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <QuizIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="FAQs"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <Link
                  href={"/adminPanel/aboutUsBanner"}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AddPhotoAlternateIcon />{" "}
                      <div className="ripple">
                        <div className="rippledot"></div>
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary="AboutUs Banner"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}
