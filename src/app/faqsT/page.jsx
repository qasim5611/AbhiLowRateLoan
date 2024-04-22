import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { FeaturedTop } from "../../components/FeaturedTop";
import { ReputableLenders } from "../../components/ReputableLenders";
import { FeatureServicesProvides } from "../../components/FeatureServicesProvides";
import { Faq } from "../../components/Faq";
import { ContactForm } from "../../components/ContactForm";

export default function Castlecovemortgagebrokers(props) {
  return (
    <>
      <PageTitle title="Bondi Junction Mortgage Brokers" />
      <FeaturedTop />

      {/* Manual 2
sec and map, Manual */}
      {/* 1107 to 1138 */}

      {/* <div className="setstyle"></div> */}

      <ReputableLenders />
      <FeatureServicesProvides />

      {/* Tips & Advice / Manual  */}
      {/* FAQ Tips / Manual */}
      {/* 1250-1345 */}

      {/* <div className="setstyle">
      </div> */}

      <Faq />
      <ContactForm />
    </>
  );
}
