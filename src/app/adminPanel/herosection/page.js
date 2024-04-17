"use client";

import React from "react";

import Adminlayout from "../Adminlayout";
import FormElm from "./../../../components/FormElements/index";

import Breadcrumb from "./../../../components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "./../../../components/Checkboxes/CheckboxFive";
import CheckboxFour from "./../../../components/Checkboxes/CheckboxFour";
import CheckboxOne from "./../../../components/Checkboxes/CheckboxOne";
import CheckboxThree from "./../../../components/Checkboxes/CheckboxThree";
import CheckboxTwo from "./../../../components/Checkboxes/CheckboxTwo";
import SwitcherFour from "./../../../components/Switchers/SwitcherFour";
import SwitcherOne from "./../../../components/Switchers/SwitcherOne";
import SwitcherThree from "./../../../components/Switchers/SwitcherThree";
import SwitcherTwo from "./../../../components/Switchers/SwitcherTwo";
import DatePickerTwo from "./../../../components/FormElements/DatePicker/DatePickerTwo";
import DatePickerOne from "./../../../components/FormElements/DatePicker/DatePickerOne";
import MultiSelect from "./../../../components/FormElements/MultiSelect";
import SelectGroupTwo from "./../../../components/SelectGroup/SelectGroupTwo";
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
