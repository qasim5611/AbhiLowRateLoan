// pages/adminPanel.js

"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import Adminlayout from "@/adminPanel/Adminlayout";
import DashboardEcommerce from "@/../components/Dashboard/E-commerce";

export default function HeroSection() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // Redirect to login page if not authenticated
    } else if (session && session.user.role !== "admin") {
      router.push("/"); // Redirect to home if not admin
    } else if (session && session.user.role === "admin") {
      setIsLoading(false); // Allow rendering if admin
    }
  }, [session, status, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading while checking auth status
  }

  return (
    <Adminlayout>
      <div style={{ marginTop: "65px", padding: "20px", width: "100%" }}>
        <DashboardEcommerce />
      </div>
    </Adminlayout>
  );
}
