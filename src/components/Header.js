"use client";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Navbar from "./../components/NavBar";
// import { deleteTodo } from "@/app/api/todoList/route";
// import kadenceConfig from "./../../../kadenceConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
function Header({ data, update }) {
  // const todoArray = data ? JSON?.parse(data) : [];
  const router = useRouter();

  return (
    <div style={{ marginBottom: "150px" }}>
      <Navbar />
      <header
        id="masthead"
        className="site-header"
        role="banner"
        itemType="https://schema.org/WPHeader"
        itemScope
        style={{ position: "fixed", width: "100%" }}
      >
        <div id="main-header" className="site-header-wrap">
          <div className="site-header-inner-wrap">
            <div className="site-header-upper-wrap">
              <div className="site-header-upper-inner-wrap">
                <div
                  className="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard"
                  data-section="kadence_customizer_header_main"
                >
                  <div className="site-header-row-container-inner">
                    <div className="site-container">
                      <div className="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
                        <div className="site-header-main-section-left site-header-section site-header-section-left">
                          <div
                            className="site-header-item site-header-focus-item"
                            data-section="title_tagline"
                          >
                            <div className="site-branding branding-layout-standard site-brand-logo-only">
                              <Link href={"/"} className="brand has-logo-image">
                                <Image
                                  src="lowratehomeloan-logo.svg"
                                  className="custom-logo svg-logo-image"
                                  alt="low rate home loan logo"
                                  decoding="async"
                                  width={396}
                                  height={310}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="site-header-main-section-right site-header-section site-header-section-right">
                          <div
                            className="site-header-item site-header-focus-item"
                            data-section="kadence_customizer_header_html"
                          >
                            <div className="header-html inner-link-style-plain">
                              <div className="header-html-inner">
                                <div id="icon-phone">
                                  <a href="tel:0370645204">
                                    {/* <img
                                      className="alignnone size-medium wp-image-4211"
                                      src="http://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/phone.svg"
                                      alt=""
                                    /> */}
                                  </a>
                                  <span id="phone">
                                    <a href="tel:0370645204">03 7064 5204</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false"
                            data-section="kadence_customizer_primary_navigation"
                          >
                            <nav
                              id="site-navigation"
                              className="main-navigation header-navigation nav--toggle-sub header-navigation-style-standard header-navigation-dropdown-animation-fade-down"
                              role="navigation"
                              aria-label="Primary Navigation"
                            >
                              <div className="primary-menu-container header-menu-container">
                                <ul id="primary-menu" className="menu">
                                  <li
                                    id="menu-item-3960"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3960"
                                  >
                                    <a href="#">
                                      <span className="nav-drop-title-wrap">
                                        <Link href={"/home-loans"}>
                                          Home Loans
                                        </Link>

                                        <span className="dropdown-nav-toggle">
                                          <span className="kadence-svg-iconset svg-baseline">
                                            <svg
                                              aria-hidden="true"
                                              className="kadence-svg-icon kadence-arrow-down-svg"
                                              fill="currentColor"
                                              version="1.1"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                            >
                                              <title>Expand</title>
                                              <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                    </a>
                                    <ul className="sub-menu">
                                      <li
                                        id="menu-item-3959"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3959"
                                      >
                                        <Link href={"/buy-a-new-home"}>
                                          Buy a New Home: Mortgage Solutions
                                          Tailored for New Home Buyers
                                        </Link>
                                      </li>
                                      <li
                                        id="menu-item-3958"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3958"
                                      >
                                        <Link href={"/refinance-home-loan"}>
                                          Refinance Your Home &#8211; Lower Your
                                          Payments!
                                        </Link>
                                      </li>
                                      <li
                                        id="menu-item-3957"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3957"
                                      >
                                        <Link href={"/buy-investment-property"}>
                                          Investment Property Opportunities:
                                          Unlock Your Real Estate Potential
                                        </Link>
                                      </li>
                                      <li
                                        id="menu-item-3956"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3956"
                                      >
                                        <Link href={"/compare-rates"}>
                                          Compare Rates
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="menu-item-3961"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3961"
                                  >
                                    <Link
                                      href={"/areas-we-service"}
                                      style={{ cursor: "pointer" }}
                                    >
                                      Areas we Service
                                    </Link>
                                  </li>
                                  <li
                                    id="menu-item-3954"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3954"
                                  >
                                    <Link
                                      href={"/about-us"}
                                      style={{ cursor: "pointer" }}
                                    >
                                      About Us
                                    </Link>
                                  </li>
                                  <li
                                    id="menu-item-3955"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3955"
                                  >
                                    <Link
                                      href={"/contact"}
                                      style={{ cursor: "pointer" }}
                                    >
                                      Talk to Us
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </nav>
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

        <div id="mobile-header" className="site-mobile-header-wrap">
          <div className="site-header-inner-wrap">
            <div className="site-header-upper-wrap">
              <div className="site-header-upper-inner-wrap">
                <div className="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default ">
                  <div className="site-header-row-container-inner">
                    <div className="site-container">
                      <div className="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
                        <div className="site-header-main-section-left site-header-section site-header-section-left">
                          <div
                            className="site-header-item site-header-focus-item"
                            data-section="title_tagline"
                          >
                            <div className="site-branding mobile-site-branding branding-layout-standard branding-tablet-layout-inherit site-brand-logo-only branding-mobile-layout-inherit">
                              <Link
                                className="brand has-logo-image"
                                href={"/"}
                                rel="home"
                                aria-label="Low Rate Home Loan"
                              >
                                <img
                                  width="396"
                                  height="310"
                                  src="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lowratehomeloan-logo.svg"
                                  className="custom-logo svg-logo-image"
                                  alt="low rate home loan logo"
                                  decoding="async"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="site-header-main-section-right site-header-section site-header-section-right">
                          <div
                            className="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle"
                            data-section="kadence_customizer_mobile_trigger"
                          >
                            <div className="mobile-toggle-open-container">
                              <button
                                id="mobile-toggle"
                                className="menu-toggle-open drawer-toggle menu-toggle-style-default"
                                aria-label="Open menu"
                                data-toggle-target="#mobile-drawer"
                                // data-toggle-body-className="showing-popup-drawer-from-right"
                                aria-expanded="false"
                                data-set-focus=".menu-toggle-close"
                              >
                                <span className="menu-toggle-icon">
                                  <span className="kadence-svg-iconset">
                                    <svg
                                      aria-hidden="true"
                                      className="kadence-svg-icon kadence-menu-svg"
                                      fill="currentColor"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                    >
                                      <title>Toggle Menu</title>
                                      <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </button>
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
      </header>
    </div>
  );
}

export default Header;
