"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Parallax from "./../../components/Parallex/parallex";
import Link from "next/link";
import { FeaturedTop } from "./../../components/FeaturedTop";
import { Hardwork } from "./../../components/Hardwork";
import { Faq } from "./../../components/Faq";
import { ContactForm } from "./../../components/ContactForm";
import { FeatureServices } from "./../../components/FeatureServices";
import { ReputableLenders } from "../../components/ReputableLenders";
import { getHeroSection } from "./../../redux/slices/globalSlice";

const HomeComp = () => {
  const dispatch = useDispatch();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect called");
      let resp = await dispatch(getHeroSection());
      console.log("herosection", resp?.payload?.data?.mydata);
      setRecord(resp?.payload?.data?.mydata);
    };
    fetchData();
  }, [dispatch]);

  const addLineBreak = (text) => {
    const words = text.split(" ");
    if (words.length > 4) {
      words.splice(4, 0, <br key="line-break" />);
    }
    return words;
  };

  const formatTagline = (tagline) => {
    const words = tagline.split(" ");
    const beforeUpto = words.slice(0, 5).join(" ");
    const afterUpto = words.slice(5).join(" ");
    return (
      <>
        {beforeUpto} <br />
        {/* <span style={{ fontWeight: "bold" }}>upto</span> */}
        {afterUpto}
      </>
    );
  };

  return (
    <div style={{ display: "block !important" }}>
      <section className="" style={{ display: "block !important" }}>
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
                          {record.length > 0 ? (
                            <>
                              {record.map((itm, index) => (
                                <div
                                  key={index}
                                  className="wp-block-kadence-rowlayout alignnone"
                                >
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
                                            {formatTagline(itm?.tagline)}
                                          </h1>

                                          <div className="is-content-justification-center is-layout-flex wp-container-1 wp-block-buttons">
                                            <div className="wp-block-button has-custom-width wp-block-button__width-50">
                                              <Link
                                                href="/refinance-consultation"
                                                className="wp-block-button__link wp-element-button"
                                              >
                                                <strong>
                                                  {itm?.refinancebtn}
                                                </strong>
                                              </Link>
                                            </div>

                                            <div className="wp-block-button has-custom-width wp-block-button__width-50 is-style-outline">
                                              <Link
                                                className="wp-block-button__link has-theme-palette-1-background-color has-background wp-element-button"
                                                href="/buy-home-consultation"
                                              >
                                                <strong>{itm?.lownbtn}</strong>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : (
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
                                            style={{ fontSize: "20.25px" }}
                                          >
                                            <strong>i want to refinance</strong>
                                          </Link>
                                        </div>

                                        <div className="wp-block-button has-custom-width wp-block-button__width-50 is-style-outline">
                                          <Link
                                            className="wp-block-button__link has-theme-palette-1-background-color has-background wp-element-button"
                                            href="/buy-home-consultation"
                                            style={{ fontSize: "20.25px" }}
                                          >
                                            <strong>
                                              i want to buy a home
                                            </strong>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          <FeaturedTop />
                          <ReputableLenders />
                          <FeatureServices />
                          <Hardwork />
                          <Faq />
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
};

export default HomeComp;
