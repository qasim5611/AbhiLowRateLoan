"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "./../css/satoshi.css";
import "./../css/style.css";
import "./../css/style-blocks-rowlayout.css";

// import CircularProgress from '@mui/material/CircularProgress';
import React from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import { Provider } from "react-redux";
import { store } from "./../redux/store";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Low Rate Home Loan -",
//   description:
//     'We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,',
// };
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentUrl = `https://lowratehomeloan.com.au${pathname}`;
  // Trigger GTM on route change
  console.log("currentUrl", pathname);
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "pageview", page: pathname });
  }, [pathname]);

  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Low Rate Home Loan &raquo; Feed"
            href="https://scoresbymortgagebroker.com.au/feed/"
          />
          <link
            rel="stylesheet"
            id="ti-widget-css-google-css"
            href="/trustindex-google-widget.css"
            media="all"
          />

          {pathname === "/areas-we-service" ||
          pathname === "/mortgage-broker-altona" ||
          pathname === "/mortgage-broker-berwick" ||
          pathname === "/mortgage-broker-burwood" ||
          pathname === "/mortgage-broker-caroline-springs" ||
          pathname === "/mortgage-broker-clyde" ||
          pathname === "/mortgage-broker-craigieburn" ||
          pathname === "/mortgage-broker-cranbourne" ||
          pathname === "/mortgage-broker-dandenong" ||
          pathname === "/mortgage-broker-fitzroy" ||
          pathname === "/mortgage-broker-footscray" ||
          pathname === "/mortgage-broker-glen-waverley" ||
          pathname === "/mortgage-broker-hampton-park" ||
          pathname === "/mortgage-broker-hoppers-crossing" ||
          pathname === "/mortgage-broker-keysborough" ||
          pathname === "/mortgage-broker-laverton" ||
          pathname === "/mortgage-broker-mitcham" ||
          pathname === "/mortgage-broker-mornington-peninsula" ||
          pathname === "/mortgage-broker-mount-waverley" ||
          pathname === "/mortgage-broker-pakenham" ||
          pathname === "/mortgage-broker-ringwood" ||
          pathname === "/mortgage-broker-rockbank" ||
          pathname === "/mortgage-broker-scoresby" ||
          pathname === "/mortgage-broker-south-yarra" ||
          pathname === "/mortgage-broker-springvale" ||
          pathname === "/mortgage-broker-tarneit" ||
          pathname === "/mortgage-broker-wheelers-hill" ||
          pathname === "/mortgage-broker-williams-landing" ||
          pathname === "/mortgage-broker-wyndham-vale" ||
          pathname === "/mortgage-broker-sydney-nsw" ||
          pathname === "/mortgage-broker-perth" ||
          pathname === "/rose-bay-mortgage-brokers" ||
          pathname === "/mortgage-broker-brisbane" ||
          pathname === "/mortgage-broker-lansvale-nsw" ||
          pathname === "/mortgage-brokers-in-sutherland-nsw" ||
          pathname === "/turramurra-mortgage-brokers" ||
          pathname === "/mortgage-broker-gold-coast" ||
          pathname === "/mortgage-broker-hoxton-park-nsw" ||
          pathname === "/hornsby-mortgage-brokers" ||
          pathname === "/lane-cove-mortgage-brokers" ||
          pathname === "/mortgage-broker-liverpool-nsw-2170" ||
          pathname === "/mortgage-broker-moorebank" ||
          pathname === "/north-sydney-mortgage-brokers" ||
          pathname === "/mosman-mortgage-brokers" ||
          pathname === "/mortgage-brokers-cabramatta" ||
          pathname === "/mortgage-broker-abbotsbury" ||
          pathname === "/st-ives-mortgage-brokers-nsw-2075" ||
          pathname === "/waitara-mortgage-brokers" ||
          pathname === "/mortgage-broker-prestons-nsw-2170" ||
          pathname === "/mortgage-brokers-len-waters-estate-nsw" ||
          pathname === "/crows-nest-mortgage-brokers" ||
          pathname === "/castle-cove-mortgage-brokers" ||
          pathname === "/mortgage-broker-middleton-grange" ||
          pathname === "/ashcroft-mortgage-brokers" ||
          pathname === "/artarmon-mortgage-brokers" ||
          pathname === "/bondi-junction-mortgage-brokers" ||
          pathname === "/mortgage-broker-lurnea-nsw" ||
          pathname === "/mortgage-brokers-in-parramatta-nsw" ||
          pathname === "/chatswood-mortgage-brokers" ||
          pathname === "/randwick-mortgage-brokers" ||
          pathname === "/mortgage-broker-casula-nsw" ||
          pathname === "/mortgage-brokers-in-ryde-nsw" ||
          pathname === "/kirribilli-mortgage-brokers" ||
          pathname === "/clovelly-mortgage-brokers" ||
          pathname === "/bellevue-hill-mortgage-brokers" ||
          pathname === "/paddington-mortgage-brokers" ||
          pathname === "/double-bay-mortgage-brokers" ||
          pathname === "/darling-point-mortgage-brokers" ||
          pathname === "/dover-heights-mortgage-brokers" ||
          pathname === "/bondi-beach-mortgage-brokers" ||
          pathname === "/coogee-mortgage-brokers" ||
          pathname === "/point-piper-mortgage-brokers" ? (
            <>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1"
              />
              <meta
                name="description"
                content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
              />
              <meta name="robots" content="max-image-preview:large" />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta
                name="keywords"
                content="service, area, your keywords here"
              />
              <meta
                property="og:title"
                content="Areas we Service - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                // content="https://yourwebsite.com/areas-services"
                content="https://lowratehomeloan.com.au/areas-we-service/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />

              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:31:37+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-24T12:53:54+00:00"
              />

              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Areas we Service - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/about-us" ? (
            <>
              <meta
                name="description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta name="robots" content="max-image-preview:large" />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="About Us - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/about-us/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2020-11-12T14:48:34+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-24T12:17:09+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="About Us - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/buy-home-consultation" ? (
            <>
              <meta
                name="description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta name="robots" content="max-image-preview:large" />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Buy Home Consultation - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/about-us/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2020-11-12T14:48:34+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-24T12:17:09+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Buy Home Consultation - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/compliments-and-concerns" ? (
            <>
              <meta
                name="description"
                content="We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have, we will also continually improve our products and services. We know there are times when you may wish to compliment us on something we have"
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Compliments and Concerns - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have, we will also continually improve our products and services. We know there are times when you may wish to compliment us on something we have"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/compliments-and-concerns/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2023-01-13T11:12:26+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-23T22:45:59+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Compliments and Concerns - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have, we will also continually improve our products and services. We know there are times when you may wish to compliment us on something we have"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/disclaimer" ? (
            <>
              <meta
                name="description"
                content="Disclaimer statement: Low Rate Home Loan website provides general information only and has been prepared without taking into account your objectives, financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full financial situation will need to be reviewed prior to acceptance of any offer or product."
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Disclaimer - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Disclaimer statement: Low Rate Home Loan website provides general information only and has been prepared without taking into account your objectives, financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full financial situation will need to be reviewed prior to acceptance of any offer or product."
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/disclaimer/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2023-01-13T11:53:29+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-23T22:14:43+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Disclaimer - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Disclaimer statement: Low Rate Home Loan website provides general information only and has been prepared without taking into account your objectives, financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full financial situation will need to be reviewed prior to acceptance of any offer or product."
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/gift-card-terms-condition" ? (
            <>
              <meta
                name="description"
                content="$500 Myer &amp; Coles Gift Voucher Subject to following terms and conditions: Your application for finance must be submitted to the recommended lender by August 31st 2023. Your $500 Myer &amp; Coles Gift Voucher is payable within 60 days of settlement of your new loan. Your new loan amount must exceed $300,000 to obtain Gift"
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Gift Card Terms &amp; Condition - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="$500 Myer &amp; Coles Gift Voucher Subject to following terms and conditions: Your application for finance must be submitted to the recommended lender by August 31st 2023. Your $500 Myer &amp; Coles Gift Voucher is payable within 60 days of settlement of your new loan. Your new loan amount must exceed $300,000 to obtain Gift"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/gift-card-terms-condition/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2023-01-04T00:56:03+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-23T22:44:50+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Gift Card Terms &amp; Condition - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="$500 Myer &amp; Coles Gift Voucher Subject to following terms and conditions: Your application for finance must be submitted to the recommended lender by August 31st 2023. Your $500 Myer &amp; Coles Gift Voucher is payable within 60 days of settlement of your new loan. Your new loan amount must exceed $300,000 to obtain Gift"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/home-loans" ? (
            <>
              <meta
                name="description"
                content="Featured Services Trusted, Reliable, and Genuine Mortgage Broker Glen Waverley Services Home Loans Acquire low-interest home mortgage solutions specific to your loan requirements with features such as offset, redraw accounts, fixed-rate, variable-rate mortgages, etc. Low Deposit Home Loans Obtain a mortgage for your home even with low initial deposits from our multiple money lenders and"
              />
              <meta name="robots" content="max-image-preview:large" />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Home Loans - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Featured Services Trusted, Reliable, and Genuine Mortgage Broker Glen Waverley Services Home Loans Acquire low-interest home mortgage solutions specific to your loan requirements with features such as offset, redraw accounts, fixed-rate, variable-rate mortgages, etc. Low Deposit Home Loans Obtain a mortgage for your home even with low initial deposits from our multiple money lenders and"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:27:36+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-07-04T11:49:40+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Home Loans - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Featured Services Trusted, Reliable, and Genuine Mortgage Broker Glen Waverley Services Home Loans Acquire low-interest home mortgage solutions specific to your loan requirements with features such as offset, redraw accounts, fixed-rate, variable-rate mortgages, etc. Low Deposit Home Loans Obtain a mortgage for your home even with low initial deposits from our multiple money lenders and"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/buy-a-new-home" ? (
            <>
              <meta
                name="description"
                content="Buying a new home is an exciting and challenging experience that requires huge attention as it certainly may be your biggest financial investment. However, with our refined Mortgage Broker Glen Waverley services, you can relieve your worries and thoroughly rely on us to find the right home mortgage solutions. We have a team of certified"
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Buy a New Home - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Buying a new home is an exciting and challenging experience that requires huge attention as it certainly may be your biggest financial investment. However, with our refined Mortgage Broker Glen Waverley services, you can relieve your worries and thoroughly rely on us to find the right home mortgage solutions. We have a team of certified"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/buy-a-new-home/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:28:20+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-07-04T11:53:00+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Buy a New Home - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Buying a new home is an exciting and challenging experience that requires huge attention as it certainly may be your biggest financial investment. However, with our refined Mortgage Broker Glen Waverley services, you can relieve your worries and thoroughly rely on us to find the right home mortgage solutions. We have a team of certified"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/buy-investment-property" ? (
            <>
              <meta
                name="description"
                content="What to consider when buying an investment property? Where to buy, what to buy and how to buy. Once you identify the property, calculate whether or not it will generate sufficient income after expenses."
              />
              <meta name="robots" content="max-image-preview:large" />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Buy an Investment Property - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="What to consider when buying an investment property? Where to buy, what to buy and how to buy. Once you identify the property, calculate whether or not it will generate sufficient income after expenses."
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/buy-investment-property/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:29:20+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-07-04T12:12:20+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Buy an Investment Property - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="What to consider when buying an investment property? Where to buy, what to buy and how to buy. Once you identify the property, calculate whether or not it will generate sufficient income after expenses."
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/refinance-home-loan" ? (
            <>
              <meta
                name="description"
                content="Refinancing means it is the process of taking out a fresh loan to pay off an existing one. Refinancing can happen with the same lender or by changing providers."
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Refinance My Home Loan - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Refinancing means it is the process of taking out a fresh loan to pay off an existing one. Refinancing can happen with the same lender or by changing providers."
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/refinance-home-loan/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:28:49+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-07-04T12:03:00+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Refinance My Home Loan - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Refinancing means it is the process of taking out a fresh loan to pay off an existing one. Refinancing can happen with the same lender or by changing providers."
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/compare-rates" ? (
            <>
              <meta
                name="description"
                content="Take the guesswork out of shopping for a home loan by meeting with our Low Rate Home Loan Broker. Shopping for a home loan can be an overwhelming experience. It is important to do your research and find the best interest rate available so that you can save money in the long run. That&#039;s why"
              />
              <meta name="robots" content="max-image-preview:large" />
              <link
                rel="canonical"
                href="https://lowratehomeloan.com.au/compare-rates/"
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Compare Rates - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Take the guesswork out of shopping for a home loan by meeting with our Low Rate Home Loan Broker. Shopping for a home loan can be an overwhelming experience. It is important to do your research and find the best interest rate available so that you can save money in the long run. That&#039;s why"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/compare-rates/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-14T12:29:45+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-23T22:34:07+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Compare Rates - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Take the guesswork out of shopping for a home loan by meeting with our Low Rate Home Loan Broker. Shopping for a home loan can be an overwhelming experience. It is important to do your research and find the best interest rate available so that you can save money in the long run. That&#039;s why"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/mortgage-broker-berwick" ? (
            <>
              <meta
                name="description"
                content="Our mortgage Brokers in Berwick are experts in home loans, car loans, debt consolidation, business loans. We have an amazing team of Mortgage Brokers in Berwick. call us on 03 7064 5204"
              />
              <meta name="robots" content="max-image-preview:large" />
              <link
                rel="canonical"
                href="https://lowratehomeloan.com.au/mortgage-broker-berwick/"
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Mortgage Broker Berwick - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Our mortgage Brokers in Berwick are experts in home loans, car loans, debt consolidation, business loans. We have an amazing team of Mortgage Brokers in Berwick. call us on 03 7064 5204"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/mortgage-broker-berwick/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2023-01-14T00:57:35+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-02-08T08:29:11+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Mortgage Broker Berwick - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Our mortgage Brokers in Berwick are experts in home loans, car loans, debt consolidation, business loans. We have an amazing team of Mortgage Brokers in Berwick. call us on 03 7064 5204"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/mortgage-broker-pakenham" ? (
            <>
              <meta
                name="description"
                content="Our mortgage Brokers in Pakenham are experts in home loans, car loans, debt consolidation, business loans. Meet us at 87 Treloar Lane, Pakenham VIC 3810."
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Mortgage Broker Pakenham - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Our mortgage Brokers in Pakenham are experts in home loans, car loans, debt consolidation, business loans. Meet us at 87 Treloar Lane, Pakenham VIC 3810."
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/mortgage-broker-pakenham/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-26T20:59:10+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-24T12:13:45+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Mortgage Broker Pakenham - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Our mortgage Brokers in Pakenham are experts in home loans, car loans, debt consolidation, business loans. Meet us at 87 Treloar Lane, Pakenham VIC 3810."
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/privacy-policy" ? (
            <>
              <meta
                name="description"
                content="At Melbourne Low Rate Home Loan, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth). This Privacy Policy describes our current policies and practices in relation to the handling and use of personal information. What information do we collect and how do we use it? We will ask you"
              />
              <meta name="robots" content="max-image-preview:large" />
              <link
                rel="canonical"
                href="https://lowratehomeloan.com.au/privacy-policy/"
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Privacy Policy - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="At Melbourne Low Rate Home Loan, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth). This Privacy Policy describes our current policies and practices in relation to the handling and use of personal information. What information do we collect and how do we use it? We will ask you"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/privacy-policy/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-11-28T04:03:59+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-13T10:26:04+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Privacy Policy - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="At Melbourne Low Rate Home Loan, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth). This Privacy Policy describes our current policies and practices in relation to the handling and use of personal information. What information do we collect and how do we use it? We will ask you"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/refinance-consultation" ? (
            <>
              <meta name="robots" content="max-image-preview:large" />
              <link
                rel="canonical"
                href="https://lowratehomeloan.com.au/refinance-consultation/"
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Refinance Consultation - Low Rate Home Loan"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/refinance-consultation/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2022-12-27T11:15:42+00:00"
              />
              <meta
                property="article:modified_time"
                content="2022-12-27T11:15:42+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Refinance Consultation - Low Rate Home Loan"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/contact" ? (
            <>
              <meta
                name="description"
                content="CASH BACK upto $6,000 GIFT CARD upto $2,000 LONG LOAN TERM upto 30 years PROCESSING TIME upto 8 hours"
              />
              <meta name="robots" content="max-image-preview:large" />

              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Talk to Us - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="CASH BACK upto $6,000 GIFT CARD upto $2,000 LONG LOAN TERM upto 35 years PROCESSING TIME upto 8 hours"
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/contact/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2020-11-12T15:19:27+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-24T06:37:34+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Talk to Us - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="CASH BACK upto $6,000 GIFT CARD upto $2,000 LONG LOAN TERM upto 30 years PROCESSING TIME upto 8 hours"
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : pathname === "/thank-you" ? (
            <>
              <meta
                name="description"
                content="Thank you for contacting us! We will get in touch with you shortly."
              />
              <meta name="robots" content="max-image-preview:large" />
              <link
                rel="canonical"
                href="https://lowratehomeloan.com.au/thank-you/"
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Thank You - Low Rate Home Loan"
              />
              <meta
                property="og:description"
                content="Thank you for contacting us! We will get in touch with you shortly."
              />
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/thank-you/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="article:published_time"
                content="2023-01-11T12:44:28+00:00"
              />
              <meta
                property="article:modified_time"
                content="2023-01-12T03:21:37+00:00"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Thank You - Low Rate Home Loan"
              />
              <meta
                name="twitter:description"
                content="Thank you for contacting us! We will get in touch with you shortly."
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          ) : (
            <>
              <meta
                name="description"
                content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
              />
              <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Low Rate Home Loan -" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Home - Low Rate Home Loan" />
              <meta
                property="og:description"
                content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
              />{" "}
              <meta
                property="og:url"
                content="https://lowratehomeloan.com.au/"
              />
              <meta
                property="og:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta
                property="og:image:secure_url"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
              {/* <meta
            property="og:image:secure_url"
            content="/lowratehomeloan-logo.svg"
          /> */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Home - Low Rate Home Loan" />
              <meta
                name="twitter:description"
                content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
              />
              <meta
                name="twitter:image"
                content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
              />
            </>
          )}

          <meta name="robots" content="max-image-preview:large" />
          {/* <link rel="canonical" href="https://lowratehomeloan.com.au/" /> */}
          <link rel="canonical" href={currentUrl} />

          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="/style.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="classic-theme-styles-css"
            href="/classic-themes.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wpsm_ac-font-awesome-front-css"
            href="/font-awesome.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wpsm_ac_bootstrap-front-css"
            href="/bootstrap-front.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="child-theme-css"
            href="/scrorsStyle.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-global-css"
            href="/kadenceAssetGlobal.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-header-css"
            href="/header.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-content-css"
            href="/content.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-footer-css"
            href="/footer.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_basic-css"
            href="/basic.min.css"
            media="all"
          />
          {/* <link
            rel="stylesheet"
            id="gform_theme_components-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/gravityforms/assets/css/dist/theme-components.min.css?ver=2.6.9"
            media="all"
          /> */}
          <link
            rel="stylesheet"
            id="gform_theme_ie11-css"
            href="/theme-ie11.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_theme-css"
            href="/theme.min.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-blocks-rowlayout-css"
            href="/row.style.build.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-blocks-column-css"
            href="/column.style.build.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-fonts-css"
            href="/fontFamily.css"
            media="all"
          />
          <link
            rel="icon"
            href="/insider2022/12/logo-150x150.webp"
            sizes="32x32"
          />
          <link rel="icon" href="/insider2022/12/logo.webp" sizes="192x192" />
          <link rel="apple-touch-icon" href="/insider2022/12/logo.webp" />
          <meta
            name="msapplication-TileImage"
            content="/insider2022/12/logo.webp"
          />
          {/* <link
            rel="stylesheet"
            id="ti-widget-css-google-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/trustindex-google-widget.css?ver=1673419651"
            media="all"
          /> */}
          {/* Facebook Pixel Code */}
          {/* <!-- Google Tag Manager --> */}
          {/* <!-- End Google Tag Manager --> */}
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '636387751425285'); 
              fbq('track', 'PageView');
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=636387751425285&ev=PageView&noscript=1"
            />
          </noscript>
          {/* Google Tag Manager Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXHTV9X');`,
            }}
          />
        </head>
        <body
          style={{ display: "block !important" }}
          className="home page-template-default page page-id-4 wp-custom-logo wp-embed-responsive footer-on-bottom animate-body-popup hide-focus-outline link-style-no-underline content-title-style-hide content-width-fullwidth content-style-unboxed content-vertical-padding-hide non-transparent-header mobile-non-transparent-header"
        >
          {pathname === "/adminPanel" ||
          pathname === "/adminPanelfeaturedTop" ||
          pathname === "/signup" ||
          pathname === "/login" ||
          pathname === "/Forgotpass" ||
          pathname === "/VerifyTockenMail" ||
          pathname === "/ResetPass" ||
          pathname === "/buy-home-consultation" ||
          pathname === "/refinance-consultation" ||
          pathname === "/adminPanel/herosection" ||
          pathname === "/adminPanel/featuresTop" ||
          pathname === "/adminPanel/reputableLenders" ||
          pathname === "/adminPanel/featuredservices" ||
          pathname === "/adminPanel/applicationprocess" ||
          pathname === "/adminPanel/testimonials" ||
          pathname === "/adminPanel/faqs" ||
          pathname === "/adminPanel/featuredservicesImages" ||
          pathname === "/adminPanel/aboutUsBanner" ||
          pathname === "/adminPanel/freeconsultation" ? null : (
            <Header />
          )}
          {/* <p>Current route: {pathname}</p> */}
          {/* <p>Current route: {pathname}</p> */}
          {children}

          {pathname === "/adminPanel" ||
          pathname === "/adminPanel/featuresTop" ||
          pathname === "/signup" ||
          pathname === "/login" ||
          pathname === "/ResetPass" ||
          pathname === "/VerifyTockenMail" ||
          pathname === "/buy-home-consultation" ||
          pathname === "/refinance-consultation" ||
          pathname === "/Forgotpass" ||
          pathname === "/adminPanel/herosection" ||
          pathname === "/adminPanel/featuredtop" ||
          pathname === "/adminPanel/reputableLenders" ||
          pathname === "/adminPanel/featuredservices" ||
          pathname === "/adminPanel/applicationprocess" ||
          pathname === "/adminPanel/testimonials" ||
          pathname === "/adminPanel/faqs" ||
          pathname === "/adminPanel/featuredservicesImages" ||
          pathname === "/adminPanel/aboutUsBanner" ||
          pathname === "/adminPanel/freeconsultation" ? null : (
            <Footer />
          )}

          <ToastContainer />

          <script src="assets/js/Kadence.js"></script>

          <script src="/jquery.min.js" id="jquery-core-js"></script>

          <script
            src="/accordion-custom.js"
            id="call_ac-custom-js-front-js"
          ></script>

          <script src="/accordion.js" id="call_ac-js-front-js"></script>

          <script
            src="/navigation.min.js"
            id="kadence-navigation-js"
            async
          ></script>

          <script defer async src="/loader.js" id="trustindex-js-js"></script>

          {/* <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion-custom.js?ver=6.1.5"
            id="call_ac-custom-js-front-js"
          ></script> */}

          {/* <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion.js?ver=6.1.5"
            id="call_ac-js-front-js"
          ></script> */}

          {/* <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ver=6.1.5"
            id="trustindex-js-js"
          ></script> */}

          {/* <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ver=6.1.5"
            id="trustindex-js-js"
          ></script> */}

          {/* <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion-custom.js?ver=6.1.5"
            id="call_ac-custom-js-front-js"
          ></script> */}

          {/* <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion.js?ver=6.1.5"
            id="call_ac-js-front-js"
          ></script> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PXHTV9X"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </html>
    </Provider>
  );
}
