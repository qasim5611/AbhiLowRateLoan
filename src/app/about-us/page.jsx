"use client";
import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FeaturedTop } from "./../../components/FeaturedTop";
import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import { Hardwork } from "../../components/Hardwork";
import { ContactForm } from "../../components/ContactForm";
import { Testimonial } from "../../components/Testimonial";
import { getAboutusBanner } from "./../../redux/slices/globalSlice";
export default function AboutUs(props) {
  // const [record2, setrecord2] = useState([]);
  const [record2, setrecord2] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await dispatch(getAboutusBanner()); // Adjust the endpoint as needed
        // const data = await resp.json();

        // console.log("data", data);
        setrecord2(resp?.payload?.data?.data || []); // Make sure to handle the structure of your response
      } catch (error) {
        console.error("Error fetching data:", error);
        // console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div id="inner-wrap" className="wrap hfeed kt-clear">
        <section className="entry-hero page-hero-section entry-hero-layout-fullwidth">
          <div className="entry-hero-container-inner">
            <div className="hero-section-overlay" />
            <div className="hero-container site-container">
              <header className="entry-header page-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                <h1 className="entry-title">About Us</h1>{" "}
              </header>
              {/* .entry-header */}
            </div>
          </div>
        </section>
        {/* .entry-hero */}
        <div id="primary" className="content-area haha">
          <div className="content-container site-container">
            <main id="main" className="site-main" role="main">
              <div className="content-wrap">
                <article
                  id="post-1438"
                  className="entry content-bg single-entry post-1438 page type-page status-publish hentry"
                >
                  <div className="entry-content-wrap">
                    <div className="entry-content single-content">
                      <FeaturedTop />
                      <div className="wp-block-kadence-rowlayout alignnone">
                        <div
                          id="kt-layout-id_3062cd-ac"
                          className="kt-row-layout-inner kt-layout-id_3062cd-ac"
                        >
                          <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-wider kt-v-gutter-default kt-row-valign-middle kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row  kt-custom-first-width-40  kt-custom-second-width-60 kb-theme-content-width">
                            <div className="wp-block-kadence-column inner-column-1 kadence-column_ae6c83-d2">
                              <div className="kt-inside-inner-col">
                                <p>
                                  Regardless of whether you are a first-time
                                  home buyer, upgrading to your next house,
                                  interested in real estate investing, or
                                  looking to refinance and pay off your existing
                                  home loan faster.
                                  <br />
                                  We make it happen.
                                </p>
                                <p>
                                  No one like paying more than necessary, so we
                                  compare and select from our panel of over 53+
                                  lenders to discover the best loan for your
                                  specific needs and circumstances.
                                </p>
                                <p>
                                  Our mortgage brokers have a wealth of
                                  knowledge and excellent communication skills
                                  to take the stress out of your finance
                                  journey.
                                </p>
                                <p>
                                  We assist you with completing the form,
                                  properly assembling it with your supporting
                                  materials, and submitting it to your preferred
                                  lender.
                                </p>
                                <p>
                                  No matter what stage you are at, get in touch
                                  with us, and we would be pleased to assist
                                  you. This is an obligation FREE service.
                                </p>
                              </div>
                            </div>
                            <div className="wp-block-kadence-column inner-column-2 kadence-column_5f521d-62">
                              <div className="kt-inside-inner-col">
                                <figure className="wp-block-image size-large">
                                  {record2 && record2.length > 0 ? (
                                    <>
                                      {record2.map((itm, index) => {
                                        return (
                                          <img
                                            key={index} // Add a key to each element in the list
                                            decoding="async"
                                            loading="lazy"
                                            width={1024}
                                            height={768}
                                            src={itm?.image_url}
                                            alt="low rate home loan pakenham office"
                                          />
                                        );
                                      })}
                                    </>
                                  ) : null}
                                  {/* <img
                                    decoding="async"
                                    loading="lazy"
                                    width={1024}
                                    height={768}
                                    src="/inside2023/low-rate-home-loan-pakenham-office-1024x768.webp"
                                    alt="low rate home loan pakenham office"
                                    className="wp-image-4651"
                                    srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/low-rate-home-loan-pakenham-office-1024x768.webp 1024w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/low-rate-home-loan-pakenham-office-300x225.webp 300w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/low-rate-home-loan-pakenham-office-768x576.webp 768w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2023/01/low-rate-home-loan-pakenham-office.webp 1200w"
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                  /> */}
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-_39f2b3-3d">
                        <div className="kt-block-spacer kt-block-spacer-halign-center">
                          <hr className="kt-divider" />
                        </div>
                      </div>
                      <div className="wp-block-kadence-rowlayout alignnone">
                        <div
                          id="kt-layout-id_cc06fd-95"
                          className="kt-row-layout-inner kt-layout-id_cc06fd-95"
                        >
                          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                            <div className="wp-block-kadence-column inner-column-1 kadence-column_47d971-ad">
                              <div className="kt-inside-inner-col">
                                <div className="wp-block-kadence-rowlayout alignnone">
                                  <div
                                    id="kt-layout-id_98a54e-ea"
                                    className="kt-row-layout-inner kt-layout-id_98a54e-ea"
                                  >
                                    <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-right-golden kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                                      <div className="wp-block-kadence-column inner-column-1 kadence-column_99fb17-4e">
                                        <div className="kt-inside-inner-col">
                                          <h6
                                            className="kt-adv-heading_91b839-e6 wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                                            data-kb-block="kb-adv-heading_91b839-e6"
                                          >
                                            Featured Services
                                          </h6>
                                          <h2
                                            className="kt-adv-heading_031d95-49 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_031d95-49"
                                          >
                                            How can we help?
                                          </h2>
                                        </div>
                                      </div>
                                      <div className="wp-block-kadence-column inner-column-2 kadence-column_10a375-55">
                                        <div className="kt-inside-inner-col" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wp-block-kadence-rowlayout alignnone">
                                  <div
                                    id="kt-layout-id_ecdd9d-a7"
                                    className="kt-row-layout-inner kt-layout-id_ecdd9d-a7"
                                  >
                                    <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-widest kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                                      <div className="wp-block-kadence-column inner-column-1 kadence-column_70d0da-8b">
                                        <div className="kt-inside-inner-col">
                                          <h5
                                            className="kt-adv-heading_a52462-7b wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_a52462-7b"
                                          >
                                            Get the right home loan for your
                                            needs
                                          </h5>
                                          <p>
                                            Get the right home loan for your
                                            needs
                                            <br />
                                            We work with a range of customers,
                                            from first home buyers, homeowners
                                            looking to upgrade, investors with
                                            extensive property portfolios. We
                                            help you get the right home loan for
                                            your needs.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_7d8bf6-93 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_7d8bf6-93"
                                          >
                                            Get good interest rates
                                          </h5>
                                          <p>
                                            We’re able to provide a good rate of
                                            interest-based on the strength of
                                            your application.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_3eadfa-ff wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_3eadfa-ff"
                                          >
                                            Get the right process
                                          </h5>
                                          <p>
                                            We ensure that our valuable
                                            customers are informed about the
                                            process of their application in all
                                            stages.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_072777-ff wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_072777-ff"
                                          >
                                            You can trust us
                                          </h5>
                                          <p>
                                            We are committed to providing you as
                                            lending solution that aligns with
                                            your needs and requirements.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_68c2c9-01 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_68c2c9-01"
                                          >
                                            We provide post-settlement service
                                          </h5>
                                          <p>
                                            Our post-settlement team is there to
                                            help and guide you throughout the
                                            period of your home loan. Not only
                                            can we answer all your
                                            post-settlement queries, however we
                                            also assist you make changes,
                                            additions, and amendments to your
                                            loan type.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_f42603-48 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_f42603-48"
                                          >
                                            Australia-wide services
                                          </h5>
                                          <p>
                                            Low Rate Home Loan will assist you
                                            with your lending scenario whether
                                            you are looking to purchase a
                                            property close by or interstate.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_21911f-7e wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_21911f-7e"
                                          >
                                            We act in your best interests
                                          </h5>
                                          <p>
                                            You can sit back and relax knowing
                                            that we are legally needed to act in
                                            your best interests; whereas a
                                            lender has no legal obligation to
                                            try and do so.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="wp-block-kadence-column inner-column-2 kadence-column_ebf966-7c">
                                        <div className="kt-inside-inner-col">
                                          <h5
                                            className="kt-adv-heading_ab9b9d-8a wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_ab9b9d-8a"
                                          >
                                            We put you first
                                          </h5>
                                          <p>
                                            We are very focused on our service
                                            standards for both new and existing
                                            clients. We also ensure that you are
                                            informed at every stage of the loan
                                            process including a post settlement
                                            follow up.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_3729dc-ca wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_3729dc-ca"
                                          >
                                            Ongoing Support and Updates
                                          </h5>
                                          <p>
                                            Once the loan has been settled, we
                                            don’t believe that our work is done
                                            and we are active in making sure our
                                            clients have a point of contact and
                                            are able to get information from us
                                            as required.
                                            <br />
                                            <br />
                                            When the time comes to review the
                                            next phase of your investment
                                            strategy we are on hand to help with
                                            whatever is required.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_b3ebfc-3c wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_b3ebfc-3c"
                                          >
                                            We aren’t owned by a bank
                                          </h5>
                                          <p>
                                            As your mortgage broker our aim is
                                            to provide relevant information
                                            about your home loan, and make
                                            recommendations to suit your
                                            financial home loan needs.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_d90874-80 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_d90874-80"
                                          >
                                            Access to more lenders
                                          </h5>
                                          <p>
                                            We have access to wide range of
                                            lenders and loan products
                                          </p>
                                          <h5
                                            className="kt-adv-heading_ca9baa-5b wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_ca9baa-5b"
                                          >
                                            Valuations and credit reports
                                          </h5>
                                          <p>
                                            Lenders in our panel will enable us
                                            to provide you with property
                                            valuation and we can arrange credit
                                            reports for you.
                                          </p>
                                          <h5
                                            className="kt-adv-heading_c786dd-83 wp-block-kadence-advancedheading"
                                            data-kb-block="kb-adv-heading_c786dd-83"
                                          >
                                            We work with a range of customers
                                          </h5>
                                          <p>
                                            We work with a range of customers,
                                            from first home buyers, homeowners
                                            looking to upgrade, investors with
                                            extensive property portfolios.
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
                </article>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Hardwork />
      <ContactForm />
    </>
  );
}
