import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";
import { ReputableLenders } from "../../components/ReputableLenders";
import { FeatureServicesProvides } from "../../components/FeatureServicesProvides";
import { Faq } from "../../components/Faq";
import { ContactForm } from "../../components/ContactForm";

export default function Page(props) {
  return (
    <>
      <PageTitle title="Gift Card Terms & Condition" />
      <FeaturedTop />

      {/* Manual 2
sec and map, Manual */}
      {/* 1107 to 1138 */}

      <div className="setstyle"></div>

      {/* <ReputableLenders /> */}
      {/* <FeatureServicesProvides /> */}

      {/* Tips & Advice / Manual  */}
      {/* FAQ Tips / Manual */}
      {/* 1250-1345 */}

      <div className="setstyle"></div>
      <div className="wp-block-kadence-rowlayout alignnone">
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
                  $500 Myer &amp; Coles Gift Voucher Subject to following terms
                  and conditions:
                </h2>
                <ol>
                  <li>
                    Your application for finance must be submitted to the
                    recommended lender by August 31<sup>st</sup> 2023.
                  </li>
                  <li>
                    Your $500 Myer &amp; Coles Gift Voucher is payable within 60
                    days of settlement of your new loan.
                  </li>
                  <li>
                    Your new loan amount must exceed $300,000 to obtain Gift
                    Voucher.
                  </li>
                  <li>Limit of 1 gift card per loan transaction</li>
                  <li>
                    If applicant(s) refinance their loan with another lender or
                    broker within 24 months of settlement, a fee of $1000 is
                    payable to Melbourne Low Rate Home Loan.
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
    </>
  );
}
