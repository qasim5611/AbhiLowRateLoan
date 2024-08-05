import { Connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../modals/userModel";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../../../../lib/page";

var code = Math.floor(100000 + Math.random() * 900000);

const randomTokenString = function () {
  return crypto.randomBytes(40).toString("hex");
};
export async function POST(NextRequest) {
  const body = await NextRequest.json();
  try {
    await Connect();
    console.log("body ................>", body);
    // console.log("Server side here", body?.name);
    // console.log("Server side here", body?.email);
    // console.log("Server side here", body?.password);

    // console.log(body);
    const origin = "http://localhost:3000";
    // const origin = "https://gaddollcat.herokuapp.com";

    const result = await User.findOne({ email: body.email });
    if (result) {
      // send already registered error in email to prevent user enumeration
      console.log("Email alredy exist");
      return NextResponse.json(
        {
          msg: "Email Already Exist",
        },
        {
          headers: {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        }
      );
    }

    // create user object
    const user = new User(body);
    console.log(user);

    function hash(password) {
      return bcrypt.hashSync(password, 10);
    }

    // first registered user is an admin
    const isFirstUser = (await User.countDocuments({})) === 0;
    user.role = isFirstUser ? "Admin" : "User";
    user.verificationToken = randomTokenString();

    // hash password
    user.passwordHash = hash(body.password);

    // save user
    await user.save();
    console.log(user);
    // send email
    console.log("sendVerificationEmail befor call.......>", user, origin);
    await sendVerificationEmail(user, origin);
    // return res.send({
    //   msg: "Verify your mail Now Plz",
    // });
    return NextResponse.json(
      { msg: "Verify your mail Now Plz" },
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
