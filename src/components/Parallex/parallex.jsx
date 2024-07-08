import React from "react";
import styles from "./Parallax.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Image from "next/image";

const Parallax = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const matches2 = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <Box sx={matches2 ? { display: "block" } : { display: "none" }}>
        <div className={styles.parallax}></div>
      </Box>
      <Box sx={matches ? { display: "block" } : { display: "none" }}>
        <Image src="/parallax-mobile.webp" width={500} height={600} />
      </Box>
    </Box>
  );
};

export default Parallax;
