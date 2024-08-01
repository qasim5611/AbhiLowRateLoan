// pages/adminPanel.js

"use client";
import React, { useEffect, useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import Adminlayout from "./../adminPanel/Adminlayout";
import DashboardEcommerce from "./../../components/Dashboard/E-commerce";
export default function HeroSection() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
