import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import Link from "next/link";
import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";
import { ContactForm } from "../../components/ContactForm";

import { CircularProgress } from "@mui/material";
import { Faq } from "../../components/Faq";

export default function TalkUs(props) {
  return (
    <>
      {/* <Header /> */}
      <PageTitle title="Talk to Us" />
      <FeaturedTop />
      <ContactForm />
      <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_c9ff7f-0c"
          className="kt-row-layout-inner kt-layout-id_c9ff7f-0c"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_38a5fc-eb">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_6b3d07-cd"
                    className="kt-row-layout-inner kt-layout-id_6b3d07-cd"
                  >
                    <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                      <div className="wp-block-kadence-column inner-column-1 kadence-column_44cb43-75">
                        <div className="kt-inside-inner-col">
                          <div style={{ width: "100%" }}>
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6465998499393!2d145.47914123134825!3d-38.07861059209445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61e06fbed64ff%3A0x2ac3353160033b60!2s87%20Treloar%20Ln%2C%20Pakenham%20VIC%203810!5e0!3m2!1sen!2sau!4v1672060424641!5m2!1sen!2sau"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              width="100%"
                              height={550}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_965005-6f">
        <div className="kt-block-spacer kt-block-spacer-halign-center">
          <hr className="kt-divider" />
        </div>
      </div>
      <>
        <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_965005-6f">
          <div className="kt-block-spacer kt-block-spacer-halign-center">
            <hr className="kt-divider" />
          </div>
        </div>
        <Faq />
      </>
      <a
        id="kt-scroll-up"
        tabIndex={-1}
        aria-hidden="true"
        aria-label="Scroll to top"
        href="#wrapper"
        className="kadence-scroll-to-top scroll-up-wrap scroll-ignore scroll-up-side-right scroll-up-style-filled vs-lg-true vs-md-true vs-sm-true"
      >
        <span className="kadence-svg-iconset">
          <svg
            aria-hidden="true"
            className="kadence-svg-icon kadence-arrow-up-svg"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <title>Scroll to top</title>
            <path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" />
          </svg>
        </span>
      </a>
      <button
        id="kt-scroll-up-reader"
        href="#wrapper"
        aria-label="Scroll to top"
        className="kadence-scroll-to-top scroll-up-wrap scroll-ignore scroll-up-side-right scroll-up-style-filled vs-lg-true vs-md-true vs-sm-true"
      >
        <span className="kadence-svg-iconset">
          <svg
            aria-hidden="true"
            className="kadence-svg-icon kadence-arrow-up-svg"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <title>Scroll to top</title>
            <path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" />
          </svg>
        </span>
      </button>{" "}
      <div
        id="mobile-drawer"
        className="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right"
        data-drawer-target-string="#mobile-drawer"
      >
        <div
          className="drawer-overlay"
          data-drawer-target-string="#mobile-drawer"
        />
        <div className="drawer-inner">
          <div className="drawer-header">
            <button
              className="menu-toggle-close drawer-toggle"
              aria-label="Close menu"
              data-toggle-target="#mobile-drawer"
              data-toggle-body-class="showing-popup-drawer-from-right"
              aria-expanded="false"
              data-set-focus=".menu-toggle-open"
            >
              <span className="toggle-close-bar" />
              <span className="toggle-close-bar" />
            </button>
          </div>
          <div className="drawer-content mobile-drawer-content content-align-left content-valign-top">
            <div
              className="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false"
              data-section="kadence_customizer_mobile_navigation"
            >
              <nav
                id="mobile-site-navigation"
                className="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-true"
                role="navigation"
                aria-label="Primary Mobile Navigation"
              >
                <div className="mobile-menu-container drawer-menu-container">
                  <ul id="mobile-menu" className="menu has-collapse-sub-nav">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3960">
                      <div className="drawer-nav-drop-wrap">
                        <Link href={"/home-loans"}>Home Loans</Link>

                        <button
                          className="drawer-sub-toggle"
                          data-toggle-duration={10}
                          data-toggle-target="#mobile-menu .menu-item-3960 > .sub-menu"
                          aria-expanded="false"
                        >
                          <span className="screen-reader-text">
                            Expand child menu
                          </span>
                          <span className="kadence-svg-iconset">
                            <svg
                              aria-hidden="true"
                              className="kadence-svg-icon kadence-arrow-down-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <title>Expand</title>
                              <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3959">
                          <Link href={"/buy-a-new-home"}>
                            Buy a New Home: Mortgage Solutions Tailored for New
                            Home Buyers
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3958">
                          <Link href={"/refinance-home-loan"}>
                            Refinance Your Home – Lower Your Payments!
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3957">
                          <Link href={"/buy-investment-property"}>
                            Investment Property Opportunities: Unlock Your Real
                            Estate Potential
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3956">
                          <Link href={"/compare-rates"}>Compare Rates</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3961">
                      <Link href={"/reas-we-service"}>Areas we Service</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3954">
                      <Link href={"/about-us"}>About Us</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1455 current_page_item menu-item-3955">
                      <Link href={"/contact"}> Talk to Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* #site-navigation */}
            </div>
            {/* data-section="mobile_navigation" */}
          </div>
        </div>
      </div>
    </>
  );
}
