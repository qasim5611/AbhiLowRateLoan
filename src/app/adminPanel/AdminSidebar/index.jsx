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

export default function AdminPanel({ open, setOpen }) {
  const theme = useTheme();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);

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
                <InboxIcon />
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
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Featured Top"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Lenders Banner"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Featured Service"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Application Process"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
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
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="FAQs" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Consultation Form"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <List>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={handleSubmenuToggle2}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Home Loans"
                      sx={{ opacity: open ? 1 : 0 }}
                    />

                    {open ? (
                      <>
                        {submenuOpen2 ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ChevronRightIcon />
                        )}
                      </>
                    ) : null}
                  </ListItemButton>
                </ListItem>
                <Collapse in={submenuOpen2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "center",
                          px: 2.5,
                          textAlign: "center",
                        }}
                      >
                        <ListItemText
                          primary="Buy New Home"
                          sx={{
                            opacity: open ? 1 : 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "center",
                          px: 2.5,
                          textAlign: "center",
                        }}
                      >
                        <ListItemText
                          primary="Refinance Home Loan"
                          sx={{
                            opacity: open ? 1 : 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "center",
                          px: 2.5,
                          textAlign: "center",
                        }}
                      >
                        <ListItemText
                          primary="Buy An Investement Property"
                          sx={{
                            opacity: open ? 1 : 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: "center",
                          px: 2.5,
                          textAlign: "center",
                        }}
                      >
                        <ListItemText
                          primary="Compare Rates"
                          sx={{
                            opacity: open ? 1 : 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>

                    {/* Add more submenu items as needed */}
                  </List>
                </Collapse>
              </List>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Services"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="About Us"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary="Talk To Us"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {/* Add more submenu items as needed */}
            </List>
          </Collapse>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}
