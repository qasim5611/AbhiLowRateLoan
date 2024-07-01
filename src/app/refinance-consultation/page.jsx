"use client";
import { FeaturedTop } from "./../../components/FeaturedTop";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import React, { useState } from "react";
import "./refinance-consultation.css";
import Link from "next/link";
import Image from "next/image";
import { Email } from "@mui/icons-material";
// import { SendEmail } from "../api/mailer/route";
import { sendEmail } from "./../../lib/page";

// import { SendContactForm } from "./../../lib/api";

export default function RefinanceConsultation(props) {
  const [state, setState] = useState({
    loanAmount: "",
    interestRate: "",
    name: "",
    phone: "",
    email: "",
  });

  const errmsg = {
    color: "red",
    position: "relative",
    top: "11px",
  };

  const [showFirstForm, setshowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [showFourthForm, setShowFourthForm] = useState(false);
  const [showFifthForm, setShowFifthForm] = useState(false);

  const [loanAmountErr, setloanAmountErr] = useState("");
  const [interestRateErr, setinterestRateErr] = useState("");
  const [whyRefinnancingErr, setwhyRefinnancingErr] = useState("");
  const [nameErr, setnameErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");
  const [emailErr, setemailErr] = useState("");

  const [radioState, setRadioState] = useState({
    whyRefinnancing: "",
  });

  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
      console.log("state.loanAmount", state.loanAmount);
    }
  };

  const onChangeHandlerRadio = (e) => {
    setRadioState({ ...radioState, [e.target.name]: e.target.value });
  };

  const ClickForScndForm = (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      setshowFirstForm(false);
      setShowSecondForm(true);
      console.log("State", state);
    }
  };

  const ClickForThirdForm = (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      setshowFirstForm(false);
      setShowSecondForm(false);
      setShowThirdForm(true);
      console.log("State", state);
    }
  };

  const ClickForFourthForm = (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      setshowFirstForm(false);
      setShowSecondForm(false);
      setShowThirdForm(false);
      setShowFourthForm(true);
      console.log("radioState", radioState);
    }
  };

  const ClickForFifthForm = async (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      setshowFirstForm(false);
      setShowSecondForm(false);
      setShowThirdForm(false);
      // setShowFourthForm(true);
      console.log("radioState", radioState);
      console.log("State", state);

      let obj = {
        state,
        radioState,
      };
      // SendContactForm(obj);

      try {
        // const req = await SendEmail(state, radioState);
        const req = await sendEmail(
          "qasimtahir5611@gmail.com",
          "Refinance Consultation Form",
          obj
        );
        console.log("ok", req);
        if (req.data.status == "ok" || req.status == 200) {
          setshowFirstForm(false);
          setShowSecondForm(false);
          setShowThirdForm(false);
          setShowFourthForm(false);
          setShowFifthForm(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const ClickForSixthForm = async (e) => {
    e.preventDefault();
    var isFormvalid = validate();
    if (isFormvalid) {
      setshowFirstForm(false);
      setShowSecondForm(false);
      setShowThirdForm(false);
      setShowFourthForm(false);
      setShowFifthForm(true);
    }
  };
  const validate = () => {
    console.log("validate called");
    let isvalid = true;

    if (state.loanAmount.length == 0) {
      isvalid = false;
      setloanAmountErr("Required Field!");
      setinterestRateErr("");
      setwhyRefinnancingErr("");
      setnameErr("");
      setphoneErr("");
      setemailErr("");
    }
    //  else if (
    //   state.interestRate.length < 5 ||
    //   state.interestRate.length > 40 ||
    //   state.interestRate.length == 0
    // )
    //  {
    //   isvalid = false;
    //   setloanAmountErr("");
    //   setinterestRateErr("Required Field!");
    //   setwhyRefinnancingErr("");
    //   setnameErr("");
    //   setphoneErr("");
    //   setemailErr("");
    // } else if (state.whyRefinnancing.length == 0) {
    //   isvalid = false;
    //   setloanAmountErr("");
    //   setinterestRateErr("");
    //   setwhyRefinnancingErr("Required Field!");
    //   setnameErr("");
    //   setphoneErr("");
    //   setemailErr("");
    // } else if (state.name.length == 0) {
    //   isvalid = false;
    //   setloanAmountErr("");
    //   setinterestRateErr("");
    //   setwhyRefinnancingErr("");
    //   setnameErr("Required Field!");
    //   setphoneErr("");
    //   setemailErr("");
    // } else if (state.phone.length == 0) {
    //   isvalid = false;
    //   setloanAmountErr("");
    //   setinterestRateErr("");
    //   setwhyRefinnancingErr("");
    //   setnameErr("");
    //   setphoneErr("Required Field!");
    //   setemailErr("");
    // } else if (state.email.length == 0) {
    //   isvalid = false;
    //   setloanAmountErr("");
    //   setinterestRateErr("");
    //   setwhyRefinnancingErr("");
    //   setnameErr("");
    //   setphoneErr("");
    //   setemailErr("Required Field!");
    // }
    else {
      setloanAmountErr("");
      setinterestRateErr("");
      setwhyRefinnancingErr("");
      setnameErr("");
      setphoneErr("");
      setemailErr("");
    }

    return isvalid;
  };

  return (
    <div
      id="inner-wrap"
      className="wrap hfeed kt-clear"
      style={{ backgroundColor: "#00a651" }}
    >
      <section className="refinance-consultation">
        <div className="close-form">
          <Link href="/">
            <Image
              src="/pics/close-icon.webp"
              alt="cross icon"
              width={25}
              height={25}
            />
            {/* <img src="https://scoresbymortgagebroker.com.au/wp-content/themes/lowratehomeloan/images/close-icon.webp" /> */}
          </Link>
        </div>
        <div className="container get-started-form">
          <div
            className="gf_browser_chrome gform_wrapper gravity-theme"
            id="gform_wrapper_3"
            // style={{ display: "none" }}
          >
            <div id="gf_3" className="gform_anchor" tabIndex={-1} />
            <div className="gform_heading">
              <p className="gform_required_legend" />
            </div>
            <form
              method="post"
              encType="multipart/form-data"
              target="gform_ajax_frame_3"
              id="gform_3"
              action="/refinance-consultation/?preview_id=2080&preview_nonce=abd451fdb6&preview=true#gf_3"
              noValidate=""
            >
              <div className="gform_body gform-body">
                {showFirstForm === true ? (
                  <div>
                    <div id="gform_page_3_1" className="gform_page">
                      <div className="gform_page_fields">
                        <div
                          id="gform_fields_3"
                          className="gform_fields top_label form_sublabel_below description_below"
                        >
                          <div
                            id="field_3_1"
                            className="gfield gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"
                            data-js-reload="field_3_1"
                          >
                            <span>Lets Get started </span>
                          </div>
                          <div
                            id="field_3_3"
                            className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                            data-js-reload="field_3_3"
                          >
                            <label className="gfield_label" htmlFor="input_3_3">
                              What is your current loan amount?
                              <span className="gfield_required">
                                <span className="gfield_required gfield_required_asterisk">
                                  *
                                </span>
                              </span>
                            </label>
                            <div className="ginput_container ginput_container_number">
                              <input
                                name="loanAmount"
                                id="input_3_3"
                                type="number"
                                // step="any"
                                // defaultValue=""
                                className="medium"
                                // tabIndex={49}
                                placeholder="$"
                                // aria-required="true"
                                // aria-invalid="false"
                                onChange={onChangeHandler}
                              />
                            </div>
                            <center>
                              {loanAmountErr ? (
                                <div style={errmsg}>{loanAmountErr}</div>
                              ) : null}
                            </center>
                          </div>
                        </div>
                      </div>
                      <div className="gform_page_footer top_label">
                        <input
                          type="button"
                          id="gform_next_button_3_5"
                          className="gform_next_button button"
                          defaultValue="Next"
                          tabIndex={50}
                          onClick={ClickForScndForm}
                          // onclick='jQuery("#gform_target_page_number_3").val("2");  jQuery("#gform_3").trigger("submit",[true]); '
                          // onkeypress='if( event.keyCode == 13 ){ jQuery("#gform_target_page_number_3").val("2");  jQuery("#gform_3").trigger("submit",[true]); } '
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                {showSecondForm === true ? (
                  <div>
                    <div id="gform_page_3_2" className="gform_page">
                      <div className="gform_page_fields">
                        <div
                          id="gform_fields_3_2"
                          className="gform_fields top_label form_sublabel_below description_below"
                        >
                          <div
                            id="field_3_4"
                            className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                            data-js-reload="field_3_4"
                          >
                            <label className="gfield_label" htmlFor="input_3_4">
                              What is your current interest rate?
                              <span className="gfield_required">
                                <span className="gfield_required gfield_required_asterisk">
                                  *
                                </span>
                              </span>
                            </label>
                            <div className="ginput_container ginput_container_text">
                              <input
                                name="interestRate"
                                id="input_3_4"
                                type="text"
                                // defaultValue=""
                                className="medium"
                                tabIndex={51}
                                placeholder="%"
                                // aria-required="true"
                                // aria-invalid="false"
                                onChange={onChangeHandler}
                              />{" "}
                            </div>
                            <center>
                              {interestRateErr ? (
                                <div style={errmsg}>{interestRateErr}</div>
                              ) : null}
                            </center>
                          </div>
                        </div>
                      </div>
                      <div className="gform_page_footer top_label">
                        <input
                          type="button"
                          id="gform_previous_button_3_7"
                          className="gform_previous_button button"
                          defaultValue="Previous"
                          tabIndex={52}
                          onclick='jQuery("#gform_target_page_number_3").val("1");  jQuery("#gform_3").trigger("submit",[true]); '
                          onkeypress='if( event.keyCode == 13 ){ jQuery("#gform_target_page_number_3").val("1");  jQuery("#gform_3").trigger("submit",[true]); } '
                        />{" "}
                        <input
                          type="button"
                          id="gform_next_button_3_7"
                          className="gform_next_button button"
                          defaultValue="Next"
                          tabIndex={53}
                          onClick={ClickForThirdForm}
                          // onclick='jQuery("#gform_target_page_number_3").val("3");  jQuery("#gform_3").trigger("submit",[true]); '
                          onkeypress='if( event.keyCode == 13 ){ jQuery("#gform_target_page_number_3").val("3");  jQuery("#gform_3").trigger("submit",[true]); } '
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                {showThirdForm === true ? (
                  <div
                    id="gform_page_3_3"
                    className="gform_page"
                    // style={{ display: "none" }}
                  >
                    <div className="gform_page_fields">
                      <div
                        id="gform_fields_3_3"
                        className="gform_fields top_label form_sublabel_below description_below"
                      >
                        <fieldset
                          id="field_3_8"
                          className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_8"
                        >
                          <legend className="gfield_label">
                            Why are you refinancing?
                            <span className="gfield_required">
                              <span className="gfield_required gfield_required_asterisk">
                                *
                              </span>
                            </span>
                          </legend>
                          <div className="ginput_container ginput_container_radio">
                            <div className="gfield_radio" id="input_3_8">
                              <div className="gchoice gchoice_3_8_0">
                                <input
                                  className="gfield-choice-input"
                                  name="whyRefinnancing"
                                  type="radio"
                                  defaultValue="Decrease repayment"
                                  id="choice_3_8_0"
                                  onChange={onChangeHandlerRadio}
                                  tabIndex={54}
                                />
                                <label htmlFor="choice_3_8_0" id="label_3_8_0">
                                  <div className="img-lbl">
                                    <svg
                                      version="1.1"
                                      id="Capa_1"
                                      xmlns="https://www.w3.org/2000/svg"
                                      xmlnsXlink="https://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      width="80px"
                                      height="80px"
                                      viewBox="0 0 122.578 122.578"
                                      style={{
                                        enableBackground:
                                          "new 0 0 122.578 122.578",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M30.131,33.465v38.649h8.385V27.806L64.11,10.21l25.024,17.57v54.497c2.137-1.768,4.254-3.559,6.299-5.436 			c0.705-0.647,1.398-1.303,2.087-1.959V33.012l5.007,3.425l4.733-6.921L66.516,1.652L64.162,0l-2.399,1.65L42.937,14.536V7.977 			H32.384v13.785l-10.987,7.522l4.737,6.918L30.131,33.465z" />
                                          <path d="M65.832,71.18v-5.023c4.871-1.088,7.976-4.616,7.976-9.167c0-4.562-2.47-7.433-8.229-9.594 			c-3.879-1.551-5.124-2.465-5.124-3.758c0-1.486,1.327-2.37,3.549-2.37c2.77,0,4.644,0.872,5.762,1.394l1.245,0.572l1.797-6.121 			l-0.696-0.348c-1.848-0.923-3.771-1.441-5.994-1.607v-4.435h-5.731v4.796c-4.707,1.111-7.598,4.419-7.598,8.779 			c0,5.416,4.438,7.751,8.775,9.321c3.98,1.454,4.53,2.729,4.53,3.891c0,1.698-1.599,2.796-4.07,2.796 			c-2.277,0-4.787-0.71-6.886-1.947l-1.036-0.612l-1.796,6.246l0.567,0.378c1.703,1.136,4.467,1.96,7.229,2.181v4.629H65.832 			L65.832,71.18z" />
                                          <path d="M121.967,90.518c-0.225-2.721-2.227-4.836-5.163-7.176c-2.056-1.637-6.037-3.547-10.499-3.547 			c-3.775,0-9.246,1.368-13.893,7.877c-4.18,5.336-9.42,7.498-13.674,8.315c0.381-0.954,0.629-2.099,0.637-3.716 			c0.037-9.053-7.176-15.856-17.151-15.901L26.615,76.4c-3.342,0-6.631,0.986-9.404,2.771v-4.633H0.592v48.039H17.21v-5.104 			c0.628,0.31,1.493,0.938,1.493,0.938c2.861,1.578,7.295,3.516,11.818,3.516h32.713c28.18,0,47.635-15.787,54.69-23.607 			C120.035,95.981,122.218,93.562,121.967,90.518z M11.644,85.149H5.835v-5.81h5.809L11.644,85.149L11.644,85.149z M113.613,94.428 			c-6.537,7.246-24.529,21.69-50.379,21.69H30.521c-5.531,0-11.487-4.326-11.541-4.368c-0.51-0.376-1.117-0.568-1.729-0.568 			c-0.013,0-0.027,0.004-0.042,0.004V85.588c0.636,0.01,1.27-0.171,1.795-0.57l0.635-0.479c1.976-1.501,4.452-2.329,6.961-2.329 			l35.595-0.031c5.679,0.024,11.399,3.287,11.369,10.068c0,3.916-2.611,4.118-2.751,4.152H44.722c-1.604,0-2.904,1.301-2.904,2.904 			s1.3,2.903,2.904,2.903h27.692l1.543-0.004c4.348-0.001,15.295-1.028,23.074-11.008c0.025-0.034,0.053-0.069,0.076-0.104 			c2.585-3.642,5.68-5.488,9.196-5.488c3.175,0,5.889,1.494,6.88,2.283c2.91,2.318,2.991,3.078,2.993,3.108 			C116.186,91.576,114.316,93.648,113.613,94.428z" />
                                        </g>
                                      </g>
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                    </svg>{" "}
                                    <h3>Decrease repayment</h3>
                                  </div>
                                </label>
                              </div>

                              <div className="gchoice gchoice_3_8_1">
                                <input
                                  className="gfield-choice-input"
                                  name="whyRefinnancing"
                                  type="radio"
                                  defaultValue="Pay off loan faster"
                                  id="choice_3_8_1"
                                  // onchange="gformToggleRadioOther( this )"
                                  tabIndex={55}
                                  onChange={onChangeHandlerRadio}
                                />
                                <label htmlFor="choice_3_8_1" id="label_3_8_1">
                                  <div className="img-lbl">
                                    <svg
                                      version="1.1"
                                      id="Capa_1"
                                      xmlns="https://www.w3.org/2000/svg"
                                      xmlnsXlink="https://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      width="80px"
                                      height="80px"
                                      viewBox="0 0 122.578 122.578"
                                      style={{
                                        enableBackground:
                                          "new 0 0 122.578 122.578",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M30.131,33.465v38.649h8.385V27.806L64.11,10.21l25.024,17.57v54.497c2.137-1.768,4.254-3.559,6.299-5.436 			c0.705-0.647,1.398-1.303,2.087-1.959V33.012l5.007,3.425l4.733-6.921L66.516,1.652L64.162,0l-2.399,1.65L42.937,14.536V7.977 			H32.384v13.785l-10.987,7.522l4.737,6.918L30.131,33.465z" />
                                          <path d="M65.832,71.18v-5.023c4.871-1.088,7.976-4.616,7.976-9.167c0-4.562-2.47-7.433-8.229-9.594 			c-3.879-1.551-5.124-2.465-5.124-3.758c0-1.486,1.327-2.37,3.549-2.37c2.77,0,4.644,0.872,5.762,1.394l1.245,0.572l1.797-6.121 			l-0.696-0.348c-1.848-0.923-3.771-1.441-5.994-1.607v-4.435h-5.731v4.796c-4.707,1.111-7.598,4.419-7.598,8.779 			c0,5.416,4.438,7.751,8.775,9.321c3.98,1.454,4.53,2.729,4.53,3.891c0,1.698-1.599,2.796-4.07,2.796 			c-2.277,0-4.787-0.71-6.886-1.947l-1.036-0.612l-1.796,6.246l0.567,0.378c1.703,1.136,4.467,1.96,7.229,2.181v4.629H65.832 			L65.832,71.18z" />
                                          <path d="M121.967,90.518c-0.225-2.721-2.227-4.836-5.163-7.176c-2.056-1.637-6.037-3.547-10.499-3.547 			c-3.775,0-9.246,1.368-13.893,7.877c-4.18,5.336-9.42,7.498-13.674,8.315c0.381-0.954,0.629-2.099,0.637-3.716 			c0.037-9.053-7.176-15.856-17.151-15.901L26.615,76.4c-3.342,0-6.631,0.986-9.404,2.771v-4.633H0.592v48.039H17.21v-5.104 			c0.628,0.31,1.493,0.938,1.493,0.938c2.861,1.578,7.295,3.516,11.818,3.516h32.713c28.18,0,47.635-15.787,54.69-23.607 			C120.035,95.981,122.218,93.562,121.967,90.518z M11.644,85.149H5.835v-5.81h5.809L11.644,85.149L11.644,85.149z M113.613,94.428 			c-6.537,7.246-24.529,21.69-50.379,21.69H30.521c-5.531,0-11.487-4.326-11.541-4.368c-0.51-0.376-1.117-0.568-1.729-0.568 			c-0.013,0-0.027,0.004-0.042,0.004V85.588c0.636,0.01,1.27-0.171,1.795-0.57l0.635-0.479c1.976-1.501,4.452-2.329,6.961-2.329 			l35.595-0.031c5.679,0.024,11.399,3.287,11.369,10.068c0,3.916-2.611,4.118-2.751,4.152H44.722c-1.604,0-2.904,1.301-2.904,2.904 			s1.3,2.903,2.904,2.903h27.692l1.543-0.004c4.348-0.001,15.295-1.028,23.074-11.008c0.025-0.034,0.053-0.069,0.076-0.104 			c2.585-3.642,5.68-5.488,9.196-5.488c3.175,0,5.889,1.494,6.88,2.283c2.91,2.318,2.991,3.078,2.993,3.108 			C116.186,91.576,114.316,93.648,113.613,94.428z" />
                                        </g>
                                      </g>
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                    </svg>{" "}
                                    <h3>Pay off loan faster</h3>
                                  </div>
                                </label>
                              </div>
                              <div className="gchoice gchoice_3_8_2">
                                <input
                                  className="gfield-choice-input"
                                  name="whyRefinnancing"
                                  type="radio"
                                  defaultValue="Consolidate debt / get cash out"
                                  id="choice_3_8_2"
                                  // onchange="gformToggleRadioOther( this )"
                                  onChange={onChangeHandlerRadio}
                                  tabIndex={56}
                                />
                                <label htmlFor="choice_3_8_2" id="label_3_8_2">
                                  <div className="img-lbl">
                                    <svg
                                      version="1.1"
                                      id="Capa_1"
                                      xmlns="https://www.w3.org/2000/svg"
                                      xmlnsXlink="https://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      width="80px"
                                      height="80px"
                                      viewBox="0 0 122.578 122.578"
                                      style={{
                                        enableBackground:
                                          "new 0 0 122.578 122.578",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M30.131,33.465v38.649h8.385V27.806L64.11,10.21l25.024,17.57v54.497c2.137-1.768,4.254-3.559,6.299-5.436 			c0.705-0.647,1.398-1.303,2.087-1.959V33.012l5.007,3.425l4.733-6.921L66.516,1.652L64.162,0l-2.399,1.65L42.937,14.536V7.977 			H32.384v13.785l-10.987,7.522l4.737,6.918L30.131,33.465z" />
                                          <path d="M65.832,71.18v-5.023c4.871-1.088,7.976-4.616,7.976-9.167c0-4.562-2.47-7.433-8.229-9.594 			c-3.879-1.551-5.124-2.465-5.124-3.758c0-1.486,1.327-2.37,3.549-2.37c2.77,0,4.644,0.872,5.762,1.394l1.245,0.572l1.797-6.121 			l-0.696-0.348c-1.848-0.923-3.771-1.441-5.994-1.607v-4.435h-5.731v4.796c-4.707,1.111-7.598,4.419-7.598,8.779 			c0,5.416,4.438,7.751,8.775,9.321c3.98,1.454,4.53,2.729,4.53,3.891c0,1.698-1.599,2.796-4.07,2.796 			c-2.277,0-4.787-0.71-6.886-1.947l-1.036-0.612l-1.796,6.246l0.567,0.378c1.703,1.136,4.467,1.96,7.229,2.181v4.629H65.832 			L65.832,71.18z" />
                                          <path d="M121.967,90.518c-0.225-2.721-2.227-4.836-5.163-7.176c-2.056-1.637-6.037-3.547-10.499-3.547 			c-3.775,0-9.246,1.368-13.893,7.877c-4.18,5.336-9.42,7.498-13.674,8.315c0.381-0.954,0.629-2.099,0.637-3.716 			c0.037-9.053-7.176-15.856-17.151-15.901L26.615,76.4c-3.342,0-6.631,0.986-9.404,2.771v-4.633H0.592v48.039H17.21v-5.104 			c0.628,0.31,1.493,0.938,1.493,0.938c2.861,1.578,7.295,3.516,11.818,3.516h32.713c28.18,0,47.635-15.787,54.69-23.607 			C120.035,95.981,122.218,93.562,121.967,90.518z M11.644,85.149H5.835v-5.81h5.809L11.644,85.149L11.644,85.149z M113.613,94.428 			c-6.537,7.246-24.529,21.69-50.379,21.69H30.521c-5.531,0-11.487-4.326-11.541-4.368c-0.51-0.376-1.117-0.568-1.729-0.568 			c-0.013,0-0.027,0.004-0.042,0.004V85.588c0.636,0.01,1.27-0.171,1.795-0.57l0.635-0.479c1.976-1.501,4.452-2.329,6.961-2.329 			l35.595-0.031c5.679,0.024,11.399,3.287,11.369,10.068c0,3.916-2.611,4.118-2.751,4.152H44.722c-1.604,0-2.904,1.301-2.904,2.904 			s1.3,2.903,2.904,2.903h27.692l1.543-0.004c4.348-0.001,15.295-1.028,23.074-11.008c0.025-0.034,0.053-0.069,0.076-0.104 			c2.585-3.642,5.68-5.488,9.196-5.488c3.175,0,5.889,1.494,6.88,2.283c2.91,2.318,2.991,3.078,2.993,3.108 			C116.186,91.576,114.316,93.648,113.613,94.428z" />
                                        </g>
                                      </g>
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                      <g />
                                    </svg>{" "}
                                    <h3>Consolidate debt / get cash out</h3>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <center>
                              {whyRefinnancingErr ? (
                                <div style={errmsg}>{whyRefinnancingErr}</div>
                              ) : null}
                            </center>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="gform_page_footer top_label">
                      <input
                        type="button"
                        id="gform_previous_button_3_10"
                        className="gform_previous_button button"
                        defaultValue="Previous"
                        tabIndex={57}
                        // onClick={ClickForFourthForm}
                        // onclick='jQuery("#gform_target_page_number_3").val("2");  jQuery("#gform_3").trigger("submit",[true]); '
                        // onkeypress='if( event.keyCode == 13 ){ jQuery("#gform_target_page_number_3").val("2");  jQuery("#gform_3").trigger("submit",[true]); } '
                      />{" "}
                      <input
                        type="button"
                        id="gform_next_button_3_10"
                        className="gform_next_button button"
                        defaultValue="Next"
                        onClick={ClickForFourthForm}
                        tabIndex={58}
                        onclick='jQuery("#gform_target_page_number_3").val("4");  jQuery("#gform_3").trigger("submit",[true]); '
                        onkeypress='if( event.keyCode == 13 ){ jQuery("#gform_target_page_number_3").val("4");  jQuery("#gform_3").trigger("submit",[true]); } '
                      />
                    </div>
                  </div>
                ) : null}

                {showFourthForm === true ? (
                  <div
                    id="gform_page_3_4"
                    className="gform_page"
                    // style={{ display: "none" }}
                  >
                    <div className="gform_page_fields">
                      <div
                        id="gform_fields_3_4"
                        className="gform_fields top_label form_sublabel_below description_below"
                      >
                        <div
                          id="field_3_14"
                          className="gfield gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_14"
                        >
                          <p style={{ color: "white" }}>
                            Please provide us with some quick details about you.
                          </p>
                        </div>
                        <div
                          id="field_3_9"
                          className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_9"
                          style={{ textAlign: "center" }}
                        >
                          <label className="gfield_label" htmlFor="input_3_9">
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
                              id="input_3_9"
                              type="text"
                              defaultValue=""
                              className="large"
                              tabIndex={59}
                              aria-required="true"
                              aria-invalid="false"
                              onChange={onChangeHandler}
                            />{" "}
                          </div>
                          <center>
                            {nameErr ? (
                              <div style={errmsg}>{nameErr}</div>
                            ) : null}
                          </center>
                        </div>
                        <div
                          id="field_3_15"
                          className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_15"
                          style={{ textAlign: "center" }}
                        >
                          <label className="gfield_label" htmlFor="input_3_15">
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
                              id="input_3_15"
                              type="text"
                              defaultValue=""
                              className="large"
                              tabIndex={60}
                              aria-required="true"
                              aria-invalid="false"
                              onChange={onChangeHandler}
                            />{" "}
                          </div>
                          <center>
                            {phoneErr ? (
                              <div style={errmsg}>{phoneErr}</div>
                            ) : null}
                          </center>
                        </div>
                        <div
                          id="field_3_12"
                          className="gfield gfield--width-full gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_12"
                          style={{ textAlign: "center" }}
                        >
                          <label className="gfield_label" htmlFor="input_3_12">
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
                              id="input_3_12"
                              type="email"
                              defaultValue=""
                              className="large"
                              tabIndex={61}
                              aria-required="true"
                              aria-invalid="false"
                              onChange={onChangeHandler}
                            />
                          </div>
                          <center>
                            {emailErr ? (
                              <div style={errmsg}>{emailErr}</div>
                            ) : null}
                          </center>
                        </div>
                        <div
                          id="field_3_16"
                          className="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_16"
                        >
                          <label className="gfield_label" htmlFor="input_3_16">
                            Email
                          </label>
                          <div className="ginput_container">
                            <input
                              name="input_16"
                              id="input_3_16"
                              type="text"
                              defaultValue=""
                              autoComplete="new-password"
                            />
                          </div>
                          <div
                            className="gfield_description"
                            id="gfield_description_3_16"
                          >
                            This field is for validation purposes and should be
                            left unchanged.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gform_page_footer top_label">
                      <input
                        type="submit"
                        id="gform_previous_button_3"
                        className="gform_previous_button button"
                        defaultValue="Previous"
                        tabIndex={62}
                        onclick='if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  '
                        onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }'
                      />{" "}
                      <input
                        type="submit"
                        id="gform_submit_button_3"
                        className="gform_button button"
                        defaultValue="Submit"
                        tabIndex={63}
                        onClick={ClickForFifthForm}
                        // onclick='if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  '
                        // onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }'
                      />{" "}
                      <input
                        type="hidden"
                        name="gform_ajax"
                        defaultValue="form_id=3&title=&description=&tabindex=49"
                      />
                      <input
                        type="hidden"
                        className="gform_hidden"
                        name="is_submit_3"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        className="gform_hidden"
                        name="gform_submit"
                        defaultValue={3}
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
                        name="state_3"
                        defaultValue="WyJ7XCI4XCI6W1wiZTI5MzFlZmQ0YjA4OWU3MDEwZWFjMTliYzdiYjkxNjhcIixcImE0ZDJhYzQ1ZTgxMjIwMzgyODM1MjExMDM4YjJjZjYxXCIsXCJkMTU1MjMzZDMyZGJkMDAwMzMxNjMyNWFhNjkzOTRlYVwiXX0iLCI1ODFhYTcyOGE4ZTBhYWEzYTdlNTY3NGRkODM3MThiNiJd"
                      />
                      <input
                        type="hidden"
                        className="gform_hidden"
                        name="gform_target_page_number_3"
                        id="gform_target_page_number_3"
                        defaultValue={2}
                      />
                      <input
                        type="hidden"
                        className="gform_hidden"
                        name="gform_source_page_number_3"
                        id="gform_source_page_number_3"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="gform_field_values"
                        defaultValue=""
                      />
                    </div>
                  </div>
                ) : null}

                {showFifthForm === true ? (
                  <div
                    id="gform_page_3_4"
                    className="gform_page"
                    // style={{ display: "none" }}
                  >
                    <div className="gform_page_fields">
                      <div
                        id="gform_fields_3_4"
                        className="gform_fields top_label form_sublabel_below description_below"
                      >
                        <div
                          id="field_3_14"
                          className="gfield gfield--width-full gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"
                          data-js-reload="field_3_14"
                        >
                          <br />
                          <br />
                          <br />

                          <h3>Thank you for contacting us !</h3>
                          <br />
                          <h4>We will get in touch with you shortly.</h4>
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <iframe
            style={{ display: "none", width: 0, height: 0 }}
            src="about:blank"
            name="gform_ajax_frame_3"
            id="gform_ajax_frame_3"
            title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
          />
        </div>
      </section>
    </div>
  );
}
