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
// import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Provider } from "react-redux";
import { store } from "./../redux/store";
import Script from "next/script";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading data or any asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating 3 seconds of loading time
  }, []);

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
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/trustindex-google-widget.css?ver=1673419651"
            media="all"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Low Rate Home Loan &raquo; Comments Feed"
            href="https://scoresbymortgagebroker.com.au/comments/feed/"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
          <meta
            name="description"
            content='We will get you the best home loan in Melbourne I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
          />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="canonical" href="https://scoresbymortgagebroker.com.au/" />
          <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Low Rate Home Loan -" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home - Low Rate Home Loan" />
          <meta
            property="og:description"
            content='We will get you the best home loan in Melbourne I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
          />{" "}
          <meta
            property="og:url"
            content="https://scoresbymortgagebroker.com.au/"
          />
          <meta
            property="og:image"
            content="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lowratehomeloan-logo.svg"
          />
          <meta
            property="og:image:secure_url"
            content="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lowratehomeloan-logo.svg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home - Low Rate Home Loan" />
          <meta
            name="twitter:description"
            content='We will get you the best home loan in Melbourne I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
          />
          <meta
            name="twitter:image"
            content="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lowratehomeloan-logo.svg"
          />
          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="https://scoresbymortgagebroker.com.au/wp-includes/css/dist/block-library/style.min.css?ver=6.1.5"
            media="all"
          />
          <link
            rel="stylesheet"
            id="classic-theme-styles-css"
            href="https://scoresbymortgagebroker.com.au/wp-includes/css/classic-themes.min.css?ver=1"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wpsm_ac-font-awesome-front-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/css/font-awesome/css/font-awesome.min.css?ver=6.1.5"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wpsm_ac_bootstrap-front-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/css/bootstrap-front.css?ver=6.1.5"
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
            href="https://scoresbymortgagebroker.com.au/wp-content/themes/kadence/assets/css/header.min.css?ver=1.1.31"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-content-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/themes/kadence/assets/css/content.min.css?ver=1.1.31"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-footer-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/themes/kadence/assets/css/footer.min.css?ver=1.1.31"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_basic-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/gravityforms/assets/css/dist/basic.min.css?ver=2.6.9"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_theme_components-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/gravityforms/assets/css/dist/theme-components.min.css?ver=2.6.9"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_theme_ie11-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/gravityforms/assets/css/dist/theme-ie11.min.css?ver=2.6.9"
            media="all"
          />
          <link
            rel="stylesheet"
            id="gform_theme-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/gravityforms/assets/css/dist/theme.min.css?ver=2.6.9"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-blocks-rowlayout-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/kadence-blocks/dist/blocks/row.style.build.css?ver=2.4.22"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-blocks-column-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/plugins/kadence-blocks/dist/blocks/column.style.build.css?ver=2.4.22"
            media="all"
          />
          <link
            rel="stylesheet"
            id="kadence-fonts-css"
            href="https://fonts.googleapis.com/css?family=Ubuntu:regular,500,700%7CPoppins:600,regular&#038;display=swap"
            media="all"
          />
          <link
            rel="icon"
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/logo-150x150.webp"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/logo.webp"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/logo.webp"
          />
          <meta
            name="msapplication-TileImage"
            content="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/logo.webp"
          />
          <link
            rel="stylesheet"
            id="ti-widget-css-google-css"
            href="https://scoresbymortgagebroker.com.au/wp-content/uploads/trustindex-google-widget.css?ver=1673419651"
            media="all"
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
          pathname === "/buy-home-consultation" ||
          pathname === "/refinance-consultation" ||
          pathname === "/adminPanel/herosection" ||
          pathname === "/adminPanel/featuredtop" ||
          pathname === "/adminPanel/reputableLenders" ||
          pathname === "/adminPanel/featuredservices" ||
          pathname === "/adminPanel/applicationprocess" ||
          pathname === "/adminPanel/testimonials" ||
          pathname === "/adminPanel/faqs" ||
          pathname === "/adminPanel/featuredservicesImages" ||
          pathname === "/adminPanel/freeconsultation" ? null : (
            <Footer />
          )}

          <ToastContainer />

          <script src="assets/js/Kadence.js"></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-includes/js/jquery/jquery.min.js?ver=3.6.1"
            id="jquery-core-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion-custom.js?ver=6.1.5"
            id="call_ac-custom-js-front-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion.js?ver=6.1.5"
            id="call_ac-js-front-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/themes/kadence/assets/js/navigation.min.js?ver=1.1.31"
            id="kadence-navigation-js"
            async
          ></script>

          <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ver=6.1.5"
            id="trustindex-js-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion-custom.js?ver=6.1.5"
            id="call_ac-custom-js-front-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion.js?ver=6.1.5"
            id="call_ac-js-front-js"
          ></script>

          <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ver=6.1.5"
            id="trustindex-js-js"
          ></script>

          <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ver=6.1.5"
            id="trustindex-js-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion-custom.js?ver=6.1.5"
            id="call_ac-custom-js-front-js"
          ></script>

          <script
            src="https://scoresbymortgagebroker.com.au/wp-content/plugins/responsive-accordion-and-collapse/js/accordion.js?ver=6.1.5"
            id="call_ac-js-front-js"
          ></script>
        </body>
      </html>
    </Provider>
  );
}
