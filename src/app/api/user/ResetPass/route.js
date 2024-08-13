import { Connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../modals/userModel";

import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

import bcrypt from "bcrypt";

export async function POST(NextRequest) {
  const body = await NextRequest.json();
  try {
    await Connect();
    console.log("body at verify code................>", body);
    console.log("token", body.values);
    console.log("email token", body.email);

    let passhash = body.values.password;
    let email = body.email;

    let isUserfind = await User.findOne({ email });
    console.log("is user is find?", isUserfind.code);

    passhash = await bcrypt.hash(passhash, 10);

    if (isUserfind) {
      let isUpdates = await User.updateOne(
        {
          email: email,
        },
        {
          $set: {
            passwordHash: passhash,
          },
        }
      );

      if (isUpdates) {
        return NextResponse.json({
          msg: "Password Updated",
          isUpdates,
        });
      }

      return NextResponse.json({
        msg: "Password Not Updated",
        isUpdates,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
