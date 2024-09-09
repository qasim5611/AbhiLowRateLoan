"use client";

import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  CircularProgress,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { getReputeableBanner } from "./../redux/slices/globalSlice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid2";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { display } from "@mui/system";
export function ReputableLenders(props) {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: "#fff",
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // ...theme.applyStyles("dark", {
    //   backgroundColor: "#1A2027",
    // }),
  }));
  let dispatch = useDispatch();

  const [record2, setrecord2] = useState([]);

  const matches = useMediaQuery("(max-width:1200px)");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let resp = await dispatch(getReputeableBanner());
  //     console.log(".....>>>>>>>getReputeableBanner", resp?.payload?.data?.data);
  //     setrecord2(resp?.payload?.data?.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_85ee71-82"
          className="kt-row-layout-inner kt-layout-id_85ee71-82"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-right-to-left kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_87516b-7b">
              {record2 && record2.length > 0 ? (
                <>
                  {record2.map((itm, index) => {
                    return (
                      <div key={index} className="kt-inside-inner-col">
                        <h2
                          className="kt-adv-heading_4fee88-b0 wp-block-kadence-advancedheading"
                          data-kb-block="kb-adv-heading_4fee88-b0"
                        >
                          <strong>{itm.tagline}</strong>
                        </h2>

                        <div className="wp-block-kadence-image kb-image_12d362-b2 desktop-lender-img">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              loading="lazy"
                              style={{
                                margin: "0px auto",
                              }}
                              src={itm.image_url}
                              alt="home loans lenders list"
                              className="kb-img wp-image-4131"
                              // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-1024x432.webp 1024w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-300x127.webp 300w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-768x324.webp 768w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders.webp 1366w"
                              // sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                          </figure>
                        </div>

                        <div className="wp-block-image mobile-lender-img">
                          <figure className="aligncenter size-full">
                            <img
                              decoding="async"
                              loading="lazy"
                              // width="594"
                              // height="829"
                              src="/images/lenders-vertical.jpg"
                              alt="loan lenders"
                              className="wp-image-4718"
                              // srcSet="/images/lenders-vertical.webp"
                              // sizes="(max-width: 594px) 100vw, 594px"
                            />
                          </figure>
                        </div>

                        <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_a8a064-c7">
                          <div className="kt-block-spacer kt-block-spacer-halign-center">
                            <hr className="kt-divider" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="kt-inside-inner-col">
                  <h2
                    className="kt-adv-heading_4fee88-b0 wp-block-kadence-advancedheading"
                    data-kb-block="kb-adv-heading_4fee88-b0"
                  >
                    <strong>Home Loans from over 53+ Reputable Lenders</strong>
                  </h2>

                  <div className="wp-block-kadence-image kb-image_12d362-b2 desktop-lender-img">
                    <figure className="aligncenter size-large">
                      <img
                        decoding="async"
                        loading="lazy"
                        style={{
                          margin: "0px auto",
                        }}
                        src="/pics/home-loans-lenders.png"
                        alt="home loans lenders list"
                        className="kb-img wp-image-4131"
                        // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-1024x432.webp 1024w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-300x127.webp 300w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-768x324.webp 768w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders.webp 1366w"
                        // sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    </figure>
                  </div>

                  <div className="wp-block-image mobile-lender-img">
                    <figure className="aligncenter size-full">
                      <img
                        decoding="async"
                        loading="lazy"
                        // width="594"
                        // height="829"
                        src="/images/lenders-vertical.jpg"
                        alt="loan lenders"
                        className="wp-image-4718"
                        // srcSet="/images/lenders-vertical.webp"
                        // sizes="(max-width: 594px) 100vw, 594px"
                      />
                    </figure>
                  </div>

                  <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_a8a064-c7">
                    <div className="kt-block-spacer kt-block-spacer-halign-center">
                      <hr className="kt-divider" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}

      <Box className="Parentlenderlogo">
        <Box className="lenderlogo">
          <Image
            src="/pics/firstmac.jpg"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/Ubank.webp"
            alt="brand"
            width={250}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/Auswide-Bank-Logo-2021.png"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/ING_LOGO_COLOUR_RGB.JPG"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/heritage bank.jpg"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/New ME Bank logo-01-RGB.jpg"
            alt="brand"
            width={90}
            height={100}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/NEW BoM_Alt_Horizontal Stacked_POS_RGB.jpg"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/LS-Logo-_0000_LS-Colour.jpg"
            alt="brand"
            width={150}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/STG MASTER LOGO.PNG"
            alt="brand"
            width={180}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/amp.jpg"
            alt="brand"
            width={150}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/Teachers-Mutual-Bank-600.jpg"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/MyState_Logox2.png"
            alt="brand"
            width={180}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/Bluestone Secondary Logo .jpg"
            alt="brand"
            width={180}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/bank_west_australia.JPG"
            alt="brand"
            width={150}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/Health Professional bank .png"
            alt="brand"
            width={200}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/CHL-Final-RGB.jpg"
            alt="brand"
            width={170}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/Full Colour_PRIMARY LOGO_Company Statement Tagline_300dpi.png"
            alt="brand"
            width={200}
            height={100}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/Suncorp_Hor_CMYK.jpg"
            alt="brand"
            width={120}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/logo.gif"
            alt="brand"
            width={200}
            height={100}
            style={{ margin: "0px auto" }}
          />
        </Box>
        <Box className="lenderlogo">
          <Image
            src="/pics/FinalCWB.png"
            alt="brand"
            width={350}
            height={250}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/NAB Horizontal TAB_RGB.JPG"
            alt="brand"
            width={110}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/ANZ_DIGITAL_H_Boxed-white+blue+deepcurrent.png"
            alt="brand"
            width={110}
            height={100}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/Resimac logo.jpeg"
            alt="brand"
            width={75}
            height={200}
            style={{ margin: "0px auto" }}
          />
        </Box>

        <Box className="lenderlogo">
          <Image
            src="/pics/Mac logo with isolation zone (macquarie final)-01.png"
            alt="brand"
            width={90}
            height={100}
            style={{ margin: "0px auto" }}
          />
        </Box>
      </Box>

      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}
      {/* //////////////////////////////// Mobile Area //////////////////////// */}

      {/* <Box style={{ marginTop: "70px", display: matches ? "block" : "none" }}>
        <Grid container spacing={2} className="parenlogonewbrandmob">
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/CBA-CAN_CMYK_Coated.jpg"
                alt="brand"
                width={130}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/firstmac.jpg"
                alt="brand"
                width={140}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <br />
          <br />
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Auswide-Bank-Logo-2021.png"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/ING_LOGO_COLOUR_RGB.JPG"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/heritage bank.jpg"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/New ME Bank logo-01-RGB.jpg"
                alt="brand"
                width={80}
                height={100}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="parenlogonewbrandmob">
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/NEW BoM_Alt_Horizontal Stacked_POS_RGB.jpg"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/LS-Logo-_0000_LS-Colour.jpg"
                alt="brand"
                width={120}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/STG MASTER LOGO.PNG"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/amp.jpg"
                alt="brand"
                width={130}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Teachers-Mutual-Bank-600.jpg"
                alt="brand"
                width={170}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/MyState_Logox2.png"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="parenlogonewbrandmob">
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Bluestone Secondary Logo .jpg"
                alt="brand"
                width={160}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/bank_west_australia.JPG"
                alt="brand"
                width={130}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Ubank.webp"
                alt="brand"
                width={250}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/NAB Horizontal TAB_RGB.JPG"
                alt="brand"
                width={100}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Suncorp_Hor_CMYK.jpg"
                alt="brand"
                width={120}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/CHL-Final-RGB.jpg"
                alt="brand"
                width={150}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="parenlogonewbrandmob">
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Health Professional bank .png"
                alt="brand"
                width={170}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Resimac logo.jpeg"
                alt="brand"
                width={90}
                height={200}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={2}>
            <Box className="lenderlogo">
              <Image
                src="/pics/Mac logo with isolation zone (macquarie final)-01.png"
                alt="brand"
                width={90}
                height={100}
                style={{ margin: "0px auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
