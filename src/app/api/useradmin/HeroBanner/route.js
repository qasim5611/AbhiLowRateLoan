import { Connect } from "../../../../dbconfig/dbconfig";
import HeroSection from "../../../../modals/HeroSectionModel";
// import refreshTokenModel from "./../../../../modals/refreshToken.Model";

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(NextRequest) {
  const body = await NextRequest.json();
  try {
    await Connect();
    console.log("Hero Banner Editor >>>>>>>>>>>>>>>>>>", body);
    console.log("Hero Banner idtoUpdate >>>>>>>>>>>>>>>>>>", body.idtoUpdate);

    const { tagline, refinancebtn, lownbtn } = body;

    let data = Object.assign({}, body);
    let image;
    if (body.file) {
      image = body.file.filename;
      data.image = image;
    }

    console.log("data", data);
    // let update = await HeroSection.findOneAndUpdate(
    //   { _id: body.idtoUpdate },
    //   data,
    //   {
    //     isNew: true,
    //   }
    // );

    const update = await HeroSection.findOneAndUpdate(
      { _id: body.idtoUpdate },
      { $set: data }, // Using $set to update only specified fields
      { new: true } // This returns the updated document
    );
    if (update) {
      console.log("update", update);

      return NextResponse.json({
        msg: "Updated Successful",
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
