"use client";
import React, { useEffect } from "react";

import Adminlayout from "@/adminPanel/Adminlayout";
import DashboardEcommerce from "@/../components/Dashboard/E-commerce";

export default function HeroSection() {
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px" }}>
        {/* <h3>Dashboard Advanced here</h3> */}
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
