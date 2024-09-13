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
// import { useRouter } from "next/navigation";
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

  // Trigger GTM on route change
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
          {/* <link
            rel="alternate"
            type="application/rss+xml"
            title="Low Rate Home Loan &raquo; Comments Feed"
            href="https://scoresbymortgagebroker.com.au/comments/feed/"
          /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
          <meta
            name="description"
            content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
          />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="canonical" href="https://lowratehomeloan.com.au/" />
          <meta name="generator" content="All in One SEO (AIOSEO) 4.2.9 " />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Low Rate Home Loan -" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home - Low Rate Home Loan" />
          <meta
            property="og:description"
            content='We will get you the best home loan in Australia I want to refinance I want to buy a home Featured Services How can we help? We understand that the diverse needs of most people do not have "one-size-fits-all" answers.We will acquire the best loan to suit your specific requirements by getting to know you,'
          />{" "}
          <meta property="og:url" content="https://lowratehomeloan.com.au/" />
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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXHTV9X');`,
            }}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PXHTV9X"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Facebook Pixel Code */}
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
        </body>
      </html>
    </Provider>
  );
}
