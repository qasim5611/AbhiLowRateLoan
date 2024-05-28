import { FeaturedTop } from "@/../components/FeaturedTop";
import React from "react";
import { ContactForm } from "../../components/ContactForm";

export default function BuyNewHome(props) {
  return (
    <>
      <div id="inner-wrap" className="wrap hfeed kt-clear">
        <section className="entry-hero page-hero-section entry-hero-layout-fullwidth">
          <div className="entry-hero-container-inner">
            <div className="hero-section-overlay" />
            <div className="hero-container site-container">
              <header className="entry-header page-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                <h1 className="entry-title">Buy a new home</h1>{" "}
              </header>
              {/* .entry-header */}
            </div>
          </div>
        </section>
      </div>
      <FeaturedTop />

      <div id="primary" className="content-area">
        <div className="content-container site-container">
          <main id="main" className="site-main" role="main">
            <div className="content-wrap">
              <article
                id="post-1635"
                className="entry content-bg single-entry post-1635 page type-page status-publish hentry"
              >
                <div className="entry-content-wrap">
                  <div className="entry-content single-content">
                    <div className="wp-block-kadence-rowlayout alignnone">
                      <div
                        id="kt-layout-id_883348-97"
                        className="kt-row-layout-inner kt-layout-id_883348-97"
                      >
                        <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-right-golden kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row  kt-custom-first-width-40  kt-custom-second-width-60 kb-theme-content-width">
                          <div className="wp-block-kadence-column inner-column-1 kadence-column_7f16ed-a0">
                            <div className="kt-inside-inner-col">
                              <p>
                                Purchasing a new home can cause a wide range of
                                emotions. It can be daunting and very
                                challenging.
                                <br />
                                There are too many things to consider, including
                                how much you can afford, the type of house you
                                desire, and all those extra appointments you’ll
                                need to fit into your busy schedule.
                                <br />
                                <br />
                                Our mortgage brokers at Low Rate Home Loan can
                                help you with all aspects of the home loan
                                process
                                <br />
                                <br />
                                Establishing how much you can afford to borrow
                                and the options available to you.
                                <br />
                                <br />
                                Helping you apply for the Government’s First
                                Home Owners Grant if you are eligible.
                                <br />
                                <br />
                                Determining what fees/costs are involved
                                including stamp duty, legal fees, building and
                                pest inspections, property valuation and
                                lender´s mortgage insurance.
                                <br />
                                <br />
                                Finding what type of loan is right for you from
                                hundreds of different home loans from our wide
                                panel of lenders.
                                <br />
                                <br />
                                Completing all the necessary documents.
                                <br />
                                <br />
                                Running around for you, from pre-approval right
                                through to settlement of your new home so you
                                can spend more time looking for the right home.
                              </p>
                            </div>
                          </div>
                          <div className="wp-block-kadence-column inner-column-2 kadence-column_76524a-2a">
                            <div className="kt-inside-inner-col">
                              <figure className="wp-block-image size-large">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width={1024}
                                  height={683}
                                  src="first-home-buyer.webp"
                                  alt="03 7064 5204"
                                  className="wp-image-3970"
                                  // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/first-home-buyer-1024x683.webp 1024w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/first-home-buyer-300x200.webp 300w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/first-home-buyer-768x512.webp 768w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/first-home-buyer.webp 1200w"
                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                />
                              </figure>
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

      <ContactForm />
    </>
  );
}
