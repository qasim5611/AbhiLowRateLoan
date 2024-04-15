import React from "react";

import Adminlayout from "../adminPanel/Adminlayout";
import DashboardEcommerce from "./../../components/Dashboard/E-commerce";

export default function HeroSection(props) {
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px" }}>
        <h3>Dashboard</h3>
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
