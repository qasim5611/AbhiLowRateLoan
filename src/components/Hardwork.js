"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApplicationProcess } from "./../redux/slices/globalSlice";
export function Hardwork(props) {
  const [faqs, setFaqs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getApplicationProcess({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      console.log("getApplicationProcess,", resp);
      console.log("herosection", resp?.payload?.data?.data[0]?.tagline);
      const data = resp?.payload?.data?.data || [];
      setFaqs(data.map((item) => ({ tagline: item.tagline, desc: item.desc })));
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_fa63cc-81"
          className="kt-row-layout-inner kt-row-has-bg kt-layout-id_fa63cc-81"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_783e95-20">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_883df2-ca"
                    className="kt-row-layout-inner kt-layout-id_883df2-ca"
                  >
                    <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                      <div className="wp-block-kadence-column inner-column-1 kadence-column_00124d-0e">
                        <div className="kt-inside-inner-col">
                          <h6
                            className="kt-adv-heading_013229-16 wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                            data-kb-block="kb-adv-heading_013229-16"
                          >
                            We do all the hard work
                          </h6>

                          <h2
                            className="kt-adv-heading_d86969-75 wp-block-kadence-advancedheading"
                            data-kb-block="kb-adv-heading_d86969-75"
                          >
                            <strong>STRAIGHTFORWARD APPLICATION PROCESS</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_f343e1-a8"
                    className="kt-row-layout-inner kt-layout-id_f343e1-a8"
                  >
                    <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-widest kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                      <div className="wp-block-kadence-column inner-column-1 kadence-column_91bdc3-9f">
                        <div className="kt-inside-inner-col">
                          {faqs.length > 0 ? (
                            <>
                              {faqs.map((itmn, index) => {
                                if (index <= 2) {
                                  return (
                                    <div
                                      key={index}
                                      className="wp-block-kadence-rowlayout alignnone"
                                    >
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
                                                {index + 1}
                                              </span>
                                            </div>
                                          </div>

                                          <div className="wp-block-kadence-column inner-column-2 kadence-column_fe460e-05">
                                            <div className="kt-inside-inner-col">
                                              <h6
                                                className="kt-adv-heading_6073dd-4d black-bold wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading_6073dd-4d"
                                              >
                                                <strong>{itmn.tagline}</strong>
                                              </h6>

                                              <p>{itmn.desc}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </>
                          ) : (
                            <>
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
                                          <strong>Initial Consultation</strong>
                                        </h6>

                                        <p>
                                          Begin with a consultation (via phone,
                                          video conference, or face-to-face) to
                                          understand your motivations and
                                          requirements.
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
                                          <strong>Document Gathering</strong>
                                        </h6>

                                        <p>
                                          Please gather all required documents
                                          to verify and assess your financial
                                          situation, ensuring they are accurate
                                          and up-to-date for review and
                                          evaluation.
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
                                            Preliminary Assessment
                                          </strong>
                                        </h6>

                                        <p>
                                          We will review your documents to
                                          navigate our network of lenders,
                                          determine your eligibility, obtain
                                          upfront valuations, and negotiate
                                          pricing to identify the best lending
                                          strategies for your needs.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="wp-block-kadence-column inner-column-2 kadence-column_7199ea-d6">
                        <div className="kt-inside-inner-col">
                          {faqs.length > 0 ? (
                            <>
                              {faqs.map((itmnnm, index) => {
                                if (index >= 3) {
                                  return (
                                    <div
                                      key={index}
                                      className="wp-block-kadence-rowlayout alignnone"
                                    >
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
                                                {index + 1}
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
                                                  {itmnnm.tagline}
                                                </strong>
                                              </h6>

                                              <p>{itmnnm.desc}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </>
                          ) : (
                            <>
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
                                          <strong>Credit Proposal</strong>
                                        </h6>

                                        <p>
                                          We'll discuss potential strategies,
                                          outlining the pros and cons of each
                                          product and lender, to help you make
                                          an informed decision.
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
                                            Application Submission
                                          </strong>
                                        </h6>

                                        <p>
                                          Once you've made an informed decision,
                                          we'll submit your application to the
                                          chosen lender and manage the entire
                                          process until your loan is settled.
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
                                          <strong>Aftercare Program</strong>
                                        </h6>

                                        <p>
                                          After your loan is settled, we'll
                                          invite you to annual reviews of your
                                          financial situation to ensure your
                                          needs and requirements are continually
                                          met.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
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
    </>
  );
}
