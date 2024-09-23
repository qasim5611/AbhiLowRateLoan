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

import sitemapConfig from "./../../next-sitemap.js";

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

  console.log("sitemapConfig.siteUrl", sitemapConfig.siteUrl);

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
          <meta
            name="google-site-verification"
            content="1PQAbq04M1gnTeA3WReQg9RyWdUyV8XftNzq0sFJMHo"
          />
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

          {
            // pathname === "/areas-we-service" ||
            // pathname === "/mortgage-broker-altona" ||
            // pathname === "/mortgage-broker-berwick" ||
            // pathname === "/mortgage-broker-burwood" ||
            // pathname === "/mortgage-broker-caroline-springs" ||
            // pathname === "/mortgage-broker-clyde" ||
            // pathname === "/mortgage-broker-craigieburn" ||
            // pathname === "/mortgage-broker-cranbourne" ||
            // pathname === "/mortgage-broker-dandenong" ||
            // pathname === "/mortgage-broker-fitzroy" ||
            // pathname === "/mortgage-broker-footscray" ||
            // pathname === "/mortgage-broker-glen-waverley" ||
            // pathname === "/mortgage-broker-hampton-park" ||
            // pathname === "/mortgage-broker-hoppers-crossing" ||
            // pathname === "/mortgage-broker-keysborough" ||
            // pathname === "/mortgage-broker-laverton" ||
            // pathname === "/mortgage-broker-mitcham" ||
            // pathname === "/mortgage-broker-mornington-peninsula" ||
            // pathname === "/mortgage-broker-mount-waverley" ||
            // pathname === "/mortgage-broker-pakenham" ||
            // pathname === "/mortgage-broker-ringwood" ||
            // pathname === "/mortgage-broker-rockbank" ||
            // pathname === "/mortgage-broker-scoresby" ||
            // pathname === "/mortgage-broker-south-yarra" ||
            // pathname === "/mortgage-broker-springvale" ||
            // pathname === "/mortgage-broker-tarneit" ||
            // pathname === "/mortgage-broker-wheelers-hill" ||
            // pathname === "/mortgage-broker-williams-landing" ||
            // pathname === "/mortgage-broker-wyndham-vale" ||
            // pathname === "/mortgage-broker-sydney-nsw" ||
            // pathname === "/mortgage-broker-perth" ||
            // pathname === "/rose-bay-mortgage-brokers" ||
            // pathname === "/mortgage-broker-brisbane" ||
            // pathname === "/mortgage-broker-lansvale-nsw" ||
            // pathname === "/mortgage-brokers-in-sutherland-nsw" ||
            // pathname === "/turramurra-mortgage-brokers" ||
            // pathname === "/mortgage-broker-gold-coast" ||
            // pathname === "/mortgage-broker-hoxton-park-nsw" ||
            // pathname === "/hornsby-mortgage-brokers" ||
            // pathname === "/lane-cove-mortgage-brokers" ||
            // pathname === "/mortgage-broker-liverpool-nsw-2170" ||
            // pathname === "/mortgage-broker-moorebank" ||
            // pathname === "/north-sydney-mortgage-brokers" ||
            // pathname === "/mosman-mortgage-brokers" ||
            // pathname === "/mortgage-brokers-cabramatta" ||
            // pathname === "/mortgage-broker-abbotsbury" ||
            // pathname === "/st-ives-mortgage-brokers-nsw-2075" ||
            // pathname === "/waitara-mortgage-brokers" ||
            // pathname === "/mortgage-broker-prestons-nsw-2170" ||
            // pathname === "/mortgage-brokers-len-waters-estate-nsw" ||
            // pathname === "/crows-nest-mortgage-brokers" ||
            // pathname === "/castle-cove-mortgage-brokers" ||
            // pathname === "/mortgage-broker-middleton-grange" ||
            // pathname === "/ashcroft-mortgage-brokers" ||
            // pathname === "/artarmon-mortgage-brokers" ||
            // pathname === "/bondi-junction-mortgage-brokers" ||
            // pathname === "/mortgage-broker-lurnea-nsw" ||
            // pathname === "/mortgage-brokers-in-parramatta-nsw" ||
            // pathname === "/chatswood-mortgage-brokers" ||
            // pathname === "/randwick-mortgage-brokers" ||
            // pathname === "/mortgage-broker-casula-nsw" ||
            // pathname === "/mortgage-brokers-in-ryde-nsw" ||
            // pathname === "/kirribilli-mortgage-brokers" ||
            // pathname === "/clovelly-mortgage-brokers" ||
            // pathname === "/bellevue-hill-mortgage-brokers" ||
            // pathname === "/paddington-mortgage-brokers" ||
            // pathname === "/double-bay-mortgage-brokers" ||
            // pathname === "/darling-point-mortgage-brokers" ||
            // pathname === "/dover-heights-mortgage-brokers" ||
            // pathname === "/bondi-beach-mortgage-brokers" ||
            // pathname === "/coogee-mortgage-brokers" ||
            // pathname === "/point-piper-mortgage-brokers" ? (
            //   <>
            //     <meta
            //       name="viewport"
            //       content="width=device-width, initial-scale=1, minimum-scale=1"
            //     />
            //     <meta
            //       name="description"
            //       content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
            //     />
            //     <meta name="robots" content="max-image-preview:large" />
            //     <meta property="og:locale" content="en_US" />
            //     <meta property="og:site_name" content="Low Rate Home Loan -" />
            //     <meta
            //       name="keywords"
            //       content="service, area, your keywords here"
            //     />
            //     <meta
            //       property="og:title"
            //       content="Areas we Service - Low Rate Home Loan"
            //     />
            //     <meta
            //       property="og:description"
            //       content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
            //     />
            //     <meta property="og:type" content="article" />
            //     <meta
            //       property="og:url"
            //       // content="https://yourwebsite.com/areas-services"
            //       content="https://lowratehomeloan.com.au/areas-we-service/"
            //     />
            //     <meta
            //       property="og:image"
            //       content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
            //     />

            //     <meta
            //       property="og:image:secure_url"
            //       content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
            //     />
            //     <meta
            //       property="article:published_time"
            //       content="2022-12-14T12:31:37+00:00"
            //     />
            //     <meta
            //       property="article:modified_time"
            //       content="2023-01-24T12:53:54+00:00"
            //     />

            //     <meta name="twitter:card" content="summary_large_image" />
            //     <meta
            //       name="twitter:title"
            //       content="Areas we Service - Low Rate Home Loan"
            //     />
            //     <meta
            //       name="twitter:description"
            //       content="Join our happy clients across Melbourne including Altona VIC 3018 Berwick VIC 3806 Burwood VIC 3125 Caroline Springs VIC 3023 Clyde VIC 3978 Craigieburn VIC 3064 Cranbourne VIC 3977 Dandenong VIC 3175 Fitzroy VIC 3065 Footscray VIC 3011 Glen Waverley VIC 3150 Hampton Park VIC 3976 Hoppers Crossing VIC 3029 Keysborough VIC 3173 Laverton VIC"
            //     />
            //     <meta
            //       name="twitter:image"
            //       content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
            //     />
            //   </>
            // ) :

            pathname === "/artarmon-mortgage-brokers" ? (
              <>
                <title>Artarmon Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Your path to homeownership in Artarmon starts here. Explore our mortgage solutions with competitive rates and expert guidance."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Artarmon Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Your path to homeownership in Artarmon starts here. Explore our mortgage solutions with competitive rates and expert guidance."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/artarmon-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:19:05+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:52:33+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:19:05+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Artarmon Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Your path to homeownership in Artarmon starts here. Explore our mortgage solutions with competitive rates and expert guidance."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/ashcroft-mortgage-brokers" ? (
              <>
                <title>Ashcroft Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ashcroft NSW, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/ashcroft-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Ashcroft Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ashcroft NSW, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/ashcroft-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:19:14+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T18:51:28+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:19:14+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Ashcroft Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ashcroft NSW, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/bellevue-hill-mortgage-brokers" ? (
              <>
                <title>
                  Bellevue Hill Mortgage Brokers - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Discover elegance in Bellevue Hill, where luxe homes meet panoramic views. Your dream residence awaits in this exclusive Sydney suburb."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/bellevue-hill-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Bellevue Hill Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover elegance in Bellevue Hill, where luxe homes meet panoramic views. Your dream residence awaits in this exclusive Sydney suburb."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/bellevue-hill-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:19:41+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:58:34+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:19:41+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Bellevue Hill Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover elegance in Bellevue Hill, where luxe homes meet panoramic views. Your dream residence awaits in this exclusive Sydney suburb."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/bondi-beach-mortgage-brokers" ? (
              <>
                <title>Bondi Beach Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Bondi Beach NSW, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/bondi-beach-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Bondi Beach Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Bondi Beach NSW, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/bondi-beach-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:19:48+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T22:01:11+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:19:48+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Bondi Beach Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Bondi Beach NSW, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/bondi-junction-mortgage-brokers" ? (
              <>
                <title>
                  Bondi Junction Mortgage Brokers - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Discover the epitome of urban living in Bondi Junction, Australia. Your dream home awaits amid vibrant city life, with style, convenience, and elegance."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/bondi-junction-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Bondi Junction Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover the epitome of urban living in Bondi Junction, Australia. Your dream home awaits amid vibrant city life, with style, convenience, and elegance."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/bondi-junction-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:19:54+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:57:09+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:19:54+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Bondi Junction Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover the epitome of urban living in Bondi Junction, Australia. Your dream home awaits amid vibrant city life, with style, convenience, and elegance."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/castle-cove-mortgage-brokers" ? (
              <>
                <meta
                  name="description"
                  content="Discover your dream home in the tranquil beauty of Castle Cove, Australia. Serene parks, upscale living, and investment potential await your journey."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/castle-cove-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Castle Cove Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover your dream home in the tranquil beauty of Castle Cove, Australia. Serene parks, upscale living, and investment potential await your journey."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/castle-cove-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:20:01+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:56:06+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:20:01+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Castle Cove Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover your dream home in the tranquil beauty of Castle Cove, Australia. Serene parks, upscale living, and investment potential await your journey."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/chatswood-mortgage-brokers" ? (
              <>
                <title>Chatswood Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Chatswood with our tailored mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/chatswood-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Chatswood Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Chatswood with our tailored mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/chatswood-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:20:22+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:53:49+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:20:22+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Chatswood Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Chatswood with our tailored mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/clovelly-mortgage-brokers" ? (
              <>
                <title>Clovelly Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Embrace coastal elegance in Clovelly, Australia. Find your perfect home where modern living meets seaside charm. Your dream lifestyle awaits!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/clovelly-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Clovelly Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Embrace coastal elegance in Clovelly, Australia. Find your perfect home where modern living meets seaside charm. Your dream lifestyle awaits!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/clovelly-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:20:40+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:58:19+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:20:40+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Clovelly Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Embrace coastal elegance in Clovelly, Australia. Find your perfect home where modern living meets seaside charm. Your dream lifestyle awaits!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/coogee-mortgage-brokers" ? (
              <>
                <title>Coogee Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Coogee, NSW, dreams come to life! Crafted mortgages, sculpting your coastal haven. Sail into homeownership with tailored excellence – where the sea meets serenity."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/coogee-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Coogee Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Coogee, NSW, dreams come to life! Crafted mortgages, sculpting your coastal haven. Sail into homeownership with tailored excellence – where the sea meets serenity."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/coogee-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:21:07+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T22:01:50+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:21:07+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Coogee Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Coogee, NSW, dreams come to life! Crafted mortgages, sculpting your coastal haven. Sail into homeownership with tailored excellence – where the sea meets serenity."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/crows-nest-mortgage-brokers" ? (
              <>
                <title>Crows Nest Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Crows Nest with our tailored mortgage solutions. Expert guidance and competitive rates for homeownership."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/crows-nest-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Crows Nest Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Crows Nest with our tailored mortgage solutions. Expert guidance and competitive rates for homeownership."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/crows-nest-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:21:42+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:47:59+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:21:42+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Crows Nest Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Crows Nest with our tailored mortgage solutions. Expert guidance and competitive rates for homeownership."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/darling-point-mortgage-brokers" ? (
              <>
                <title>
                  Darling Point Mortgage Brokers - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Unleash your home and investment aspirations in Darling Point, NSW! Elevate your property dreams with our tailored mortgage solutions. Your key to exquisite living awaits."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/darling-point-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Darling Point Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unleash your home and investment aspirations in Darling Point, NSW! Elevate your property dreams with our tailored mortgage solutions. Your key to exquisite living awaits."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/darling-point-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:16+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:59:16+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:16+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Darling Point Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unleash your home and investment aspirations in Darling Point, NSW! Elevate your property dreams with our tailored mortgage solutions. Your key to exquisite living awaits."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/double-bay-mortgage-brokers" ? (
              <>
                <title>Double Bay Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Embark on your property journey in Double Bay, NSW, with bespoke home loans. Elevate your homeownership experience – we redefine mortgage excellence."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/double-bay-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Double Bay Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Embark on your property journey in Double Bay, NSW, with bespoke home loans. Elevate your homeownership experience – we redefine mortgage excellence."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/double-bay-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:24+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:59:17+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:24+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Double Bay Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Embark on your property journey in Double Bay, NSW, with bespoke home loans. Elevate your homeownership experience – we redefine mortgage excellence."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/dover-heights-mortgage-brokers" ? (
              <>
                <title>
                  Dover Heights Mortgage Brokers - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Ascend to your dream home in Dover Heights, NSW! Unlock tailored mortgage brilliance, making homeownership an art. Elevate your property journey with us."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/dover-heights-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Dover Heights Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Ascend to your dream home in Dover Heights, NSW! Unlock tailored mortgage brilliance, making homeownership an art. Elevate your property journey with us."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/dover-heights-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:34+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T22:00:42+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:34+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Dover Heights Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Ascend to your dream home in Dover Heights, NSW! Unlock tailored mortgage brilliance, making homeownership an art. Elevate your property journey with us."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/hornsby-mortgage-brokers" ? (
              <>
                <title>Hornsby Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Secure your dream home in Hornsby, Australia, with our expert mortgage solutions. Competitive rates and personalised guidance for you."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/hornsby-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Hornsby Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Secure your dream home in Hornsby, Australia, with our expert mortgage solutions. Competitive rates and personalised guidance for you."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/hornsby-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:42+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:49:23+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:42+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Hornsby Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Secure your dream home in Hornsby, Australia, with our expert mortgage solutions. Competitive rates and personalised guidance for you."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/kirribilli-mortgage-brokers" ? (
              <>
                <title>Kirribilli Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Kirribilli NSW, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/kirribilli-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Kirribilli Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Kirribilli NSW, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/kirribilli-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:47+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:53:41+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:47+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Kirribilli Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Kirribilli NSW, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/lane-cove-mortgage-brokers" ? (
              <>
                <title>Lane Cove Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Lane Cove with our personalised mortgage solutions. Expert guidance and competitive rates for your journey."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/lane-cove-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Lane Cove Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Lane Cove with our personalised mortgage solutions. Expert guidance and competitive rates for your journey."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/lane-cove-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:53+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:53:42+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:53+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Lane Cove Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Lane Cove with our personalised mortgage solutions. Expert guidance and competitive rates for your journey."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-abbotsbury" ? (
              <>
                <title>Mortgage Broker Abbotsbury - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Abbotsbury with our trusted mortgage company. Get competitive home loan rates and expert guidance. Start your journey today!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-abbotsbury/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Abbotsbury - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Abbotsbury with our trusted mortgage company. Get competitive home loan rates and expert guidance. Start your journey today!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-abbotsbury/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:22:59+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:44:39+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:22:59+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Abbotsbury - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Abbotsbury with our trusted mortgage company. Get competitive home loan rates and expert guidance. Start your journey today!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-adelaide" ? (
              <>
                <title>Mortgage Broker Adelaide - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Adelaide, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-adelaide/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Adelaide - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Adelaide, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-adelaide/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-08-17T17:48:02+10:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="800" />
                <meta
                  property="og:image:alt"
                  content="Mortgage Broker Adelaide"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                  property="article:published_time"
                  content="2023-08-11T03:52:06+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-08-17T17:48:02+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Adelaide - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Adelaide, you have come to the"
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-altona" ? (
              <>
                <title>Mortgage Broker Altona - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Altona, you have come to the right"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-altona/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Altona - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Altona, you have come to the right"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-altona/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:38:34+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-09-15T16:34:37+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:38:34+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Altona - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Altona, you have come to the right"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-berwick" ? (
              <>
                <title>Mortgage Broker Berwick - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="At Low Rate Home Loans, our mortgage brokers in Berwick are committed to delivering you with the best home loan solutions and exceptional customer service."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-berwick/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Berwick - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="At Low Rate Home Loans, our mortgage brokers in Berwick are committed to delivering you with the best home loan solutions and exceptional customer service."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-berwick/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-03-11T20:26:01+11:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/Berwick-Mortgage-Brokers.webp"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/Berwick-Mortgage-Brokers.webp"
                />
                <meta property="og:image:width" content="837" />
                <meta property="og:image:height" content="558" />
                <meta
                  property="og:image:alt"
                  content="Berwick Mortgage Brokers"
                />
                <meta property="og:image:type" content="image/webp" />
                <meta
                  property="article:published_time"
                  content="2023-01-14T11:57:35+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-03-11T20:26:01+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Berwick - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="At Low Rate Home Loans, our mortgage brokers in Berwick are committed to delivering you with the best home loan solutions and exceptional customer service."
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/Berwick-Mortgage-Brokers.webp"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-brisbane" ? (
              <>
                <title>
                  Mortgage Broker Brisbane, QLD 6000 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Brisbane, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-brisbane/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Brisbane, QLD 6000 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Brisbane, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-brisbane/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:23:43+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-14T18:36:37+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:23:43+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Brisbane, QLD 6000 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Brisbane, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-burwood" ? (
              <>
                <title>Mortgage Broker Burwood - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Burwood, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-burwood/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Burwood - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Burwood, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-burwood/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:33:25+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-17T17:50:04+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:33:25+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Burwood - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Burwood, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-caroline-springs" ? (
              <>
                <title>
                  Mortgage Broker Caroline Springs - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Caroline Springs, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-caroline-springs/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Caroline Springs - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Caroline Springs, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-caroline-springs/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:34:08+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-17T19:16:00+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:34:08+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Caroline Springs - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Caroline Springs, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-casula-nsw" ? (
              <>
                <title>Mortgage Broker Casula NSW - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Explore your dream home in Casula, Australia. Diverse housing options and a vibrant community await. Find the best properties today."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-casula-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Casula NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Explore your dream home in Casula, Australia. Diverse housing options and a vibrant community await. Find the best properties today."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-casula-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:23:07+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:16:03+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:23:07+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Casula NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Explore your dream home in Casula, Australia. Diverse housing options and a vibrant community await. Find the best properties today."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-clyde" ? (
              <>
                <title>Mortgage Broker Clyde - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Our Low Rate Home Loan mortgage brokers in Clyde are dedicated to helping you secure the suitable deal on a competitively-priced loan."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-clyde/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Clyde - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Our Low Rate Home Loan mortgage brokers in Clyde are dedicated to helping you secure the suitable deal on a competitively-priced loan."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-clyde/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-03-11T20:30:28+11:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/02/mortgage-broker-Clyde.webp"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/02/mortgage-broker-Clyde.webp"
                />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="514" />
                <meta property="og:image:alt" content="Mortgage Broker Clyde" />
                <meta property="og:image:type" content="image/webp" />
                <meta
                  property="article:published_time"
                  content="2023-02-16T21:25:37+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-03-11T20:30:28+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Clyde - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Our Low Rate Home Loan mortgage brokers in Clyde are dedicated to helping you secure the suitable deal on a competitively-priced loan."
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/02/mortgage-broker-Clyde.webp"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-craigieburn" ? (
              <>
                <title>Mortgage Broker Craigieburn - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Craigieburn, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-craigieburn/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Craigieburn - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Craigieburn, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-craigieburn/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:34:19+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-23T13:38:19+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:34:19+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Craigieburn - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Craigieburn, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-cranbourne" ? (
              <>
                <title>Mortgage Broker Cranbourne - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our website. Whether you&#039;re a first-time homebuyer or a current resident of Cranbourne looking to refinance or invest in property, our"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-cranbourne/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Cranbourne - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our website. Whether you&#039;re a first-time homebuyer or a current resident of Cranbourne looking to refinance or invest in property, our"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-cranbourne/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:image"
                  content="http://lowratehomeloan.com.au/wp-content/uploads/2023/03/CRANBOURNE-1024x683.webp"
                />
                <meta
                  property="og:image:alt"
                  content="Mortgage Broker Cranbourne"
                />
                <meta
                  property="article:published_time"
                  content="2023-03-13T12:45:11+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Cranbourne - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our website. Whether you&#039;re a first-time homebuyer or a current resident of Cranbourne looking to refinance or invest in property, our"
                />
                <meta
                  name="twitter:image"
                  content="http://lowratehomeloan.com.au/wp-content/uploads/2023/03/CRANBOURNE-1024x683.webp"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-dandenong" ? (
              <>
                <title>Mortgage Broker Dandenong - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Dandenong, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-dandenong/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Dandenong - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Dandenong, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-dandenong/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-07-30T19:59:16+10:00"
                />
                <meta
                  property="og:image"
                  content="http://lowratehomeloan.com.au/wp-content/uploads/2023/07/dandenong-mortgage-brokers-1024x531.jpg"
                />
                <meta
                  property="og:image:alt"
                  content="Mortgage Broker Dandenong"
                />
                <meta
                  property="article:published_time"
                  content="2023-07-29T16:48:20+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-07-30T19:59:16+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Dandenong - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Dandenong, you have come to the"
                />
                <meta
                  name="twitter:image"
                  content="http://lowratehomeloan.com.au/wp-content/uploads/2023/07/dandenong-mortgage-brokers-1024x531.jpg"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-fitzroy" ? (
              <>
                <title>Mortgage Broker Fitzroy - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Fitzroy, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-fitzroy/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Fitzroy - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Fitzroy, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-fitzroy/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-08-25T22:06:10+10:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/Brunswick-Street-Fitzroy.jpg"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/Brunswick-Street-Fitzroy.jpg"
                />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="400" />
                <meta
                  property="og:image:alt"
                  content="Mortgage Broker Fitzroy"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                  property="article:published_time"
                  content="2023-07-29T11:19:30+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-08-25T22:06:10+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Fitzroy - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Fitzroy, you have come to the"
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/Brunswick-Street-Fitzroy.jpg"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-footscray" ? (
              <>
                <title>Mortgage Broker Footscray - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Footscray, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-footscray/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Footscray - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Footscray, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-footscray/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:34:35+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-23T14:04:08+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:34:35+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Footscray - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Footscray, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-glen-waverley" ? (
              <>
                <title>
                  Mortgage Broker Glen Waverley - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Glen Waverley, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-glen-waverley/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Glen Waverley - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Glen Waverley, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-glen-waverley/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:34:39+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-23T14:23:39+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:34:39+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Glen Waverley - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Glen Waverley, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-gold-coast" ? (
              <>
                <title>
                  Mortgage Broker Gold Coast, QLD 4217 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Gold Coast, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-gold-coast/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Gold Coast, QLD 4217 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Gold Coast, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-gold-coast/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:25:03+11:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/08/image-1-1024x575.png"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/08/image-1-1024x575.png"
                />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="575" />
                <meta
                  property="og:image:alt"
                  content="Mortgage Broker Gold Coast, QLD  4217"
                />
                <meta property="og:image:type" content="image/png" />
                <meta
                  property="article:published_time"
                  content="2023-08-01T21:10:15+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:25:03+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Gold Coast, QLD 4217 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Gold Coast, you have come to the"
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/08/image-1-1024x575.png"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-hampton-park" ? (
              <>
                <title>Mortgage Broker Hampton Park - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hampton Park, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-hampton-park/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Hampton Park - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hampton Park, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-hampton-park/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:34:40+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:05:53+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:34:40+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Hampton Park - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hampton Park, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-hoppers-crossing" ? (
              <>
                <title>
                  Mortgage Broker Hoppers Crossing - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hoppers Crossing, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-hoppers-crossing/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Hoppers Crossing - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hoppers Crossing, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-hoppers-crossing/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:01+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:06:28+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:01+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Hoppers Crossing - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Hoppers Crossing, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-hoxton-park-nsw" ? (
              <>
                <title>
                  Mortgage Broker Hoxton Park NSW - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Discover your dream home in Hoxton Park, Australia. Explore diverse housing options and embrace the perfect blend of urban and natural living."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-hoxton-park-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Hoxton Park NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover your dream home in Hoxton Park, Australia. Explore diverse housing options and embrace the perfect blend of urban and natural living."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-hoxton-park-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:25:09+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:17:22+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:25:09+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Hoxton Park NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover your dream home in Hoxton Park, Australia. Explore diverse housing options and embrace the perfect blend of urban and natural living."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-keysborough" ? (
              <>
                <title>Mortgage Broker Keysborough - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Keysborough, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-keysborough/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Keysborough - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Keysborough, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-keysborough/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:12+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:07:03+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:12+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Keysborough - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Keysborough, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-lansvale-nsw" ? (
              <>
                <title>Mortgage Broker Lansvale NSW - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Lansvale, Australia. Explore a world of housing options from the best properties in Australia and become a homeowner today."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-lansvale-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Lansvale NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Lansvale, Australia. Explore a world of housing options from the best properties in Australia and become a homeowner today."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-lansvale-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:25:16+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:17:00+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:25:16+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Lansvale NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Lansvale, Australia. Explore a world of housing options from the best properties in Australia and become a homeowner today."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-laverton" ? (
              <>
                <title>Mortgage Broker Laverton - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Laverton, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-laverton/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Laverton - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Laverton, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-laverton/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:14+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:07:16+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:14+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Laverton - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Laverton, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-liverpool-nsw-2170" ? (
              <>
                <title>
                  Mortgage Broker Liverpool, NSW 2170 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Liverpool NSW, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-liverpool-nsw-2170/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Liverpool, NSW 2170 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Liverpool NSW, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-liverpool-nsw-2170/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:25:53+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-07T20:30:37+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:25:53+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Liverpool, NSW 2170 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Liverpool NSW, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-lurnea-nsw" ? (
              <>
                <title>Mortgage Broker Lurnea NSW - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Discover your dream home in Lurnea, Australia. Explore diverse housing options and a welcoming community. Begin your homeownership with us today!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-lurnea-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Lurnea NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover your dream home in Lurnea, Australia. Explore diverse housing options and a welcoming community. Begin your homeownership with us today!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-lurnea-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:25:58+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:15:46+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:25:58+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Lurnea NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover your dream home in Lurnea, Australia. Explore diverse housing options and a welcoming community. Begin your homeownership with us today!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-middleton-grange" ? (
              <>
                <title>
                  Mortgage Broker Middleton Grange - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Discover Middleton Grange: A suburban haven for home buyers. Explore diverse housing options in this thriving Sydney locale today."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-middleton-grange/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Middleton Grange - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover Middleton Grange: A suburban haven for home buyers. Explore diverse housing options in this thriving Sydney locale today."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-middleton-grange/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:26:03+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:15:33+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:26:03+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Middleton Grange - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover Middleton Grange: A suburban haven for home buyers. Explore diverse housing options in this thriving Sydney locale today."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-mitcham" ? (
              <>
                <title>Mortgage Broker Mitcham - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Mitcham, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-mitcham/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Mitcham - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Mitcham, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-mitcham/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:16+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:07:24+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:16+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Mitcham - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or are thinking of joining the wonderful Estate of Mitcham, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-moorebank" ? (
              <>
                <title>Mortgage Broker Moorebank - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Secure your dream home with our trusted Moorebank mortgage company. Get the best home loan rates and expert advice. Your path to homeownership starts here!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-moorebank/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Moorebank - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Secure your dream home with our trusted Moorebank mortgage company. Get the best home loan rates and expert advice. Your path to homeownership starts here!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-moorebank/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:26:08+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:44:20+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:26:08+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Moorebank - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Secure your dream home with our trusted Moorebank mortgage company. Get the best home loan rates and expert advice. Your path to homeownership starts here!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-mornington-peninsula" ? (
              <>
                <title>
                  Mortgage Broker Mornington Peninsula - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mornington Peninsula, you have"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-mornington-peninsula/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Mornington Peninsula - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mornington Peninsula, you have"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-mornington-peninsula/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:17+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:07:33+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:17+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Mornington Peninsula - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mornington Peninsula, you have"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-mount-waverley" ? (
              <>
                <title>
                  Mortgage Broker Mount Waverley - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mount Waverley, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-mount-waverley/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Mount Waverley - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mount Waverley, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-mount-waverley/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:21+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:09:02+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:21+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Mount Waverley - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Mount Waverley, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-pakenham" ? (
              <>
                <title>Mortgage Broker Pakenham - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Pakenham, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-pakenham/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Pakenham - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Pakenham, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-pakenham/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-11-04T13:56:06+11:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/pakenham-station.webp"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/pakenham-station.webp"
                />
                <meta property="og:image:width" content="837" />
                <meta property="og:image:height" content="558" />
                <meta
                  property="og:image:alt"
                  content="pakenham mortgage brokers"
                />
                <meta property="og:image:type" content="image/webp" />
                <meta
                  property="article:published_time"
                  content="2022-12-26T20:59:10+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-11-04T13:56:06+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Pakenham - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Pakenham, you have come to the"
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/01/pakenham-station.webp"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="3 minutes" />
              </>
            ) : pathname === "/mortgage-broker-perth" ? (
              <>
                <title>Mortgage Broker Perth - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Perth, you have come to the right"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-perth/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Perth - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Perth, you have come to the right"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-perth/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-07-30T20:28:10+10:00"
                />
                <meta
                  property="og:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta
                  property="og:image:secure_url"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="800" />
                <meta property="og:image:alt" content="Mortgage Broker Perth" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                  property="article:published_time"
                  content="2023-07-30T20:24:07+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-07-30T20:28:10+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Perth - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Perth, you have come to the right"
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/wp-content/uploads/2023/07/mortage-broker-Perth.jpg"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-prestons-nsw-2170" ? (
              <>
                <title>
                  Mortgage Broker Prestons, NSW 2170 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Discover Prestons: Affordable houses, great amenities, and easy access. Your dream home awaits in this vibrant Sydney suburb!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-prestons-nsw-2170/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Prestons, NSW 2170 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover Prestons: Affordable houses, great amenities, and easy access. Your dream home awaits in this vibrant Sydney suburb!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-prestons-nsw-2170/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:02+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-21T00:15:00+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:02+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Prestons, NSW 2170 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover Prestons: Affordable houses, great amenities, and easy access. Your dream home awaits in this vibrant Sydney suburb!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-ringwood" ? (
              <>
                <title>Mortgage Broker Ringwood - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Ringwood, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Ringwood - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Ringwood, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-ringwood/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:35:24+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:09:47+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:35:24+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Ringwood - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Ringwood, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-rockbank" ? (
              <>
                <title>Mortgage Broker Rockbank - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Rockbank, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-rockbank/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Rockbank - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Rockbank, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-rockbank/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:36:52+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:10:27+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:36:52+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Rockbank - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Rockbank, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-scoresby" ? (
              <>
                <title>Mortgage Broker Scoresby - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Scoresby, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-scoresby/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Scoresby - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Scoresby, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-scoresby/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-22T20:36:55+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:10:40+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-22T20:36:55+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Scoresby - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Scoresby, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-south-yarra" ? (
              <>
                <title>Mortgage Broker South Yarra - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of South Yarra, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker South Yarra - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of South Yarra, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-south-yarra/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T17:08:20+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:11:02+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T17:08:20+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker South Yarra - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of South Yarra, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-springvale" ? (
              <>
                <title>Mortgage Broker Springvale - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Springvale, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-springvale/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Springvale - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Springvale, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-springvale/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-29T15:45:14+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:10:51+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-29T15:45:14+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Springvale - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Springvale, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="3 minutes" />
              </>
            ) : pathname === "/mortgage-broker-sydney-nsw" ? (
              <>
                <title>
                  Mortgage Broker Sydney NSW 2000 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Sydney NSW, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-sydney-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Sydney NSW 2000 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Sydney NSW, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-sydney-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:33+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-17T13:14:44+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:33+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Sydney NSW 2000 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Sydney NSW, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="5 minutes" />
              </>
            ) : pathname === "/mortgage-broker-tarneit" ? (
              <>
                <title>Mortgage Broker Tarneit - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Tarneit, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-tarneit/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Tarneit - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Tarneit, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-tarneit/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T17:02:05+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:11:17+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T17:02:05+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Tarneit - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Tarneit, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-werribee" ? (
              <>
                <title>Mortgage Broker Werribee - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Werribee, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-werribee/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Werribee - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Werribee, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-werribee/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:56:51+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:11:26+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:56:51+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Werribee - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Werribee, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="3 minutes" />
              </>
            ) : pathname === "/mortgage-broker-wheelers-hill" ? (
              <>
                <title>
                  Mortgage Broker Wheelers Hill - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wheelers Hill, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-wheelers-hill/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Wheelers Hill - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wheelers Hill, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-wheelers-hill/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:51:58+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:11:34+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:51:58+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Wheelers Hill - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wheelers Hill, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-williams-landing" ? (
              <>
                <title>
                  Mortgage Broker Williams Landing - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-williams-landing/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Williams Landing - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-williams-landing/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:47:44+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:13:53+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:47:44+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Williams Landing - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-wyndham-vale" ? (
              <>
                <title>Mortgage Broker Wyndham Vale - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wyndham Vale, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-wyndham-vale/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Wyndham Vale - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wyndham Vale, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-wyndham-vale/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:42:23+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:14:05+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:42:23+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Wyndham Vale - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Wyndham Vale, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-broker-williams-landing" ? (
              <>
                <title>
                  Mortgage Broker Williams Landing - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-broker-williams-landing/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Broker Williams Landing - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-broker-williams-landing/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-09-15T16:47:44+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-08-25T22:13:53+10:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-09-15T16:47:44+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Broker Williams Landing - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking to purchase your first home or thinking to join the wonderful Estate of Williams Landing, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-brokers-cabramatta" ? (
              <>
                <title>Mortgage Brokers Cabramatta - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Discover Cabramatta&#039;s diverse housing market. Find your perfect home with our expert guidance. Your dream house awaits in Cabramatta"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-brokers-cabramatta/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Brokers Cabramatta - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Discover Cabramatta&#039;s diverse housing market. Find your perfect home with our expert guidance. Your dream house awaits in Cabramatta"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-brokers-cabramatta/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:43+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-10-07T20:34:37+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:43+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Brokers Cabramatta - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Discover Cabramatta&#039;s diverse housing market. Find your perfect home with our expert guidance. Your dream house awaits in Cabramatta"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-brokers-in-parramatta-nsw" ? (
              <>
                <title>
                  Mortgage Brokers in Parramatta, NSW - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Your key to homeownership in Parramatta, Sydney. Explore our mortgage solutions for competitive rates and expert guidance. Unlock your dream home today!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-brokers-in-parramatta-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Brokers in Parramatta, NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Your key to homeownership in Parramatta, Sydney. Explore our mortgage solutions for competitive rates and expert guidance. Unlock your dream home today!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-brokers-in-parramatta-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:53+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:46:20+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:53+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Brokers in Parramatta, NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Your key to homeownership in Parramatta, Sydney. Explore our mortgage solutions for competitive rates and expert guidance. Unlock your dream home today!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-brokers-in-ryde-nsw" ? (
              <>
                <title>
                  Mortgage Brokers in Ryde, NSW - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ryde NSW, you have come to the"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Brokers in Ryde, NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ryde NSW, you have come to the"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-brokers-in-ryde-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:48+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:46:39+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:48+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Brokers in Ryde, NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Ryde NSW, you have come to the"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-brokers-in-sutherland-nsw" ? (
              <>
                <title>
                  Mortgage Brokers in Sutherland, NSW - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Your path to homeownership in Sutherland, Australia, starts here. Discover competitive rates and expert guidance with our mortgage company."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-brokers-in-sutherland-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Brokers in Sutherland, NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Your path to homeownership in Sutherland, Australia, starts here. Discover competitive rates and expert guidance with our mortgage company."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-brokers-in-sutherland-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:27:59+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:49:03+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:27:59+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Brokers in Sutherland, NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Your path to homeownership in Sutherland, Australia, starts here. Discover competitive rates and expert guidance with our mortgage company."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-brokers-len-waters-estate-nsw" ? (
              <>
                <title>
                  Mortgage Brokers Len Waters Estate, NSW - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Secure your dream home in Len Waters Estate with our trusted mortgage company. Competitive rates and expert guidance to make homeownership a reality."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-brokers-len-waters-estate-nsw/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Brokers Len Waters Estate, NSW - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Secure your dream home in Len Waters Estate with our trusted mortgage company. Competitive rates and expert guidance to make homeownership a reality."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-brokers-len-waters-estate-nsw/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:20+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2024-01-21T10:28:15+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:20+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Brokers Len Waters Estate, NSW - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Secure your dream home in Len Waters Estate with our trusted mortgage company. Competitive rates and expert guidance to make homeownership a reality."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/mortgage-repayment-calculator" ? (
              <>
                <title>
                  Mortgage Repayment Calculator - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Calculate your estimated monthly home loan repayments, or see how refinancing could help save you money"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mortgage-repayment-calculator/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mortgage Repayment Calculator - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Calculate your estimated monthly home loan repayments, or see how refinancing could help save you money"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mortgage-repayment-calculator/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2023-11-04T13:55:38+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2022-11-28T04:56:45+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2023-11-04T13:55:38+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mortgage Repayment Calculator - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Calculate your estimated monthly home loan repayments, or see how refinancing could help save you money"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="Less than a minute" />
              </>
            ) : pathname === "/mosman-mortgage-brokers" ? (
              <>
                <title>Mosman Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock the doors to your dream home in Mosman with tailored mortgage solutions and expert guidance."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/mosman-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Mosman Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock the doors to your dream home in Mosman with tailored mortgage solutions and expert guidance."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/mosman-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:35+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:55:28+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:35+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Mosman Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock the doors to your dream home in Mosman with tailored mortgage solutions and expert guidance."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/north-sydney-mortgage-brokers" ? (
              <>
                <title>
                  North Sydney Mortgage Brokers - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="North Sydney&#039;s path to homeownership. Unlock mortgage solutions with competitive rates and expert guidance. Your dream home awaits!"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/north-sydney-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="North Sydney Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="North Sydney&#039;s path to homeownership. Unlock mortgage solutions with competitive rates and expert guidance. Your dream home awaits!"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/north-sydney-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:42+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:48:33+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:42+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="North Sydney Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="North Sydney&#039;s path to homeownership. Unlock mortgage solutions with competitive rates and expert guidance. Your dream home awaits!"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/paddington-mortgage-brokers" ? (
              <>
                <meta
                  name="description"
                  content="Unlock your dream home in Paddington, NSW, with our tailored home loan solutions. Your path to homeownership begins here."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/paddington-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Paddington Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Paddington, NSW, with our tailored home loan solutions. Your path to homeownership begins here."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/paddington-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:48+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:58:48+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:48+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Paddington Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Paddington, NSW, with our tailored home loan solutions. Your path to homeownership begins here."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/point-piper-mortgage-brokers" ? (
              <>
                <title>Point Piper Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Sail into opulent living in Point Piper, NSW! Our bespoke mortgages redefine luxury homeownership. Elevate your address with tailored financial sophistication."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/point-piper-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Point Piper Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Sail into opulent living in Point Piper, NSW! Our bespoke mortgages redefine luxury homeownership. Elevate your address with tailored financial sophistication."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/point-piper-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:52+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T22:01:49+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:52+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Point Piper Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Sail into opulent living in Point Piper, NSW! Our bespoke mortgages redefine luxury homeownership. Elevate your address with tailored financial sophistication."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/randwick-mortgage-brokers" ? (
              <>
                <title>Randwick Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Find your dream home in Randwick, Australia. Coastal charm and city living await. Begin your homebuying journey in this Eastern Sydney haven."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/randwick-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Randwick Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Find your dream home in Randwick, Australia. Coastal charm and city living await. Begin your homebuying journey in this Eastern Sydney haven."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/randwick-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-06-04T03:20:15+10:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:57:08+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-06-04T03:20:15+10:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Randwick Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Find your dream home in Randwick, Australia. Coastal charm and city living await. Begin your homebuying journey in this Eastern Sydney haven."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/rose-bay-mortgage-brokers" ? (
              <>
                <title>Rose Bay Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Ascend to exclusivity in Rose Bay, NSW! Our innovative mortgages sculpt your bespoke homeownership journey. Elevate living with financial finesse."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/rose-bay-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Rose Bay Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Ascend to exclusivity in Rose Bay, NSW! Our innovative mortgages sculpt your bespoke homeownership journey. Elevate living with financial finesse."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/rose-bay-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:28:57+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T22:01:47+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:28:57+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Rose Bay Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Ascend to exclusivity in Rose Bay, NSW! Our innovative mortgages sculpt your bespoke homeownership journey. Elevate living with financial finesse."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/st-ives-mortgage-brokers-nsw-2075" ? (
              <>
                <title>
                  St Ives Mortgage Brokers, NSW 2075 - Low Rate Home Loan
                </title>
                <meta
                  name="description"
                  content="Turn your St Ives dream home into reality with our mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/st-ives-mortgage-brokers-nsw-2075/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="St Ives Mortgage Brokers, NSW 2075 - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Turn your St Ives dream home into reality with our mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/st-ives-mortgage-brokers-nsw-2075/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:29:33+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:48:17+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:29:33+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="St Ives Mortgage Brokers, NSW 2075 - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Turn your St Ives dream home into reality with our mortgage solutions. Competitive rates and expert guidance for homeownership."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/turramurra-mortgage-brokers" ? (
              <>
                <title>Turramurra Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Turramurra NSW, you have come to"
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link
                  rel="canonical"
                  href="https://lowratehomeloan.com.au/turramurra-mortgage-brokers/"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Turramurra Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Turramurra NSW, you have come to"
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/turramurra-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:29:39+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:53:40+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:29:39+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Turramurra Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Thank you for visiting our site. If you are looking for a mortgage broker to purchase your first home or join the wonderful Turramurra NSW, you have come to"
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : pathname === "/waitara-mortgage-brokers" ? (
              <>
                <title>Waitara Mortgage Brokers - Low Rate Home Loan</title>
                <meta
                  name="description"
                  content="Unlock your dream home in Waitara, Australia. Explore a world of housing possibilities and invest in the best neighbourhood in town."
                />
                <meta
                  name="robots"
                  content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta
                  property="og:title"
                  content="Waitara Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  property="og:description"
                  content="Unlock your dream home in Waitara, Australia. Explore a world of housing possibilities and invest in the best neighbourhood in town."
                />
                <meta
                  property="og:url"
                  content="https://lowratehomeloan.com.au/waitara-mortgage-brokers/"
                />
                <meta property="og:site_name" content="Low Rate Home Loan" />
                <meta
                  property="og:updated_time"
                  content="2024-01-21T10:29:46+11:00"
                />
                <meta
                  property="article:published_time"
                  content="2023-11-28T21:55:45+11:00"
                />
                <meta
                  property="article:modified_time"
                  content="2024-01-21T10:29:46+11:00"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Waitara Mortgage Brokers - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content="Unlock your dream home in Waitara, Australia. Explore a world of housing possibilities and invest in the best neighbourhood in town."
                />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="4 minutes" />
              </>
            ) : ///////////////  Subrub ends herf
            pathname === "/about-us" ? (
              <>
                <meta
                  name="description"
                  content="Regardless of whether you are a first-time home buyer, upgrading to your next house, interested in real estate investing, or looking to refinance and pay off your existing home loan faster.We make it happen. No one like paying more than necessary, so we compare and select from our panel of over 53+ lenders to discover"
                />
                <meta name="robots" content="max-image-preview:large" />
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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

                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="generator"
                  content="All in One SEO (AIOSEO) 4.2.9 "
                />
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
                <meta
                  name="twitter:title"
                  content="Home - Low Rate Home Loan"
                />
                <meta
                  name="twitter:description"
                  content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
                />
                <meta
                  name="twitter:image"
                  content="https://lowratehomeloan.com.au/lowratehomeloan-logo.svg"
                />
              </>
            )
          }

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
