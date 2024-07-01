import { Connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../modals/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

var code = Math.floor(100000 + Math.random() * 900000);

export async function POST(request) {
  const body = await request.json();
  try {
    await Connect();

    // Create the response object
    const response = NextResponse.json({
      msg: "Logout Successful",
      success: true,
    });

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    // Set the redirection URL
    // response.headers.set("Location", "/login");
    // response.status(302);
    // NextResponse.redirect("/login");
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
