import { Connect } from "../../../../dbconfig/dbconfig";
import HeroSection from "../../../../modals/HeroSectionModel";
// import refreshTokenModel from "./../../../../modals/refreshToken.Model";

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(NextRequest) {
  // const body = await NextRequest.json();
  try {
    await Connect();
    // console.log("Hero Banner >>>>>>>>>>>>>>>>>>", body);
    // console.log("Hero Banner >>>>>>>>>>>>>>>>>>", body);
    // console.log("Hero Banner >>>>>>>>>>>>>>>>>>", body);
    // console.log("Hero Banner >>>>>>>>>>>>>>>>>>", body);
    // console.log("Hero Banner >>>>>>>>>>>>>>>>>>", body);

    let mydata = await HeroSection.find();
    console.log("mydata", mydata);
    console.log("mydata", mydata);
    console.log("mydata", mydata);

    return NextResponse.json(
      {
        msg: "Get Successful",
        mydata,
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        },
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
