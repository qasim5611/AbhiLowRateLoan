import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";
import { ReputableLenders } from "../../components/ReputableLenders";
import { FeatureServicesProvides } from "../../components/FeatureServicesProvides";
import { Faq } from "../../components/Faq";
import { ContactForm } from "../../components/ContactForm";
import { Testimonial } from "../../components/Testimonial";

export default function Page(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <PageTitle title="Reward Terms & Conditions" />
      <FeaturedTop />

      {/* Manual 2
sec and map, Manual */}
      {/* 1107 to 1138 */}

      {/* <div className="setstyle"></div> */}

      {/* <ReputableLenders /> */}
      {/* <FeatureServicesProvides /> */}

      {/* Tips & Advice / Manual  */}
      {/* FAQ Tips / Manual */}
      {/* 1250-1345 */}

      {/* <div className="setstyle"></div> */}
      <div
        className="wp-block-kadence-rowlayout alignnone"
        style={{ backgroundColor: "white" }}
      >
        <div
          id="kt-layout-id_4d314b-c6"
          className="kt-row-layout-inner kt-layout-id_4d314b-c6"
        >
          <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_cee221-7f">
              <div className="kt-inside-inner-col">
                <h2
                  className="kt-adv-heading_828586-b8 wp-block-kadence-advancedheading"
                  data-kb-block="kb-adv-heading_828586-b8"
                >
                  The reward of up to $2,000 is subject to the following terms
                  and conditions:
                </h2>
                <br />
                <ol>
                  <li style={{ marginBottom: "5px" }}>
                    To Receive $2,000 Bonus from us, your total loan amount must
                    be above One and a half Million dollars ($1,500,000).
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    To Receive $1,000 Bonus from us, your total loan amount must
                    be above seven hundred and fifty thousand dollars
                    ($750,000).
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    To Receive $500 Bonus from us, your total loan amount must
                    be above four hundred & fifty thousand dollars ($450,000).
                  </li>
                </ol>
                <h2
                  className="kt-adv-heading_828586-b8 wp-block-kadence-advancedheading"
                  data-kb-block="kb-adv-heading_828586-b8"
                >
                  Rebate Agreement Clauses:
                </h2>
                <br />
                <ol>
                  <li style={{ marginBottom: "5px" }}>
                    Your finance application must be submitted to the
                    recommended lender by 30th June 2025.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Your reward is payable within 60 days of settlement of your
                    new loan.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    If the borrower(s) refinances the loan(s) with another
                    lender or broker within 24 months from the settlement date,
                    any incentive or reward received from Melbourne Low Rate
                    Home Loan Pty Ltd shall be promptly refunded to Melbourne
                    Low Rate Home Loan Pty Ltd.
                  </li>

                  <li style={{ marginBottom: "5px" }}>
                    Loan amount for eligibility is based on NET loan balance
                    after factoring available redraw &/or linked offset account
                    balance. Melbourne Low Rate Home Loan Pty Ltd reserves the
                    right to amend or withdraw rebate offer upon confirmation
                    from Lender regarding NET settlement amount.
                  </li>
                </ol>
                <p>
                  For more information regarding the bonuses please contact us.
                </p>
              </div>
            </div>
            <div
              className="wp-block-kadence-column inner-column-2 kadence-column_faac02-72"
              style={{ display: "none" }}
            >
              <div className="kt-inside-inner-col" />
            </div>
          </div>
        </div>
      </div>

      {/* <Faq /> */}
      <ContactForm />
    </div>
  );
}
