// "use client";
// // components/AdminLayout.js
// import { React, useState } from "react";
// import AdminHeader from "./AdminHeader/index";
// import AdminSidebar from "./AdminSidebar/index";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";

// const AdminLayout = ({ children }) => {
//   // const theme = useTheme();
//   // const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [submenuOpen, setSubmenuOpen] = useState(false);

//   const [open, setOpen] = useState(true);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AdminHeader open={open} setOpen={setOpen} />
//       <AdminSidebar open={open} setOpen={setOpen} />
//       {children}
//     </Box>
//   );
// };

// export default AdminLayout;
