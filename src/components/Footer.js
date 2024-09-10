"use client";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Navbar from "./../components/NavBar";

// import { deleteTodo } from "@/app/api/todoList/route";
// import kadenceConfig from "./../../../kadenceConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Footer({ data, update }) {
  // const todoArray = data ? JSON?.parse(data) : [];
  const router = useRouter();

  function do_resize() {
    var width = jQuery(".wpsm_panel .wpsm_panel-body iframe").width();
    var height = jQuery(".wpsm_panel .wpsm_panel-body iframe").height();

    var toggleSize = true;
    jQuery("iframe").animate(
      {
        width: toggleSize ? width : 640,
        height: toggleSize ? height : 360,
      },
      250
    );

    toggleSize = !toggleSize;
  }

  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="site-footer-wrap">
        <div
          className="site-top-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_top"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-top-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-top-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area widget-area site-footer-focus-item footer-widget1 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="sidebar-widgets-footer1"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="block-10" className="widget widget_block">
                        <div className="wp-block-kadence-rowlayout alignnone footer-menu">
                          <div
                            id="kt-layout-id_4f5afc-b9"
                            className="kt-row-layout-inner kt-layout-id_4f5afc-b9"
                          >
                            <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-none kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-equal">
                              <div className="wp-block-kadence-column inner-column-1 kadence-column_c3e9cc-58">
                                <div className="kt-inside-inner-col">
                                  <h6
                                    className="kt-adv-heading_42ba09-29 wp-block-kadence-advancedheading"
                                    data-kb-block="kb-adv-heading_42ba09-29"
                                  >
                                    Home Loan
                                  </h6>

                                  <p>
                                    <a
                                      href="/buy-a-new-home"
                                      data-type="page"
                                      data-id="1635"
                                    >
                                      Buy a new Home
                                    </a>
                                    <br />
                                    <a href="/refinance-home-loan">
                                      Refinance home loan
                                    </a>
                                    <br />
                                    <a href="/buy-investment-property">
                                      Buy investment property
                                    </a>
                                    <br />
                                    <a href="/compare-rates">Compare rates</a>
                                  </p>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column inner-column-2 kadence-column_6da1a1-5f">
                                <div className="kt-inside-inner-col">
                                  <h6
                                    className="kt-adv-heading_12a820-91 wp-block-kadence-advancedheading"
                                    data-kb-block="kb-adv-heading_12a820-91"
                                  >
                                    About
                                  </h6>

                                  <p>
                                    <Link
                                      href="/privacy-policy"
                                      data-type="page"
                                      data-id="3"
                                    >
                                      Privacy Policy
                                    </Link>
                                    <br />
                                    <Link
                                      href="/faqs"
                                      data-type="page"
                                      data-id="4525"
                                    >
                                      FAQ's
                                    </Link>
                                    <br />
                                    {/* <Link
                                      href="/blog"
                                      data-type="page"
                                      data-id="1955"
                                    >
                                      {" "}
                                      Blog
                                    </Link>
                                    <br /> */}
                                    <Link
                                      href="/compliments-and-concerns"
                                      data-type="page"
                                      data-id="4512"
                                    >
                                      Compliments &amp; Concerns
                                    </Link>
                                    <br />
                                    <Link
                                      href="/gift-card-terms-condition"
                                      data-type="page"
                                      data-id="4217"
                                    >
                                      Reward Terms &amp; Conditions
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-middle-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_middle"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-middle-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-middle-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area widget-area site-footer-focus-item footer-widget2 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="sidebar-widgets-footer2"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="block-8" className="widget widget_block">
                        <div className="wp-block-kadence-column inner-column-1 kadence-column_11a6dd-cf">
                          <div className="kt-inside-inner-col">
                            <h5
                              className="kt-adv-heading_483c56-70 wp-block-kadence-advancedheading has-theme-palette-2-color has-text-color"
                              data-kb-block="kb-adv-heading_483c56-70"
                            >
                              Join our happy clients across Australia
                            </h5>
                          </div>
                        </div>
                      </section>
                      <section id="block-7" className="widget widget_block">
                        <div className="wp-block-kadence-rowlayout alignnone footer-suburbs">
                          <div
                            id="kt-layout-id_212744-6e"
                            className="kt-row-layout-inner kt-layout-id_212744-6e"
                          >
                            <div className="kt-row-column-wrap kt-has-4-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-two-grid">
                              <div className="wp-block-kadence-column inner-column-1 kadence-column_3d25e0-92">
                                <div className="kt-inside-inner-col">
                                  <p className="has-text-align-left">
                                    <Link href="/mortgage-broker-altona">
                                      Altona
                                    </Link>
                                    <br />
                                    <Link
                                      href="/mortgage-broker-berwick/"
                                      data-type="page"
                                      data-id="4546"
                                    >
                                      Berwick
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-burwood">
                                      Burwood
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-caroline-springs">
                                      Caroline Springs
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-clyde">
                                      Clyde
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-craigieburn">
                                      Craigieburn
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-cranbourne">
                                      Cranbourne
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-dandenong">
                                      Dandenong
                                    </Link>
                                  </p>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column inner-column-2 kadence-column_7332ef-10">
                                <div className="kt-inside-inner-col">
                                  <p className="has-text-align-left">
                                    <Link href="/mortgage-broker-fitzroy">
                                      Fitzroy
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-footscray">
                                      Footscray
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-glen-waverley">
                                      Glen Waverley
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-glen-waverley">
                                      Hampton Park
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-hoppers-crossing">
                                      Hoppers Crossing
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-keysborough">
                                      Keysborough
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-laverton">
                                      Laverton
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-mitcham">
                                      Mitcham
                                    </Link>
                                  </p>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column inner-column-3 kadence-column_616dbe-16">
                                <div className="kt-inside-inner-col">
                                  <p className="has-text-align-left">
                                    <Link href="/mortgage-broker-mornington-peninsula">
                                      Mornington Peninsula
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-mount-waverley">
                                      Mount Waverley
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-pakenham">
                                      Pakenham
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-pakenham">
                                      Ringwood
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-rockbank">
                                      Rockbank
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-scoresby">
                                      Scoresby
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-south-yarra">
                                      South Yarra
                                    </Link>
                                    {/* <br /> */}
                                    {/* <Link href="/mortgage-broker-south-yarra"> */}
                                    {/* WA & QLD */}
                                    {/* </Link> */}
                                  </p>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column inner-column-4 kadence-column_c1298d-ed">
                                <div className="kt-inside-inner-col">
                                  <p>
                                    <Link href="/mortgage-broker-springvale">
                                      Springvale
                                    </Link>
                                    <br />
                                    <Link href="/mortgage-broker-tarneit">
                                      Tarneit
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-werribee">
                                      Werribee
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-wheelers-hill">
                                      Wheelers Hill
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-williams-landing">
                                      Williams Landing
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-wyndham-vale">
                                      Wyndham Vale
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-sydney-nsw">
                                      Sydney NSW
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-perth">
                                      Perth WA
                                    </Link>

                                    <br />
                                    <Link href="/mortgage-broker-brisbane">
                                      Brisbane, QLD
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        id="block-6"
                        className="widget widget_block widget_text"
                      >
                        <p className="has-text-align-center">
                          ABN- 44650773489 | ACN- 650773489 | Credit
                          representative details: Australia Low Rate Home Loan
                          Pty Ltd:
                          <br />
                          Credit Representative Number: 535162 is authorised
                          under Australian Credit Licence Number 389328.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-bottom-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-fullwidth site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_bottom"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-4 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-bottom-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area site-info site-footer-focus-item content-align-right content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="kadence_customizer_footer_html"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <div className="footer-html inner-link-style-normal">
                        <div className="footer-html-inner">
                          <p>
                            &copy; 2024 Low Rate Home Loan. All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-footer-bottom-section-2 site-footer-section footer-section-inner-items-0"></div>
                <div className="site-footer-bottom-section-3 site-footer-section footer-section-inner-items-0"></div>
                <div className="site-footer-bottom-section-4 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area widget-area site-footer-focus-item footer-widget3 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="sidebar-widgets-footer3"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="text-12" className="widget widget_text">
                        <div className="textwidget">
                          <p>
                            {/* <Link href={""}> Talk to Us</Link> */}
                            <Link href="/privacy-policy">Privacy Policy</Link> 
                            | 
                            <Link href="/disclaimer">Disclaimer</Link>  |
                            Website by Tripty
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
