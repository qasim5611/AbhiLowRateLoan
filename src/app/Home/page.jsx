"use client";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";

// import { deleteTodo } from "@/app/api/todoList/route";
// import kadenceConfig from "./../../../kadenceConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FeaturedTop } from "@/components/FeaturedTop";
import { Hardwork } from "@/components/Hardwork";
import { Testimonial } from "@/components/Testimonial";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { FeatureServices } from "@/components/FeatureServices";

function Home({ data, update }) {
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
                                      Mortgages that Fit Your Life: Tailored
                                      Solutions by Trusted Mortgage Broker
                                      Scoresby
                                    </h1>

                                    <div className="is-content-justification-center is-layout-flex wp-container-1 wp-block-buttons">
                                      <div className="wp-block-button has-custom-width wp-block-button__width-50">
                                        <button
                                          onclick={() => {
                                            // router.push("/about"),
                                            console.log("fun chala");
                                          }}
                                          className="wp-block-button__link wp-element-button"
                                        >
                                          <strong>
                                            Refinance Your Home Loan
                                          </strong>
                                        </button>
                                      </div>

                                      <div className="wp-block-button has-custom-width wp-block-button__width-50 is-style-outline">
                                        <a
                                          className="wp-block-button__link has-theme-palette-1-background-color has-background wp-element-button"
                                          href="#"
                                        >
                                          <strong>Get a New Home Loan</strong>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <FeaturedTop />

                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_85ee71-82"
                              className="kt-row-layout-inner kt-layout-id_85ee71-82"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-right-to-left kt-mobile-layout-row kb-theme-content-width">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_87516b-7b">
                                  <div className="kt-inside-inner-col">
                                    <h2
                                      className="kt-adv-heading_4fee88-b0 wp-block-kadence-advancedheading"
                                      data-kb-block="kb-adv-heading_4fee88-b0"
                                    >
                                      <strong>
                                        Home Loans from over 53+ Reputable
                                        Lenders{" "}
                                      </strong>
                                    </h2>

                                    <div className="wp-block-kadence-image kb-image_12d362-b2 desktop-lender-img">
                                      <figure className="aligncenter size-large">
                                        <img
                                          style={{ margin: "0px auto" }}
                                          decoding="async"
                                          loading="lazy"
                                          width="1024"
                                          height="432"
                                          src="http://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-1024x432.webp"
                                          alt="home loans lenders list"
                                          className="kb-img wp-image-4131"
                                          srcset="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-1024x432.webp 1024w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-300x127.webp 300w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders-768x324.webp 768w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/home-loans-lenders.webp 1366w"
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                        />
                                      </figure>
                                    </div>

                                    <div className="wp-block-image mobile-lender-img">
                                      <figure className="aligncenter size-full">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="594"
                                          height="829"
                                          src="http://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lenders-vertical.webp"
                                          alt="loan lenders"
                                          className="wp-image-4718"
                                          srcset="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lenders-vertical.webp 594w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lenders-vertical-215x300.webp 215w"
                                          sizes="(max-width: 594px) 100vw, 594px"
                                        />
                                      </figure>
                                    </div>

                                    <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_a8a064-c7">
                                      <div className="kt-block-spacer kt-block-spacer-halign-center">
                                        <hr className="kt-divider" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <FeatureServices />

                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_fa63cc-81"
                              className="kt-row-layout-inner kt-row-has-bg kt-layout-id_fa63cc-81"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_783e95-20">
                                  <div className="kt-inside-inner-col">
                                    <Hardwork />

                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_f343e1-a8"
                                        className="kt-row-layout-inner kt-layout-id_f343e1-a8"
                                      >
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-widest kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_91bdc3-9f">
                                            <div className="kt-inside-inner-col">
                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_bb1d3f-a7"
                                                  className="kt-row-layout-inner kt-layout-id_bb1d3f-a7"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_25dd18-63">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_7112c1-59 bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_7112c1-59"
                                                        >
                                                          1
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_fe460e-05">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_6073dd-4d black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_6073dd-4d"
                                                        >
                                                          <strong>
                                                            Requirement
                                                            Assessment
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          We begin the process
                                                          by discussing your
                                                          home loan requirements
                                                          with our experienced
                                                          mortgage broker.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_d3ce46-61"
                                                  className="kt-row-layout-inner kt-layout-id_d3ce46-61"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_72726a-5f">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_8ca256-bb bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_8ca256-bb"
                                                        >
                                                          2
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_6761b8-d1">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_d4af8e-45 black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_d4af8e-45"
                                                        >
                                                          <strong>
                                                            Lender Comparison
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          After analysing your
                                                          mortgage needs, we
                                                          will provide you with
                                                          the most suitable loan
                                                          products and options
                                                          from our money
                                                          lenders.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_14ce95-26"
                                                  className="kt-row-layout-inner kt-layout-id_14ce95-26"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_8bb02f-f0">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_2f56ee-7a bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_2f56ee-7a"
                                                        >
                                                          3
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_c3174c-15">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_c6531d-72 black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_c6531d-72"
                                                        >
                                                          <strong>
                                                            Application
                                                            Preparation
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          Upon selection of a
                                                          lender, we will
                                                          further assist you in
                                                          completing the
                                                          mortgage application
                                                          which will include
                                                          personal and financial
                                                          details, property
                                                          information, and
                                                          supporting documents.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="wp-block-kadence-column inner-column-2 kadence-column_7199ea-d6">
                                            <div className="kt-inside-inner-col">
                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_0a4684-dd"
                                                  className="kt-row-layout-inner kt-layout-id_0a4684-dd"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_ab4db2-c7">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_5d4460-15 bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_5d4460-15"
                                                        >
                                                          4
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_0b8f4a-85">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_285c1a-be black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_285c1a-be"
                                                        >
                                                          <strong>
                                                            Loan Approval
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          After analysing and
                                                          verifying your details
                                                          and supporting
                                                          documents, the lender
                                                          will either send
                                                          approval or reject the
                                                          loan application.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_920529-b2"
                                                  className="kt-row-layout-inner kt-layout-id_920529-b2"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_87bd14-bd">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_00e5fb-18 bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_00e5fb-18"
                                                        >
                                                          5
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_401792-41">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_b7a6fe-86 black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_b7a6fe-86"
                                                        >
                                                          <strong>
                                                            Fund Dispersal
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          If approved, and the
                                                          offer is selected by
                                                          you, the loan amount
                                                          would be sanctioned
                                                          and transferred to
                                                          your bank account.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="wp-block-kadence-rowlayout alignnone">
                                                <div
                                                  id="kt-layout-id_3b9169-db"
                                                  className="kt-row-layout-inner kt-layout-id_3b9169-db"
                                                >
                                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-none kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-10  kt-custom-second-width-90">
                                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_28192f-ab">
                                                      <div className="kt-inside-inner-col">
                                                        <span
                                                          className="kt-adv-heading_21afd8-21 bullets wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_21afd8-21"
                                                        >
                                                          6
                                                        </span>
                                                      </div>
                                                    </div>

                                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_4e94fa-08">
                                                      <div className="kt-inside-inner-col">
                                                        <h6
                                                          className="kt-adv-heading_de4d95-57 black-bold wp-block-kadence-advancedheading"
                                                          data-kb-block="kb-adv-heading_de4d95-57"
                                                        >
                                                          <strong>
                                                            Loan Settlement
                                                          </strong>
                                                        </h6>

                                                        <p>
                                                          When the settlement
                                                          date for the acquired
                                                          loan approaches, we
                                                          will coordinate the
                                                          entire settlement
                                                          process for you.
                                                        </p>
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
                                </div>
                              </div>
                            </div>
                          </div>

                          <Testimonial />
                          <Faq />

                          <div className="wp-block-kadence-rowlayout alignnone">
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
                          </div>
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

export default Home;
