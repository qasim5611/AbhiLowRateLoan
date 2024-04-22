"use client";
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
      <PageTitle title="Mortgage Repayment Calculator" />
      <FeaturedTop />

      <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_8cff25-70"
          className="kt-row-layout-inner kt-layout-id_8cff25-70"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_47d971-ad">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-rowlayout alignnone">
                  <div
                    id="kt-layout-id_75806a-cf"
                    className="kt-row-layout-inner kt-layout-id_75806a-cf"
                  >
                    <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                      <div className="wp-block-kadence-column inner-column-1 kadence-column_99fb17-4e">
                        <div className="kt-inside-inner-col">
                          <h3
                            className="kt-adv-heading_0ae021-96 wp-block-kadence-advancedheading"
                            data-kb-block="kb-adv-heading_0ae021-96"
                          >
                            Calculate your estimated monthly home loan
                            repayments, or see how refinancing could help save
                            you money
                          </h3>
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

      <ContactForm />
    </>
  );
}
