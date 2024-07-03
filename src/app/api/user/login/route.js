import { Connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../modals/userModel";
// import refreshTokenModel from "./../../../../modals/refreshToken.Model";

import { NextRequest, NextResponse } from "next/server";

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
    console.log("body at route auth ................>", body);

    const { email, password } = body;
    // console.log("body ip", body);
    const ipAddress = "http://localhost:3000/";

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        auth: false,
        token: null,
        msg: "Not available email",
      });
    }

    var passwordIsValid = bcrypt.compareSync(password, user.passwordHash);

    // var userIsVerifed = user.isVerified;
    console.log("passwordIsValid", passwordIsValid);

    if (passwordIsValid == true) {
      // function generateJwtToken(user) {
      //   return jwt.sign(
      //     { sub: user.id, id: user.id },
      //     process.env.jwt_secret_key,
      //     {
      //       expiresIn: "15m",
      //     }
      //   );
      // }

      // const jwtToken = generateJwtToken(user);

      // return basic details and token

      const tokenData = {
        id: user._id,
        userName: user.name,
        email: user.email,
      };
      const jwtToken = jwt.sign(tokenData, "lowrateloansecret", {
        expiresIn: "1d",
      });
      // return token

      const responce = NextResponse.json({
        user,
        jwtToken,
        msg: "Login Successfull",
        success: true,
      });

      responce.cookies.set("token", jwtToken, {
        httpOnly: true,
      });

      return responce;
    }

    return NextResponse.json({
      auth: false,
      token: null,
      msg: "Password Not Correct",
      user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
