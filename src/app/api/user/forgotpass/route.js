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

    await User.updateOne(
      {
        email: email,
      },
      {
        $set: {
          code: code,
        },
      }
    );

    let result = null;

    if (email) {
      async function sendEmail(to, name, code) {
        console.log("code", code);
        try {
          var smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "qmuhammad144@gmail.com",
              pass: "ovgytbqcdmdnaudo",
            },
            tls: { rejectUnauthorized: false },
          });

          console.log("smtpTransport", smtpTransport);

          //   const uniqueSubject = `${title} - ${new Date().toISOString()}`;
          //   const uniqueMessageId = `${new Date().getTime()}-${Math.random()}@example.com`;

          const mailOptions = {
            from: `"Verify Your Accout by Token" <info@lowratehomeloan.com.au>`,
            to: `${email}`,
            subject: "Please Vrifiy Your Email Account",
            html: `
             <h3 style="font-family: cursive">Hy ${name}!, Lowratehomeloan wansts to Verify your Email by Token... </h3>
             <h3>${code}</h3>`,
          };

          console.log(mailOptions);
          const response = await smtpTransport.sendMail(mailOptions);
          console.log("Mail Response:", response);
          result = true;
          return true;
        } catch (error) {
          console.error("Error sending email:", error);
          result = false;
          return false;
        }
      }

      result = await sendEmail(email, user.name, code);
    } else {
      result = false;
    }

    if (result !== false) {
      return NextResponse.json({
        msg: "Cool Email Found, Redirecting to Verify Email",
        user,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
