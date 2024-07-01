import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

import Script from "next/script";
import HomeComp from "./Home/page";

import "./../../public/assets/Css/style.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomeComp />
    </div>
  );
}
