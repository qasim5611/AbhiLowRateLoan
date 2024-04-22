import React from "react";

export function PageTitle({ title }) {
  return (
    <section className="entry-hero page-hero-section entry-hero-layout-fullwidth">
      <div className="entry-hero-container-inner">
        <div className="hero-section-overlay" />
        <div className="hero-container site-container">
          <header className="entry-header page-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
            <h1 className="entry-title">{title && title}</h1>{" "}
          </header>
        </div>
      </div>
    </section>
  );
}
