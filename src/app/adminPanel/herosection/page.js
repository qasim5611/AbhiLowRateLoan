"use client";

import React from "react";

import Adminlayout from "../Adminlayout";

import Breadcrumb from "@/../components/Breadcrumbs/Breadcrumb";
import { Grid, TextField } from "@mui/material";

export default function HeroSection(props) {
  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <Breadcrumb pageName="Home Banner" />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label for="heroSec" className="lblform">
              Banner Tag Line:
            </label>

            <textarea id="heroSec" name="w3review" rows="3" cols="30">
              Please Enter:
            </textarea>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label for="heroSec" className="lblform">
              Refinance Button Text
            </label>
            <br />
            <input type="text" className="textfild" placeholder="(Left)" />
          </Grid>

          <Grid item xs={6}>
            <label for="heroSec" className="lblform">
              Lown Button Text
            </label>
            <br />
            <input type="text" className="textfild" placeholder="(Right)" />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item>
            <button>Update Home Banner</button>
          </Grid>
        </Grid>
      </div>
    </Adminlayout>
  );
}
