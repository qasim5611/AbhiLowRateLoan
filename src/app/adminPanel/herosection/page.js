"use client";

import React from "react";

import Adminlayout from "../Adminlayout";
import FormElm from "@/../components/FormElements/index";

import Breadcrumb from "@/../components/Breadcrumbs/Breadcrumb";

export default function HeroSection(props) {
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px" }}>
        <Breadcrumb pageName="HeroSection" />

        <h3>Hero Section</h3>
        <FormElm />
      </div>
    </Adminlayout>
  );
}
