import { Connect } from "../../../../dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"; // Import cookies API

var code = Math.floor(100000 + Math.random() * 900000);

export async function POST(request) {
  const body = await request.json();
  try {
    await Connect();

    // Clear the token cookie
    const cookiesStore = cookies();
    cookiesStore.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    let isDeleted = await cookiesStore.get("token");

    if (isDeleted.value == "") {
      console.log("isDeleted", isDeleted.value);
      return NextResponse.json({
        msg: "Logout Successful",
        success: true,
      });
    }

    return NextResponse.json({
      msg: "Logout Not",
      success: false,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
