import React from "react";
import styles from "./Parallax.module.css";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Parallax = () => {
  const matches1 = useMediaQuery("(min-width:600px)");
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box sx={matches1 ? { display: "block" } : { display: "none" }}>
        <div className={styles.parallax}></div>
      </Box>
      <Box sx={matches ? { display: "block" } : { display: "none" }}>
        <Image src="/parallax-mobile.webp" height={550} width={500} />
      </Box>
    </Box>
  );
};

export default Parallax;
