import React from "react";

import Adminlayout from "../Adminlayout";

export default function HeroSection(props) {
  // Ensure this component only runs on the client side
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }
  return (
    <Adminlayout>
      <h3>Featured Top Section</h3>
    </Adminlayout>
  );
}
