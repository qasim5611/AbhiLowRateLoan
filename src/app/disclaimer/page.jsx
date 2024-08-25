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
    <>
      <PageTitle title="Disclaimer" />
      <FeaturedTop />

      <div
        style={{ padding: "24px" }}
        className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width"
      >
        <div className="wp-block-kadence-column inner-column-1 kadence-column_955b8e-1b">
          <div className="kt-inside-inner-col">
            <p>
              <strong>Disclaimer statement: </strong>Low Rate Home Loan website
              provides general information only and has been prepared without
              taking into account your objectives, financial situation or needs.
              We recommend that you consider whether it is appropriate for your
              circumstances and your full financial situation will need to be
              reviewed prior to acceptance of any offer or product. It does not
              constitute legal, tax or financial advice and you should always
              seek professional advice in relation to your individual
              circumstances. Subject to lenders terms and conditions, fees and
              charges and eligibility criteria apply.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}
