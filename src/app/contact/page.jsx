import Footer from "@/../components/Footer";
import Header from "@/../components/Header";
import Link from "next/link";
import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";

export default function TalkUs(props) {
  return (
    <>
      {/* <Header /> */}
      <PageTitle title="Talk to Us" />
      <FeaturedTop />
      <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_cd6d64-9a"
          className="kt-row-layout-inner kt-row-has-bg kt-layout-id_cd6d64-9a has-theme-palette-8-background-color"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_257508-4b">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_9132fd-60"
                    className="kt-row-layout-inner kt-layout-id_9132fd-60"
                  >
                    <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                      <div className="wp-block-kadence-column inner-column-1 kadence-column_0b252e-ff">
                        <div className="kt-inside-inner-col">
                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_038645-9b"
                              className="kt-row-layout-inner kt-row-has-bg kt-layout-id_038645-9b has-theme-palette-8-background-color"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_f51e5f-24">
                                  <div className="kt-inside-inner-col">
                                    <h6
                                      className="kt-adv-heading_0fa73f-88 wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                                      data-kb-block="kb-adv-heading_0fa73f-88"
                                    >
                                      Obligation free consultation
                                    </h6>
                                    <h2
                                      className="kt-adv-heading_ec6d34-1b wp-block-kadence-advancedheading"
                                      data-kb-block="kb-adv-heading_ec6d34-1b"
                                    >
                                      Ready to get started or still have
                                      questions?
                                    </h2>
                                    <p>
                                      Call us on 03 7064 5204 or fill up the
                                      form below and we will get back to you
                                      within 12 hours.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_b665b6-7f"
                              className="kt-row-layout-inner kt-layout-id_b665b6-7f"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_1d8731-ad">
                                  <div className="kt-inside-inner-col">
                                    <div
                                      className="gf_browser_chrome gform_wrapper gravity-theme"
                                      id="gform_wrapper_2"
                                    >
                                      <div className="gform_heading">
                                        <span className="gform_description" />
                                        <p className="gform_required_legend" />
                                      </div>
                                      <form
                                        method="post"
                                        encType="multipart/form-data"
                                        id="gform_2"
                                        action="/contact/"
                                        noValidate=""
                                      >
                                        <div className="gform_body gform-body">
                                          <div
                                            id="gform_fields_2"
                                            className="gform_fields top_label form_sublabel_below description_below"
                                          >
                                            <div
                                              id="field_2_1"
                                              className="gfield gfield--width-half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_1"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_1"
                                              >
                                                Full Name
                                                <span className="gfield_required">
                                                  <span className="gfield_required gfield_required_asterisk">
                                                    *
                                                  </span>
                                                </span>
                                              </label>
                                              <div className="ginput_container ginput_container_text">
                                                <input
                                                  name="input_1"
                                                  id="input_2_1"
                                                  type="text"
                                                  defaultValue=""
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                />{" "}
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_7"
                                              className="gfield gfield--width-half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_7"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_7"
                                              >
                                                Email
                                                <span className="gfield_required">
                                                  <span className="gfield_required gfield_required_asterisk">
                                                    *
                                                  </span>
                                                </span>
                                              </label>
                                              <div className="ginput_container ginput_container_email">
                                                <input
                                                  name="input_7"
                                                  id="input_2_7"
                                                  type="email"
                                                  defaultValue=""
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                />
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_11"
                                              className="gfield gfield--width-half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_11"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_11"
                                              >
                                                Mobile Number
                                                <span className="gfield_required">
                                                  <span className="gfield_required gfield_required_asterisk">
                                                    *
                                                  </span>
                                                </span>
                                              </label>
                                              <div className="ginput_container ginput_container_text">
                                                <input
                                                  name="input_11"
                                                  id="input_2_11"
                                                  type="text"
                                                  defaultValue=""
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                />{" "}
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_9"
                                              className="gfield gfield--width-half field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_9"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_9"
                                              >
                                                Loan Type
                                              </label>
                                              <div className="ginput_container ginput_container_select">
                                                <select
                                                  name="input_9"
                                                  id="input_2_9"
                                                  className="large gfield_select"
                                                  aria-invalid="false"
                                                >
                                                  <option value="New Home Loan">
                                                    New Home Loan
                                                  </option>
                                                  <option value="Refinance Home Loan">
                                                    Refinance Home Loan
                                                  </option>
                                                  <option value="Buy an Investment Property">
                                                    Buy an Investment Property
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_6"
                                              className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_6"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_6"
                                              >
                                                Message
                                                <span className="gfield_required">
                                                  <span className="gfield_required gfield_required_asterisk">
                                                    *
                                                  </span>
                                                </span>
                                              </label>
                                              <div className="ginput_container ginput_container_textarea">
                                                <textarea
                                                  name="input_6"
                                                  id="input_2_6"
                                                  className="textarea small"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  rows={10}
                                                  cols={50}
                                                  defaultValue={""}
                                                />
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_12"
                                              className="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_12"
                                            >
                                              <label
                                                className="gfield_label"
                                                htmlFor="input_2_12"
                                              >
                                                Email
                                              </label>
                                              <div className="ginput_container">
                                                <input
                                                  name="input_12"
                                                  id="input_2_12"
                                                  type="text"
                                                  defaultValue=""
                                                  autoComplete="new-password"
                                                />
                                              </div>
                                              <div
                                                className="gfield_description"
                                                id="gfield_description_2_12"
                                              >
                                                This field is for validation
                                                purposes and should be left
                                                unchanged.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="gform_footer top_label">
                                          {" "}
                                          <input
                                            type="submit"
                                            id="gform_submit_button_2"
                                            className="gform_button button"
                                            defaultValue="Submit"
                                            // onclick='if(window["gf_submitting_2"]){return false;}  if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  '
                                            // onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_2"]){return false;} if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  jQuery("#gform_2").trigger("submit",[true]); }'
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="is_submit_2"
                                            defaultValue={1}
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_submit"
                                            defaultValue={2}
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_unique_id"
                                            defaultValue=""
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="state_2"
                                            defaultValue="WyJbXSIsImYwMmZlZWI5YWQzMzNmNWEzYWFiOTEyN2M2NWJiMGYyIl0="
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_target_page_number_2"
                                            id="gform_target_page_number_2"
                                            defaultValue={0}
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_source_page_number_2"
                                            id="gform_source_page_number_2"
                                            defaultValue={1}
                                          />
                                          <input
                                            type="hidden"
                                            name="gform_field_values"
                                            defaultValue=""
                                          />
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wp-block-kadence-column inner-column-2 kadence-column_9f10cd-83">
                        <div className="kt-inside-inner-col">
                          <div className="wp-block-kadence-rowlayout alignnone">
                            <div
                              id="kt-layout-id_9259d0-6b"
                              className="kt-row-layout-inner kt-layout-id_9259d0-6b"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_c08293-7a">
                                  <div className="kt-inside-inner-col">
                                    <div className="wp-block-image">
                                      <figure className="aligncenter size-large is-resized">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          src="http://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/lowratehomeloan-logo.svg"
                                          alt="low rate home loan logo"
                                          className="wp-image-4604"
                                          width={198}
                                          height={155}
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wp-block-kadence-rowlayout alignnone contact">
                            <div
                              id="kt-layout-id_168bda-5d"
                              className="kt-row-layout-inner kt-row-has-bg kt-layout-id_168bda-5d has-theme-palette-2-background-color"
                            >
                              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div className="wp-block-kadence-column inner-column-1 kadence-column_43fd48-5b">
                                  <div className="kt-inside-inner-col">
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_11ddfe-d8"
                                        className="kt-row-layout-inner kt-layout-id_11ddfe-d8"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_834c48-4e Address">
                                            <div className="kt-inside-inner-col">
                                              <div
                                                className="wp-block-kadence-icon kt-svg-icons kt-svg-icons_d0f19c-51 alignnone"
                                                style={{ textAlign: "left" }}
                                              >
                                                <div className="kt-svg-style-default kt-svg-icon-wrap kt-svg-item-0">
                                                  <div
                                                    style={{
                                                      display: "inline-flex",
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      color:
                                                        "var(--global-palette9)",
                                                    }}
                                                    className="kt-svg-icon kt-svg-icon-fe_phone"
                                                  >
                                                    <svg
                                                      style={{
                                                        display: "inline-block",
                                                        verticalAlign: "middle",
                                                      }}
                                                      viewBox="0 0 24 24"
                                                      height={18}
                                                      width={18}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      strokeWidth={3}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              <h6
                                                className="kt-adv-heading_f85df4-15 white-bold wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading_f85df4-15"
                                              >
                                                PHONE
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_209cb7-04"
                                        className="kt-row-layout-inner kt-layout-id_209cb7-04"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_c102d0-4c">
                                            <div className="kt-inside-inner-col">
                                              <p>
                                                <a href="tel:7064 5204">
                                                  03 7064 5204
                                                </a>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_d69051-7f"
                                        className="kt-row-layout-inner kt-layout-id_d69051-7f"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_81284c-d4 Address">
                                            <div className="kt-inside-inner-col">
                                              <div
                                                className="wp-block-kadence-icon kt-svg-icons kt-svg-icons_ba0aae-f3 alignnone"
                                                style={{ textAlign: "left" }}
                                              >
                                                <div className="kt-svg-style-default kt-svg-icon-wrap kt-svg-item-0">
                                                  <div
                                                    style={{
                                                      display: "inline-flex",
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      color:
                                                        "var(--global-palette9)",
                                                    }}
                                                    className="kt-svg-icon kt-svg-icon-fe_mail"
                                                  >
                                                    <svg
                                                      style={{
                                                        display: "inline-block",
                                                        verticalAlign: "middle",
                                                      }}
                                                      viewBox="0 0 24 24"
                                                      height={18}
                                                      width={18}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      strokeWidth={3}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                      <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              <h6
                                                className="kt-adv-heading_a24781-ff white-bold wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading_a24781-ff"
                                              >
                                                Email
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_28a01c-5c"
                                        className="kt-row-layout-inner kt-layout-id_28a01c-5c"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_a12781-1a">
                                            <div className="kt-inside-inner-col">
                                              <p className="footer-email">
                                                info@lowratehomeloan.com.au
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_e851b5-4c"
                                        className="kt-row-layout-inner kt-layout-id_e851b5-4c"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_35573c-64 Address">
                                            <div className="kt-inside-inner-col">
                                              <div
                                                className="wp-block-kadence-icon kt-svg-icons kt-svg-icons_76d90b-55 alignnone"
                                                style={{ textAlign: "left" }}
                                              >
                                                <div className="kt-svg-style-default kt-svg-icon-wrap kt-svg-item-0">
                                                  <div
                                                    style={{
                                                      display: "inline-flex",
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      color:
                                                        "var(--global-palette9)",
                                                    }}
                                                    className="kt-svg-icon kt-svg-icon-fe_user"
                                                  >
                                                    <svg
                                                      style={{
                                                        display: "inline-block",
                                                        verticalAlign: "middle",
                                                      }}
                                                      viewBox="0 0 24 24"
                                                      height={18}
                                                      width={18}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      strokeWidth={3}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                      <circle
                                                        cx={12}
                                                        cy={7}
                                                        r={4}
                                                      />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              <h6
                                                className="kt-adv-heading_8cdc36-52 white-bold wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading_8cdc36-52"
                                              >
                                                Get Social
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_1847ff-f8"
                                        className="kt-row-layout-inner kt-layout-id_1847ff-f8"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_4520b6-43">
                                            <div className="kt-inside-inner-col">
                                              <ul className="is-nowrap is-layout-flex wp-container-1 wp-block-social-links alignleft has-icon-color is-style-logos-only">
                                                <li
                                                  style={{ color: "#ffffff" }}
                                                  className="wp-social-link wp-social-link-facebook wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.facebook.com/melbournemortgagebrokers"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
                                                    </svg>
                                                    <span className="wp-block-social-link-label screen-reader-text">
                                                      Facebook
                                                    </span>
                                                  </a>
                                                </li>
                                                <li
                                                  style={{ color: "#ffffff" }}
                                                  className="wp-social-link wp-social-link-instagram wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.instagram.com/lowratehomeloan/"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" />
                                                    </svg>
                                                    <span className="wp-block-social-link-label screen-reader-text">
                                                      Instagram
                                                    </span>
                                                  </a>
                                                </li>
                                                <li
                                                  style={{ color: "#ffffff" }}
                                                  className="wp-social-link wp-social-link-linkedin wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.linkedin.com/company/low-rate-home-loan/"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width={24}
                                                      height={24}
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                                                    </svg>
                                                    <span className="wp-block-social-link-label screen-reader-text">
                                                      LinkedIn
                                                    </span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_f36653-91"
                                        className="kt-row-layout-inner kt-layout-id_f36653-91"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_7bbdfa-34 Address">
                                            <div className="kt-inside-inner-col">
                                              <div
                                                className="wp-block-kadence-icon kt-svg-icons kt-svg-icons_ac34c6-fe alignnone"
                                                style={{ textAlign: "left" }}
                                              >
                                                <div className="kt-svg-style-default kt-svg-icon-wrap kt-svg-item-0">
                                                  <div
                                                    style={{
                                                      display: "inline-flex",
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      color:
                                                        "var(--global-palette9)",
                                                    }}
                                                    className="kt-svg-icon kt-svg-icon-fe_home"
                                                  >
                                                    <svg
                                                      style={{
                                                        display: "inline-block",
                                                        verticalAlign: "middle",
                                                      }}
                                                      viewBox="0 0 24 24"
                                                      height={18}
                                                      width={18}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      strokeWidth={3}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                      <polyline points="9 22 9 12 15 12 15 22" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              <h6
                                                className="kt-adv-heading_a1dc6d-68 white-bold wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading_a1dc6d-68"
                                              >
                                                Address
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wp-block-kadence-rowlayout alignnone">
                                      <div
                                        id="kt-layout-id_2c1eb5-3d"
                                        className="kt-row-layout-inner kt-layout-id_2c1eb5-3d"
                                      >
                                        <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                          <div className="wp-block-kadence-column inner-column-1 kadence-column_4517a9-ac">
                                            <div className="kt-inside-inner-col">
                                              <p className="has-theme-palette-9-color has-text-color">
                                                501/35 Wilson St, South Yarra
                                                VIC 3141
                                                <br />
                                                87 Treloar Lane, Pakenham VIC
                                                3810
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
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="kb-row-layout-wrap kb-row-layout-id1786_f1cfc2-83 alignnone wp-block-kadence-rowlayout">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top kb-theme-content-width">
            <div className="wp-block-kadence-column kadence-column1786_640566-79 inner-column-1">
              <div className="kt-inside-inner-col">
                <h6
                  className="kt-adv-heading1786_aabdf7-1d wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                  data-kb-block="kb-adv-heading1786_aabdf7-1d"
                >
                  FAQs
                </h6>
                <h2
                  className="kt-adv-heading1786_beddb7-18 wp-block-kadence-advancedheading"
                  data-kb-block="kb-adv-heading1786_beddb7-18"
                >
                  Frequently Asked Questions
                </h2>
                <p className="has-text-align-center">
                  {" "}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t<style>\n#wpsm_accordion_1713 .wpsm_panel-heading{\n\tpadding:0px !important;\n}\n#wpsm_accordion_1713 .wpsm_panel-title {\n\tmargin:0px !important; \n\ttext-transform:none !important;\n\tline-height: 1 !important;\n}\n#wpsm_accordion_1713 .wpsm_panel-title a{\n\ttext-decoration:none;\n\toverflow:hidden;\n\tdisplay:block;\n\tpadding:0px;\n\tfont-size: 18px !important;\n\tfont-family: 0 !important;\n\tcolor:#0e0e0e !important;\n\tborder-bottom:0px !important;\n}\n\n#wpsm_accordion_1713 .wpsm_panel-title a:focus {\noutline: 0px !important;\n}\n\n#wpsm_accordion_1713 .wpsm_panel-title a:hover, #wpsm_accordion_1713 .wpsm_panel-title a:focus {\n\tcolor:#0e0e0e !important;\n}\n#wpsm_accordion_1713 .acc-a{\n\tcolor: #0e0e0e !important;\n\tbackground-color:#ffffff !important;\n\tborder-color: #ddd;\n}\n#wpsm_accordion_1713 .wpsm_panel-default > .wpsm_panel-heading{\n\tcolor: #0e0e0e !important;\n\tbackground-color: #ffffff !important;\n\tborder-color: #ffffff !important;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n}\n#wpsm_accordion_1713 .wpsm_panel-default {\n\t\tborder:0px solid transparent !important;\n\t}\n#wpsm_accordion_1713 {\n\tmargin-bottom: 20px;\n\toverflow: hidden;\n\tfloat: none;\n\twidth: 100%;\n\tdisplay: block;\n}\n#wpsm_accordion_1713 .ac_title_class{\n\tdisplay: block;\n\tpadding-top: 12px;\n\tpadding-bottom: 12px;\n\tpadding-left: 15px;\n\tpadding-right: 15px;\n}\n#wpsm_accordion_1713  .wpsm_panel {\n\toverflow:hidden;\n\t-webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, .05);\n\tbox-shadow: 0 0px 0px rgba(0, 0, 0, .05);\n\t\t\tborder-radius: 0px;\n\t}\n#wpsm_accordion_1713  .wpsm_panel + .wpsm_panel {\n\t\tmargin-top: 0px;\n\t}\n#wpsm_accordion_1713  .wpsm_panel-body{\n\tbackground-color: !important;\n\tcolor:#0e0e0e !important;\n\tborder-top-color: #ffffff !important;\n\tfont-size:16px !important;\n\tfont-family: 0 !important;\n\toverflow: hidden;\n\t\tborder: 2px solid transparent !important;\n\t}\n\n#wpsm_accordion_1713 .ac_open_cl_icon{\n\tbackground-color:#ffffff !important;\n\tcolor: #0e0e0e !important;\n\tfloat:right !important;\n\tpadding-top: 12px !important;\n\tpadding-bottom: 12px !important;\n\tline-height: 1.0 !important;\n\tpadding-left: 15px !important;\n\tpadding-right: 15px !important;\n\tdisplay: inline-block !important;\n}\n\n\t\t\t #wpsm_accordion_1713 .wpsm_panel-heading {\n\t\t\t\tbackground-image: url(https://lowratehomeloan.com.au/wp-content/plugins/responsive-accordion-and-collapse/img/style-soft.png);\n\t\t\t\tbackground-position: 0 0;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t}\n\t\t\t#wpsm_accordion_1713 .ac_open_cl_icon{\n\t\t\t\tbackground-image: url(https://lowratehomeloan.com.au/wp-content/plugins/responsive-accordion-and-collapse/img/style-soft.png);\n\t\t\t\tbackground-position: 0 0;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t}\n\t\t\t",
                    }}
                  />
                </p>
                <div className="wpsm_panel-group" id="wpsm_accordion_1713">
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className=""
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse1"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-minus" />
                          <span className="ac_title_class">
                            Is it better to go through a mortgage broker in
                            Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse1"
                      className="wpsm_panel-collapse collapse in"
                    >
                      <div className="wpsm_panel-body">
                        There's no easy answer to this question. It depends on
                        your individual circumstances and what you're looking
                        for in a mortgage broker. If you're not sure what you
                        want or need, then going through a mortgage broker may
                        be a good idea.They can help you compare different loan
                        products and find the one that most suitable for your
                        needs. However, if you're confident about what you want
                        and don't need help comparing different loans, then
                        going directly to a lender may be a better option.
                        Whichever route you choose, make sure you do your
                        research and shop around to get a better outcome.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse2"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            What is a mortgage broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse2"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        A mortgage broker is a professional who works with
                        people to help them find the better mortgage loan for
                        their needs. Most lenders do not work directly with
                        consumers, but instead work through brokers. They
                        typically have access to a large number of lenders and
                        can therefore offer borrowers a wide range of options,
                        including different types of mortgages and refinance
                        loans. Brokers may also be able to offer advice about
                        how much money you will need for a down payment, which
                        can help you qualify for the loan. Finally, they can
                        also assist you in getting pre-approved for your
                        mortgage so that you know exactly what type of home you
                        are buying before going into contract negotiations with
                        the seller. If you are thinking of purchasing a home or
                        refinancing your current mortgage, working with a
                        mortgage broker may be a good option for you. Low Rate
                        Home Loan can help you compare different loan options
                        and find the product that accommodates your needs. Be
                        sure to shop around and compare different brokers before
                        choosing one to work with. Ask them about their
                        experience, fees, and the types of loans they typically
                        work with so that you can be sure they are a good fit
                        for you.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse3"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            What does a mortgage broker do?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse3"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        A mortgage broker is a person who helps people take out
                        mortgages. They will help you find the better mortgage
                        for you, and they can also help you with things like
                        refinancing your home or changing your loan terms. A
                        good mortgage broker will always have your best
                        interests in mind. There are many different types of
                        brokers, including banks and brokers. If you are looking
                        for a new mortgage, it might be a good idea to work with
                        a broker so that you can get the better product that
                        suits you’re circumstances. However, there are many
                        factors to consider when choosing a mortgage broker, so
                        be sure to do your research before making any decisions.
                        Mortgage brokers play an important role in the home
                        buying process. Whether you're looking to purchase your
                        first home or investment property, or you're interested
                        in refinancing an existing mortgage, a broker can help
                        you navigate the sometimes-complex world of home
                        financing. A mortgage broker is basically a middleman
                        between you and the lender. After you fill out a loan
                        application with a broker, they will then shop around to
                        various lenders on your behalf in order to get you the
                        better interest rate and terms possible. Mortgage
                        brokers are required by law to disclose all fees upfront
                        so there are no surprises later on down the road. While
                        working with a mortgage broker can save you time and
                        effort, it's important to remember that they are not
                        always going to get you a good loan product. It's still
                        in your best interest to do your research and shop
                        around for loans on your own before deciding what to do.
                        If you're in the market for a new mortgage, whether it's
                        your first home or an investment property, working with
                        a reputable mortgage broker can help make the process
                        smoother. Just remember to carefully consider all of
                        your options before signing any loan documents!{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse4"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Pros and cons of using a mortgage broker in
                            Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse4"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are a number of pros and cons to using a mortgage
                        broker in Australia. Some of the pros include access to
                        a wider range of lenders, the ability to negotiate on
                        behalf of the borrower, and potentially lower interest
                        rates. Some of the cons include higher fees, less
                        control over the loan process, and the potential for
                        borrower confusion. Ultimately, it is up to the borrower
                        to decide whether or not using a mortgage broker is the
                        right decision for their situation. What questions
                        should you ask a mortgage broker? 1. How long have you
                        been working as a mortgage broker? 2. What is your
                        experience in the Australian mortgage market? 3. What
                        lenders do you work with? 4. What are your thoughts on
                        the current state of the Australian mortgage market? 5.
                        What are the pros and cons of using a mortgage broker?
                        6. How much will it cost me to use your services? 7.
                        What are the benefits of using a mortgage broker? 8. How
                        can I be sure that I am getting the right product for my
                        needs? 9. What should I do if I am not happy with the
                        service, I receive from my mortgage broker?{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse5"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Is it better to get a mortgage from a bank or broker
                            in Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse5"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are many consumers who prefer to get a mortgage
                        from a bank in Australia. However, there are some
                        advantages and disadvantages to consider. Here, we will
                        discuss both aspects of the issue and let you know which
                        option is better for you. First, let’s talk about the
                        advantages of getting a mortgage from a bank. One of the
                        main reasons that people choose to go with banks is that
                        they can get a lower interest rate when compared to
                        other options. Banks have been around for a long time,
                        so they have reliable and trustworthy reputations that
                        borrowers like investors trust. Additionally, when it
                        comes to paperwork and documentation, banks also make
                        things smoother because their lending process is
                        well-established and streamlined. This makes the process
                        less time consuming and more convenient for borrowers.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse6"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Why choose a mortgage broker over a bank?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse6"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are several reasons why you might choose to work
                        with a mortgage broker rather than a bank. Here are some
                        of the most common reasons: 1. Mortgage brokers have
                        access to a wider range of lenders and products. This
                        means that they can shop around and find multiple
                        products that meets your needs. Instead of being limited
                        to the products offered by just one bank. 2. Mortgage
                        brokers are usually more sufficient, which means they’re
                        not tied to any one lender. This gives them more
                        flexibility to find a loan that suits your individual
                        needs and circumstances. 3. Mortgage brokers are
                        typically knowledgeable in the home loan market. They
                        can provide you with better advice and guidance
                        throughout the process, from finding the right loan to
                        signing the final paperwork. 4. Mortgage brokers can
                        help you avoid common pitfalls in the home loan process,
                        such as being offered a higher interest rate than
                        necessary or having to pay unnecessary fees and charges.
                        In short, they’ll work hard to make sure you get a
                        better outcome for your needs. So if you’re looking for
                        knowledge and guidance when it comes to securing a home
                        loan, rather than simply walking into your nearest bank
                        branch, then a mortgage broker could be the right option
                        for you. If this sounds like something that interests
                        you, get in touch with a Low Rate Home Loan your local
                        mortgage broker today to learn more about their services
                        and find out what we could do for you.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse7"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Do mortgage brokers charge a fee? How much does a
                            mortgage broker cost?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse7"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        When you ask this question, the answer may not be
                        straightforward. Mortgage brokers in Melbourne charge a
                        fee for their services, although it differs depending on
                        the company and the type of mortgage offered. Some
                        companies do charge a transaction fee if your loan is
                        processed and approved, while others don't. Others may
                        offer discounted rates to entice more borrowers or may
                        pass on additional charges added by banks that are
                        beneficial to the borrower. Income-driven mortgages are
                        also available as an alternative to fixed interest rates
                        with potential savings in both interest payments and tax
                        deductions. So if you're looking for a good deal on a
                        mortgage broker in Melbourne, search online first. We do
                        not charge any mortgage broking service fees. The
                        advantages of using a mortgage broker There are many
                        advantages to using a mortgage broker when you’re buying
                        a home. Here are just a few: Matching service: Mortgage
                        brokers provide borrowers with access to the entire
                        lending marketplace, which means they can find lenders
                        and loan products that match your needs. In contrast,
                        most consumers only have access to the small number of
                        loans offered by their bank or credit union. Finance
                        Knowledge: A good mortgage broker has years of
                        experience working with different lenders and can help
                        borrowers navigate the complexities associated with
                        various types of loans. They also know when changes in
                        interest rates make it worthwhile for borrowers to
                        refinance their mortgages. Correct process: Unlike
                        applying for a mortgage directly through a lender, going
                        through a mortgage broker is generally a smoother
                        process. Mortgage brokers handle most of the paperwork
                        and legwork involved in securing a loan, which can be a
                        big help for busy borrowers. Potential savings: Mortgage
                        brokers typically have access to wholesale interest
                        rates, which are lower than the rates available to
                        consumers who go directly to lenders. That means
                        borrowers who use a mortgage broker may be able to save
                        money on their loan. These are just a few of the
                        advantages that come with using a mortgage broker. If
                        you’re considering buying a home, working with a
                        mortgage broker is a great way to make sure you get
                        multiple loan products to choose from for your needs.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse8"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Why use a mortgage broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse8"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        Many people are uncomfortable dealing with large sums of
                        money and being in charge of making all the decisions
                        when it comes to buying a home. However, having your
                        mortgage through a broker can help relieve some of that
                        stress by acting as a middleman between you and the
                        lender. Mortgage brokers have access to many lenders and
                        loan products that you may not be able to find on your
                        own. They also have more knowledge in finance, so they
                        can help you pick a loan that fits your financial
                        situation, including negotiating better rates or terms
                        than what you might be able to get yourself. And since
                        mortgage brokers make their living from helping people
                        like you purchase homes, they typically work for without
                        any costs for their clients and aren't paid unless a the
                        loan application is approved and settled.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse9"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            What makes Low Rate Home Loan Mortgage Broker
                            different?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse9"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        Low Rate Home Loan Mortgage Broker is different from
                        other lenders because we offer a wide range of refinance
                        options and loan products to choose from. Whether you
                        are looking for a low interest rate home mortgage or
                        need assistance in finding the better refinance option,
                        our dedicated team will be happy to help you find the
                        ideal solution that meets your needs and fits within
                        your budget. We understand that making the decision
                        about taking on additional debt can be overwhelming, so
                        our goal is to make it as simple and convenient as
                        possible by providing you with all of the information
                        you need up front so that you can make an informed
                        decision. At Low Rate Home Loan Mortgage Broker, we
                        focus on building long-term relationships with our
                        clients so that we can help you achieve your goals and
                        navigate the often complicated process of refinancing or
                        purchasing a home. Whether you are looking to purchase
                        your first home, trade up to a larger property, or
                        transition into retirement, our team is here for you
                        every step of the way. So why not contact us today and
                        see how we can help you find the right mortgage solution
                        for your needs?
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse10"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            What happens in my first meeting with Mortgage
                            Broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse10"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        I had just graduated from college and was in the process
                        of buying my first home when I met with a mortgage
                        broker. I wasn't quite sure what to expect, and I was
                        definitely nervous about the whole thing, but my broker
                        assured me that he would be able to help me find a loan
                        that would fit my needs. Over the course of our meeting,
                        we discussed several different types of loans and how
                        each one worked. We also talked about things like
                        interest rates and payment options, and we looked at
                        some sample monthly payments so that I could get an idea
                        of what to expect once my loan went into effect. In the
                        end, it turned out to be a lot simpler than I had
                        imagined, and I am grateful for all of the help that my
                        mortgage broker provided me. If you are looking to buy a
                        home and aren't quite sure how to find the right loan,
                        then we would highly recommend meeting with a mortgage
                        broker. They can provide you with all of the information
                        and guidance that you need in order to make smart
                        decisions about your finances. And they will be there
                        for you throughout the entire process, answering any
                        questions that come up along the way so that you feel
                        confident and comfortable in your purchase decision.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse11"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus" />
                          <span className="ac_title_class">
                            Does a Broker just help me get to settlement or do
                            they provide an ongoing service?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse11"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        At Low Rate Home Loan our brokers will help you with
                        settlement and they will provide you ongoing services
                        without any costs. If you're not sure what type of
                        broker is right for you, speak to a financial planner or
                        investment advisor who can recommend someone based on
                        your unique needs. Whatever option you choose, working
                        with a professional will ensure that you get the most
                        out of your investments.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
