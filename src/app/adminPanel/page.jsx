"use client";
import React, { useEffect } from "react";

import Adminlayout from "@/adminPanel/Adminlayout";
import DashboardEcommerce from "@/../components/Dashboard/E-commerce";

export default function HeroSection() {
  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }

  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        {/* <h3>Dashboard Advanced here</h3> */}
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
