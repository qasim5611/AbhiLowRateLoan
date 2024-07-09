import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";
import { ReputableLenders } from "../../components/ReputableLenders";
import { FeatureServicesProvides } from "../../components/FeatureServicesProvides";
import { Faq } from "../../components/Faq";
import { ContactForm } from "../../components/ContactForm";

export default function Page(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <PageTitle title="Gift Card Terms & Condition" />
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
                  The reward of up to $2,000 is contingent upon adhering to the
                  following terms and conditions:
                </h2>
                <br />
                <ol>
                  <li>
                    Your application for finance must be submitted to the
                    recommended lender by December 31<sup>st</sup> 2023.
                  </li>
                  <li>
                    Your reward is payable within 60 days of settlement of your
                    new loan.
                  </li>
                  <li>
                    To Receive $2,000 Bonus from us your combined loan amount
                    must be above one million dollars ($1,000,000).
                  </li>
                  <li>
                    To Receive $1,000 Bonus from us your&nbsp; loan amount must
                    be above seven hundred and fifty thousand ($750,000).
                  </li>
                  <li>
                    To Receive $500 from us your loan amount must be above four
                    hundred &amp; fifty thousand dollars ($450,000).
                  </li>
                  <li>
                    In the event that the applicant(s) decide to refinance their
                    loan with another lender or broker within 24 months of
                    settlement, kindly note that the reward, graciously given to
                    you by us, will be payable to Melbourne Low Rate Home Loan.
                  </li>
                  <li>
                    For more information regarding the bonuses please contact
                    us.
                  </li>
                </ol>
              </div>
            </div>
            <div className="wp-block-kadence-column inner-column-2 kadence-column_faac02-72">
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
