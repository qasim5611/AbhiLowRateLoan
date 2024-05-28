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
      <PageTitle title="Compliments and Concerns" />
      <FeaturedTop />

      {/* Manual 2
sec and map, Manual */}
      {/* 1107 to 1138 */}

      <div className="setstyle">
        <>
          <div className="wp-block-kadence-rowlayout alignnone">
            <div
              id="kt-layout-id_e92bef-18"
              className="kt-row-layout-inner kt-layout-id_e92bef-18"
            >
              <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                <div className="wp-block-kadence-column inner-column-1 kadence-column_029320-d5">
                  <div className="kt-inside-inner-col">
                    <p>
                      We always work hard to build strong and lasting
                      relationships with our valued customers. By listening to
                      your feedback, not only can we address any immediate
                      concerns you may have, we will also continually improve
                      our products and services.
                    </p>
                    <p>
                      We know there are times when you may wish to compliment us
                      on something we have done well and other times when you
                      may wish to tell us we have not met your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-kadence-rowlayout alignnone">
            <div
              id="kt-layout-id_c2e10e-9b"
              className="kt-row-layout-inner kt-layout-id_c2e10e-9b"
            >
              <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-widest kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                <div className="wp-block-kadence-column inner-column-1 kadence-column_a3869b-8d">
                  <div className="kt-inside-inner-col">
                    <p>
                      <strong>Compliments</strong>
                    </p>
                    <p>
                      Our representatives are always delighted to know that they
                      have succeeded in making your experience a pleasant and
                      successful one. If one of our representatives has provided
                      you with exceptional service in any way, please let us
                      know using the details below, so that we can further
                      encourage them via this feedback process.
                    </p>
                    <p>
                      <strong>Concerns</strong>
                    </p>
                    <p>
                      If, for any reason, you do not feel that you have received
                      the highest standard of care from us, we likewise
                      encourage you to share this with us. We have developed a
                      process that we believe makes it easy for you to tell us
                      of your concerns and for them to be addressed quickly and
                      fairly.
                    </p>
                    <p>
                      If you choose to contact us by mail or email
                      (info@scoresbymortgagebroker.com.au), please make sure you
                      provide as much detail as possible about your complaint.
                    </p>
                    <p>
                      Online:&nbsp;
                      <a href="http://scoresbymortgagebroker.com.au/">
                        http://scoresbymortgagebroker.com.au/
                      </a>
                    </p>
                    <p>
                      Email:&nbsp;
                      <a href="mailto:info@scoresbymortgagebroker.com.au">
                        info@scoresbymortgagebroker.com.au
                      </a>
                    </p>
                    <p>
                      Phone:&nbsp;<a href="tel:0370645204">03 70645204</a>
                    </p>
                    <p />
                    <p />
                    <p>
                      <strong>Need an update on your complaint</strong>
                    </p>
                    <p>
                      If you have lodged a complaint with us, you can contact us
                      at any time to ask for an update on its status. Contact us
                      through any of the methods listed above and please be sure
                      to refer to your earlier communication so that we can
                      respond effectively.
                    </p>
                  </div>
                </div>
                <div className="wp-block-kadence-column inner-column-2 kadence-column_18ad59-1b">
                  <div className="kt-inside-inner-col">
                    <p>
                      <strong>Resolution</strong>
                    </p>
                    <p>
                      We will write to you to acknowledge your complaint within
                      24 hours to ensure we treat you fairly and will work to
                      resolve your complaint as soon as possible. In the rare
                      event, we are still investigating your complaint after 30
                      days we will write to you to explain why and to let you
                      know when we expect to have completed our investigation.
                    </p>
                    <p>
                      When we have completed our investigation, we will write to
                      let you know the outcome and the reasons for our decision.
                    </p>
                    <p>
                      <strong>Taking it further</strong>
                    </p>
                    <p>
                      We hope that you will be satisfied with how we deal with
                      your complaint. However, if your concerns remain
                      unresolved, or you have not heard from us within 30 days,
                      then you can have your complaint heard by an independent
                      party, the Australian Financial Complaints Authority:
                    </p>
                    <p>
                      Online:&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="http://www.afca.org.au/">www.afca.org.au</a>
                      <br />
                      Email: &nbsp;&nbsp;&nbsp; &nbsp;
                      <a href="mailto:info@afca.org.au">info@afca.org.au</a>
                      <br />
                      Phone:&nbsp;&nbsp;&nbsp; 1800 931 678 (free call)
                      <br />
                      Mail:&nbsp; &nbsp; &nbsp; &nbsp; Australian Financial
                      Complaints Authority
                      <br />
                      GPO Box 3, Melbourne VIC 3001
                    </p>
                    <p>
                      Time limits may apply to complain to AFCA and so you
                      should act promptly or otherwise consult the AFCA website
                      to find out if or when the time limit relevant to your
                      circumstances expires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      <ContactForm />
    </>
  );
}
