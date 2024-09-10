"use client";
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
      <PageTitle title="Thank You" />

      <div className="">
        <br />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontFamily: "'Ubuntu'",
            textAlign: "center",
          }}
          className="cardThankyou"
        >
          {" "}
          Thank you for contacting us! <br /> We will get in touch with you
          shortly.
        </p>
        <br />
      </div>
    </>
  );
}
