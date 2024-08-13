import { Connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../modals/userModel";
// import refreshTokenModel from "./../../../../modals/refreshToken.Model";

import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

var code = Math.floor(100000 + Math.random() * 900000);

const randomTokenString = function () {
  return crypto.randomBytes(40).toString("hex");
};
export async function POST(NextRequest) {
  const body = await NextRequest.json();
  try {
    await Connect();
    console.log("body at verify code................>", body);
    // console.log("emailid", email);
    console.log("token", body.values.token);
    console.log("email token", body.email);

    const Usertoken = body.values.token;
    const email = body.email;

    let isUserfind = await User.findOne({ email });
    console.log("is user is find?", isUserfind.code);

    if (isUserfind) {
      if (isUserfind.code == Usertoken) {
        return NextResponse.json({
          msg: "You Have Been Verified for Password Update. Redirecting...",
          email,
        });
      }
      return NextResponse.json({
        msg: "Sorry Your Token Is Not Correct",
        email,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
