"use client";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Parallax from "./../../components/Parallex/parallex";
// import { deleteTodo } from "@/app/api/todoList/route";
// import kadenceConfig from "./../../../kadenceConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import { FeaturedTop } from "./../../components/FeaturedTop";
import { Hardwork } from "./../../components/Hardwork";
import { Testimonial } from "./../../components/Testimonial";
import { Faq } from "./../../components/Faq";
import { ContactForm } from "./../../components/ContactForm";
import { FeatureServices } from "./../../components/FeatureServices";
import { ReputableLenders } from "../../components/ReputableLenders";

function HomeComp({ data, update }) {
  // const todoArray = data ? JSON?.parse(data) : [];
  const router = useRouter();

  return (
    <div style={{ display: "block !important" }}>
      <section className="" style={{ display: "block !important" }}>
        {/* <Header /> */}

        <div
          id="wrapper"
          className="site wp-site-blocks"
          style={{ display: "block !important" }}
        >
          <div id="inner-wrap" className="wrap hfeed kt-clear">
            <div id="primary" className="content-area">
              <div className="content-container site-container">
                <main id="main" className="site-main" role="main">
                  <div className="content-wrap">
                    <article
                      id="post-4"
                      className="entry content-bg single-entry post-4 page type-page status-publish hentry"
                    >
                      <div className="entry-content-wrap">
                        <div className="entry-content single-content">
                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_e9ce02-c5"
                              className="kt-row-layout-inner kt-row-has-bg kt-layout-id_e9ce02-c5"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-middle kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_3c6715-04">
                                  <div className="kt-inside-inner-col">
                                    <h1
                                      className="kt-adv-heading_9de6d4-1d wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                      data-kb-block="kb-adv-heading_9de6d4-1d"
                                    >
                                      We will get you the
                                      <br />
                                      right home loan in Australia
                                    </h1>

                                    <div className="is-content-justification-center is-layout-flex wp-container-1 wp-block-buttons">
                                      <div className="wp-block-button has-custom-width wp-block-button__width-50">
                                        <Link
                                          href="/refinance-consultation"
                                          className="wp-block-button__link wp-element-button"
                                        >
                                          <strong>i want to refinance</strong>
                                        </Link>
                                      </div>

                                      <div className="wp-block-button has-custom-width wp-block-button__width-50 is-style-outline">
                                        <Link
                                          className="wp-block-button__link has-theme-palette-1-background-color has-background wp-element-button"
                                          href="/buy-home-consultation"
                                        >
                                          <strong>i want to buy a home</strong>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <FeaturedTop />

                          <ReputableLenders />

                          <FeatureServices />

                          <Hardwork />

                          <Testimonial />

                          <Faq />

                          {/* <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_7a5f35-04"
                              className="kt-row-layout-inner kt-row-has-bg kt-layout-id_7a5f35-04 kt-jarallax"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_2e422c-cd">
                                  <div className="kt-inside-inner-col"></div>
                                </div>
                              </div>
                            </div>
                          </div> */}

                          <Parallax />
                          <ContactForm />
                        </div>
                      </div>
                    </article>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeComp;
