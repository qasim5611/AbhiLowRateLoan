"use client";
import React, { useState } from "react";
import { talkToUs } from "./../lib/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm(props) {
  const [radioState, setRadioState] = useState({
    loanType: "",
  });

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  });

  const [nameErr, setnameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");
  const [loanTypeErr, setloanTypeErr] = useState("");
  const [messageErr, setmessageErr] = useState("");

  const errmsg = {
    color: "red",
    position: "relative",
    top: "11px",
    fontSize: "13px",
  };
  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const SubmitForm = async (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      let obj = {
        state,
      };

      try {
        // const req = await SendEmail(state, radioState);
        const req = await talkToUs(
          "info@lowratehomeloan.com.au",
          "Talk-To-Us User Form",
          obj
        );
        console.log("ok", req);
        if (req.data.status == "ok" || req.status == 200) {
          toast.success("Form Send Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

            progress: undefined,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(state.email);
    console.log("isemailVer", isemailVer);

    let isvalid = true;

    if (!isemailVer) {
      isvalid = false;
      setemailErr("Your Email is not Correct!");
      setnameErr("");
      setphoneErr("");
      setloanTypeErr("");
      setmessageErr("");

      toast.error("Please Fill Form Correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
    } else if (
      state.name.length < 5 ||
      state.name.length > 40 ||
      state.name.length == 0
    ) {
      isvalid = false;
      setnameErr("Required Field!");
      setemailErr("");
      setphoneErr("");
      setloanTypeErr("");
      setmessageErr("");
      toast.error("Please Fill Form Correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
    } else if (
      state.phone.length < 5 ||
      state.phone.length > 40 ||
      state.phone.length == 0
    ) {
      isvalid = false;
      setnameErr("");
      setemailErr("");
      setphoneErr("Required Field!");
      setloanTypeErr("");
      setmessageErr("");
      toast.error("Please Fill Form Correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
    } else if (
      state.loanType.length < 5 ||
      state.loanType.length > 40 ||
      state.loanType.length == 0
    ) {
      isvalid = false;
      setnameErr("");
      setemailErr("");
      setphoneErr("");
      setloanTypeErr("Required Field!");
      setmessageErr("");
      toast.error("Please Fill Form Correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
    } else if (
      state.message.length < 5 ||
      state.message.length > 40 ||
      state.message.length == 0
    ) {
      isvalid = false;
      setnameErr("");
      setemailErr("");
      setphoneErr("");
      setloanTypeErr("");
      setmessageErr("Required Field!");
      toast.error("Please Fill Form Correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        progress: undefined,
      });
    } else {
      setnameErr("");
      setemailErr("");
      setphoneErr("");
      setloanTypeErr("");
      setmessageErr("");
    }

    return isvalid;
  };
  return (
    <>
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
                                        <span className="gform_description"></span>
                                        <p className="gform_required_legend"></p>
                                      </div>
                                      <form
                                        method="post"
                                        encType="multipart/form-data"
                                        id="gform_2"
                                        action="/"
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
                                                for="input_2_1"
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
                                                  name="name"
                                                  id="input_2_1"
                                                  type="text"
                                                  value={state.name}
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  onChange={onChangeHandler}
                                                />{" "}
                                              </div>
                                              <center>
                                                {nameErr ? (
                                                  <div style={errmsg}>
                                                    {nameErr}
                                                  </div>
                                                ) : null}
                                              </center>
                                            </div>
                                            <div
                                              id="field_2_7"
                                              className="gfield gfield--width-half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_7"
                                            >
                                              <label
                                                className="gfield_label"
                                                for="input_2_7"
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
                                                  name="email"
                                                  id="input_2_7"
                                                  type="email"
                                                  value={state.email}
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  onChange={onChangeHandler}
                                                />
                                              </div>
                                              <center>
                                                {emailErr ? (
                                                  <div style={errmsg}>
                                                    {emailErr}
                                                  </div>
                                                ) : null}
                                              </center>
                                            </div>
                                            <div
                                              id="field_2_11"
                                              className="gfield gfield--width-half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_11"
                                            >
                                              <label
                                                className="gfield_label"
                                                for="input_2_11"
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
                                                  name="phone"
                                                  id="input_2_11"
                                                  type="text"
                                                  value={state.phone}
                                                  className="large"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  onChange={onChangeHandler}
                                                />{" "}
                                              </div>
                                              <center>
                                                {phoneErr ? (
                                                  <div style={errmsg}>
                                                    {phoneErr}
                                                  </div>
                                                ) : null}
                                              </center>
                                            </div>
                                            <div
                                              id="field_2_9"
                                              className="gfield gfield--width-half field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_9"
                                            >
                                              <label
                                                className="gfield_label"
                                                for="input_2_9"
                                              >
                                                Loan Type
                                              </label>
                                              <div className="ginput_container ginput_container_select">
                                                <select
                                                  name="loanType"
                                                  id="input_2_9"
                                                  className="large gfield_select"
                                                  aria-invalid="false"
                                                  onChange={onChangeHandler}
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
                                              <center>
                                                {loanTypeErr ? (
                                                  <div style={errmsg}>
                                                    {loanTypeErr}
                                                  </div>
                                                ) : null}
                                              </center>
                                            </div>
                                            <div
                                              id="field_2_6"
                                              className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_6"
                                            >
                                              <label
                                                className="gfield_label"
                                                for="input_2_6"
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
                                                  name="message"
                                                  value={state.message}
                                                  onChange={onChangeHandler}
                                                  id="input_2_6"
                                                  className="textarea small"
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  rows="10"
                                                  cols="50"
                                                ></textarea>
                                              </div>
                                              <center>
                                                {messageErr ? (
                                                  <div style={errmsg}>
                                                    {messageErr}
                                                  </div>
                                                ) : null}
                                              </center>
                                            </div>
                                            <div
                                              id="field_2_12"
                                              className="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
                                              data-js-reload="field_2_12"
                                            >
                                              <label
                                                className="gfield_label"
                                                for="input_2_12"
                                              >
                                                Comments
                                              </label>
                                              <div className="ginput_container">
                                                <input
                                                  name="input_12"
                                                  id="input_2_12"
                                                  type="text"
                                                  value=""
                                                  autocomplete="new-password"
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
                                            value="Submit"
                                            onClick={SubmitForm}

                                            // onclick='if(window["gf_submitting_2"]){return false;}  if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  '
                                            // onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_2"]){return false;} if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  jQuery("#gform_2").trigger("submit",[true]); }'
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="is_submit_2"
                                            value="1"
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_submit"
                                            value="2"
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_unique_id"
                                            value=""
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="state_2"
                                            value="WyJbXSIsImYwMmZlZWI5YWQzMzNmNWEzYWFiOTEyN2M2NWJiMGYyIl0="
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_target_page_number_2"
                                            id="gform_target_page_number_2"
                                            value="0"
                                          />
                                          <input
                                            type="hidden"
                                            className="gform_hidden"
                                            name="gform_source_page_number_2"
                                            id="gform_source_page_number_2"
                                            value="1"
                                          />
                                          <input
                                            type="hidden"
                                            name="gform_field_values"
                                            value=""
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
                                          src="lowratehomeloan-logo.svg"
                                          alt="low rate home loan logo"
                                          className="wp-image-4604"
                                          width="198"
                                          height="155"
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
                                                style={{
                                                  textAlign: "left",
                                                }}
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
                                                      height="18"
                                                      width="18"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      stroke-width="3"
                                                      stroke-linecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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
                                                style={{
                                                  textAlign: "left",
                                                }}
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
                                                      height="18"
                                                      width="18"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      stroke-width="3"
                                                      stroke-linecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                      <polyline points="22,6 12,13 2,6"></polyline>
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
                                                style={{
                                                  textAlign: "left",
                                                }}
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
                                                      height="18"
                                                      width="18"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      stroke-width="3"
                                                      stroke-linecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                      <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                      ></circle>
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
                                              <ul className="is-nowrap is-layout-flex wp-container-5 wp-block-social-links alignleft has-icon-color is-style-logos-only">
                                                <li
                                                  style={{
                                                    color: "#ffffff",
                                                  }}
                                                  className="wp-social-link wp-social-link-facebook wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.facebook.com/melbournemortgagebrokers"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                                                    </svg>
                                                    <span className="wp-block-social-link-label screen-reader-text">
                                                      Facebook
                                                    </span>
                                                  </a>
                                                </li>

                                                <li
                                                  style={{
                                                    color: "#ffffff",
                                                  }}
                                                  className="wp-social-link wp-social-link-instagram wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.instagram.com/lowratehomeloan/"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                                                    </svg>
                                                    <span className="wp-block-social-link-label screen-reader-text">
                                                      Instagram
                                                    </span>
                                                  </a>
                                                </li>

                                                <li
                                                  style={{
                                                    color: "#ffffff",
                                                  }}
                                                  className="wp-social-link wp-social-link-linkedin wp-block-social-link"
                                                >
                                                  <a
                                                    href="https://www.linkedin.com/company/low-rate-home-loan/"
                                                    rel="noopener nofollow"
                                                    target="_blank"
                                                    className="wp-block-social-link-anchor"
                                                  >
                                                    <svg
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                      focusable="false"
                                                    >
                                                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
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
                                                style={{
                                                  textAlign: "left",
                                                }}
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
                                                      height="18"
                                                      width="18"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      stroke-width="3"
                                                      stroke-linecap="round"
                                                      strokeLinejoin="round"
                                                      aria-hidden="true"
                                                    >
                                                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
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
    </>
  );
}
