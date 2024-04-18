// "use client";
// import React from "react";

// import Adminlayout from "@/adminPanel/Adminlayout";
// import DashboardEcommerce from "@/../components/Dashboard/E-commerce";

// export default function HeroSection(props) {
//   return (
//     <Adminlayout>
//       <div style={{ marginTop: "65px", padding: "20px" }}>
//         <h3>Dashboard Advanced here</h3>
//         <DashboardEcommerce />
//       </div>
//     </Adminlayout>
//   );
// }

"use client";
import React, { useEffect } from "react";

import Adminlayout from "@/adminPanel/Adminlayout";
import DashboardEcommerce from "@/../components/Dashboard/E-commerce";

export default function HeroSection(props) {
  // Execute code only in the browser environment
  useEffect(() => {
    // Your browser-specific code here
    // For example, if you have code that interacts with the window object
    // or relies on browser-specific APIs, you can place it here
  }, []);

  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px" }}>
        <h3>Dashboard Advanced here</h3>
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
