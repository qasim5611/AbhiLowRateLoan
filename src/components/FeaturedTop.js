"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureSection } from "./../redux/slices/globalSlice";

export function FeaturedTop() {
  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);

  const [record1, setRecord1] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getFeatureSection({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      const images = resp?.payload?.data?.images || [];
      setRecord1(images);

      // Initialize formData and loading state
      const initialFormData = {};
      const initialLoading = {};
      images.forEach((item, index) => {
        initialFormData[`tagline${index + 1}`] = item.tagline;
        initialFormData[`image${index + 1}`] = null;
        initialLoading[`loader${index + 1}`] = false;
      });
      setFormData(initialFormData);
      setLoading(initialLoading);
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="wp-block-kadence-rowlayout alignnone top-features">
        <div
          id="kt-layout-id_3f6702-8d"
          className="kt-row-layout-inner kt-row-has-bg kt-layout-id_3f6702-8d"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_6d9920-3c">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_bb8085-6d"
                    className="kt-row-layout-inner kt-layout-id_bb8085-6d"
                  >
                    <div className="kt-row-column-wrap kt-has-4-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-two-grid kt-m-colapse-left-to-right kt-mobile-layout-two-grid">
                      {record1.length > 0 ? (
                        <>
                          {record1.map((itm, index) => {
                            const formatText = (text) => {
                              const [firstPart, secondPart] =
                                text.split("upto");
                              return (
                                <>
                                  <p className="spacing has-theme-palette-9-color has-text-color">
                                    {firstPart}
                                  </p>
                                  {/* <br /> */}
                                  <span
                                    className="kt-adv-heading_41967a-b0 wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                    data-kb-block="kb-adv-heading_41967a-b0"
                                  >
                                    upto <strong>{secondPart}</strong>
                                  </span>
                                </>
                              );
                            };
                            return (
                              <div className="wp-block-kadence-column inner-column-1 kadence-column_10fd86-13 top-button">
                                <div className="kt-inside-inner-col">
                                  <div className="wp-block-kadence-rowlayout alignnone">
                                    <div
                                      id="kt-layout-id_b35231-50"
                                      className="kt-row-layout-inner kt-layout-id_b35231-50"
                                    >
                                      <Link
                                        style={{ textDecoration: "none" }}
                                        href={
                                          index == 0
                                            ? ""
                                            : index == 1
                                            ? "/gift-card-terms-condition"
                                            : index == 2
                                            ? ""
                                            : index == 3
                                            ? ""
                                            : null
                                        }
                                      >
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-25  kt-custom-second-width-75">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_c5ffd3-77">
                                            <div className="kt-inside-inner-col">
                                              <figure className="wp-block-image size-large">
                                                <img
                                                  style={{
                                                    width: "61px",
                                                    height: "61px",
                                                  }}
                                                  src={itm?.image_url}
                                                  alt=""
                                                  className="wp-image-3979"
                                                />
                                              </figure>
                                            </div>
                                          </div>
                                          <div className="wp-block-kadence-column inner-column-2 kadence-column_84ab0e-e5">
                                            <div className="kt-inside-inner-col">
                                              {formatText(itm?.tagline)}
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <div className="wp-block-kadence-column inner-column-1 kadence-column_10fd86-13 top-button">
                            <div className="kt-inside-inner-col">
                              <div className="wp-block-kadence-rowlayout alignnone">
                                <div
                                  id="kt-layout-id_b35231-50"
                                  className="kt-row-layout-inner kt-layout-id_b35231-50"
                                >
                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-25  kt-custom-second-width-75">
                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_c5ffd3-77">
                                      <div className="kt-inside-inner-col">
                                        <figure className="wp-block-image size-large">
                                          <img
                                            style={{
                                              width: "61px",
                                              height: "61px",
                                            }}
                                            src="/pics/featuredTop/cash-back-icon.svg"
                                            alt=""
                                            className="wp-image-3979"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_84ab0e-e5">
                                      <div className="kt-inside-inner-col">
                                        <p
                                          className="spacing has-theme-palette-9-color has-text-color"
                                          style={{
                                            fontSize: "18px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          CASH BACK
                                        </p>

                                        <span
                                          className="kt-adv-heading_41967a-b0 wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                          data-kb-block="kb-adv-heading_41967a-b0"
                                          style={{
                                            fontSize: "21.6px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          upto <strong>$6,000</strong>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="wp-block-kadence-column inner-column-2 kadence-column_fca79d-04 top-button">
                            <div className="kt-inside-inner-col">
                              <div className="wp-block-kadence-rowlayout alignnone">
                                <div
                                  id="kt-layout-id_2e188c-7a"
                                  className="kt-row-layout-inner kt-layout-id_2e188c-7a"
                                >
                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-25  kt-custom-second-width-75">
                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_67bd1a-93">
                                      <div className="kt-inside-inner-col">
                                        <figure className="wp-block-image size-large">
                                          <img
                                            style={{
                                              width: "61px",
                                              height: "61px",
                                            }}
                                            src="/pics/featuredTop/icon-gift-card.svg"
                                            alt="icon gift card"
                                            className="wp-image-4355"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_c32719-db">
                                      <Link href="/gift-card-terms-condition">
                                        <div className="kt-inside-inner-col">
                                          <p
                                            className="spacing has-theme-palette-9-color has-text-color"
                                            style={{
                                              fontSize: "18px",
                                              fontFamily: "ubuntu",
                                            }}
                                          >
                                            BONUS
                                          </p>

                                          <span
                                            className="kt-adv-heading_70bfd6-1b wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                            data-kb-block="kb-adv-heading_70bfd6-1b"
                                            style={{
                                              fontSize: "21.6px",
                                              fontFamily: "ubuntu",
                                            }}
                                          >
                                            upto <strong>$2,000</strong>
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="wp-block-kadence-column inner-column-3 kadence-column_4b4120-81 top-button">
                            <div className="kt-inside-inner-col">
                              <div className="wp-block-kadence-rowlayout alignnone">
                                <div
                                  id="kt-layout-id_a2ca21-d9"
                                  className="kt-row-layout-inner kt-layout-id_a2ca21-d9"
                                >
                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-25  kt-custom-second-width-75">
                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_7c8e04-94">
                                      <div className="kt-inside-inner-col">
                                        <figure className="wp-block-image size-large">
                                          <img
                                            style={{
                                              width: "61px",
                                              height: "61px",
                                            }}
                                            src="/pics/featuredTop/icon-loan-long-term.svg"
                                            alt="icon long term loan"
                                            className="wp-image-4359"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_52a2d9-69">
                                      <div className="kt-inside-inner-col">
                                        <p
                                          className="spacing has-theme-palette-9-color has-text-color"
                                          style={{
                                            fontSize: "18px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          LONG LOAN TERM
                                        </p>

                                        <span
                                          className="kt-adv-heading_ee5b99-a6 wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                          data-kb-block="kb-adv-heading_ee5b99-a6"
                                          style={{
                                            fontSize: "21.6px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          upto <strong>35 years</strong>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="wp-block-kadence-column inner-column-4 kadence-column_f36020-4b top-button">
                            <div className="kt-inside-inner-col">
                              <div className="wp-block-kadence-rowlayout alignnone">
                                <div
                                  id="kt-layout-id_eb552c-d0"
                                  className="kt-row-layout-inner kt-layout-id_eb552c-d0"
                                >
                                  <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-right-golden  kt-custom-first-width-25  kt-custom-second-width-75">
                                    <div className="wp-block-kadence-column inner-column-1 kadence-column_aa7ab8-71">
                                      <div className="kt-inside-inner-col">
                                        <figure className="wp-block-image size-large">
                                          <img
                                            style={{
                                              width: "61px",
                                              height: "61px",
                                            }}
                                            src="/pics/featuredTop/loan-term-icon.svg"
                                            alt="loan term icon"
                                            className="wp-image-3981"
                                          />
                                        </figure>
                                      </div>
                                    </div>

                                    <div className="wp-block-kadence-column inner-column-2 kadence-column_4ca723-e9">
                                      <div className="kt-inside-inner-col">
                                        <p
                                          className="spacing has-theme-palette-9-color has-text-color"
                                          style={{
                                            fontSize: "18px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          PROCESSING TIME
                                        </p>

                                        <span
                                          className="kt-adv-heading_26473f-72 wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color"
                                          data-kb-block="kb-adv-heading_26473f-72"
                                          style={{
                                            fontSize: "21.6px",
                                            fontFamily: "ubuntu",
                                          }}
                                        >
                                          upto <strong>2 hours</strong>
                                        </span>
                                      </div>
                                    </div>
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
    </>
  );
}
