"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServiceContent,
  getFeatureMedia,
} from "./../redux/slices/globalSlice";
import "./../../public/scrorsStyle.css";

export function FeatureServices(props) {
  let dispatch = useDispatch();
  const [record, setrecord] = useState([]);
  const [record1, setRecord1] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getServiceContent({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      console.log("getReputeableBanner", resp);
      // const images = resp?.payload?.data?.data || [];

      setrecord(resp?.payload?.data?.data);
      // setidtoUpdate(resp?.payload?.data?.data[0]._id);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await dispatch(
        getFeatureMedia({
          headers: {
            "Cache-Control": "no-cache",
          },
        })
      );
      const images = resp?.payload?.data?.images || [];
      setRecord1(images);

      // Initialize formData and loading state
      const initialFormData = {};
      const initialLoading = {};
      images.forEach((item, index) => {
        initialFormData[`tagline${index + 1}`] = item.tagline;
        initialFormData[`image${index + 1}`] = null;
        initialLoading[`loader${index + 1}`] = false;
      });
      setFormData(initialFormData);
      setLoading(initialLoading);
    };

    fetchData();
  }, [dispatch]);
  return (
    <>
      <div className="wp-block-kadence-rowlayout alignnone">
        <div
          id="kt-layout-id_ea3438-01"
          className="kt-row-layout-inner kt-layout-id_ea3438-01"
        >
          <div className="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
            <div className="wp-block-kadence-column inner-column-1 kadence-column_3f33e3-ab">
              <div className="kt-inside-inner-col">
                {record ? (
                  <>
                    {record.map((itm, index) => {
                      return (
                        <div
                          key={index}
                          className="wp-block-kadence-rowlayout alignnone"
                        >
                          <div
                            id="kt-layout-id_1b8602-fe"
                            className="kt-row-layout-inner kt-layout-id_1b8602-fe"
                          >
                            <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-right-golden kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                              <div className="wp-block-kadence-column inner-column-1 kadence-column_a77e3d-8b">
                                <div className="kt-inside-inner-col">
                                  <h6
                                    className="kt-adv-heading_1352da-42 wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                                    data-kb-block="kb-adv-heading_1352da-42"
                                  >
                                    Featured Services
                                  </h6>
                                  <h2
                                    className="kt-adv-heading_a350c1-14 wp-block-kadence-advancedheading"
                                    data-kb-block="kb-adv-heading_a350c1-14"
                                  >
                                    {itm?.tagline}
                                  </h2>
                                </div>
                              </div>
                              <div className="wp-block-kadence-column inner-column-2 kadence-column_325881-f2">
                                <div className="kt-inside-inner-col">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: itm.desc && itm.desc,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="wp-block-kadence-rowlayout alignnone">
                    <div
                      id="kt-layout-id_1b8602-fe"
                      className="kt-row-layout-inner kt-layout-id_1b8602-fe"
                    >
                      <div className="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-right-golden kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                        <div className="wp-block-kadence-column inner-column-1 kadence-column_a77e3d-8b">
                          <div className="kt-inside-inner-col">
                            <h6
                              className="kt-adv-heading_1352da-42 wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                              data-kb-block="kb-adv-heading_1352da-42"
                            >
                              Featured Services
                            </h6>
                            <h2
                              className="kt-adv-heading_a350c1-14 wp-block-kadence-advancedheading"
                              data-kb-block="kb-adv-heading_a350c1-14"
                            >
                              How can we help?
                            </h2>
                          </div>
                        </div>
                        <div className="wp-block-kadence-column inner-column-2 kadence-column_325881-f2">
                          <div className="kt-inside-inner-col">
                            <p>
                              Our dedicated Home Loan Specialists understand
                              that every client has unique needs, and a
                              ”one-size-fits-all” approach simply doesn’t work.
                              <br />
                              <br />
                              We take the time to get to know you and understand
                              your specific circumstances, collaborating closely
                              with both major banks and non-bank lenders.
                              <br />
                              <br />
                              With access to over 53 lenders, we are committed
                              to finding the perfect solution for you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="wp-block-kadence-rowlayout alignnone pos-button">
                  <div
                    id="kt-layout-id_911d7e-81"
                    className="kt-row-layout-inner kt-layout-id_911d7e-81"
                  >
                    <div className="kt-row-column-wrap kt-has-3-columns kt-gutter-narrow kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row kb-theme-content-width">
                      {record1.length > 0 ? (
                        <>
                          {record1.map((itmn, index) => {
                            return (
                              <div
                                key={index}
                                className="wp-block-kadence-column inner-column-1 kadence-column_84f3dc-85 pos-rel"
                              >
                                <div className="kt-inside-inner-col">
                                  <figure className="wp-block-image size-full">
                                    <img
                                      decoding="async"
                                      // loading="lazy"
                                      // style={{
                                      //   width: "100%",
                                      //   height: "435px",
                                      // }}
                                      src={itmn.image_url}
                                      alt="first home buyer"
                                      // className="wp-image-3968"
                                      // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-a-home.webp 525w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-a-home-259x300.webp 259w"
                                      // sizes="(max-width: 525px) 100vw, 525px"
                                    />
                                  </figure>

                                  <div className="is-content-justification-center is-layout-flex wp-container-2 wp-block-buttons alignfull btn-over-img">
                                    <div className="wp-block-button is-style-fill">
                                      <a
                                        className="wp-block-button__link has-theme-palette-2-background-color has-background wp-element-button"
                                        href="/buy-a-new-home/"
                                      >
                                        {itmn.tagline}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <div className="wp-block-kadence-column inner-column-1 kadence-column_84f3dc-85 pos-rel">
                            <div className="kt-inside-inner-col">
                              <figure className="wp-block-image size-full">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  style={{
                                    width: "100%",
                                    height: "435px",
                                  }}
                                  src="/pics/buy-a-home.webp"
                                  alt="first home buyer"
                                  className="wp-image-3968"
                                  // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-a-home.webp 525w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-a-home-259x300.webp 259w"
                                  // sizes="(max-width: 525px) 100vw, 525px"
                                />
                              </figure>

                              <div className="is-content-justification-center is-layout-flex wp-container-2 wp-block-buttons alignfull btn-over-img">
                                <div className="wp-block-button is-style-fill">
                                  <a
                                    className="wp-block-button__link has-theme-palette-2-background-color has-background wp-element-button"
                                    href="/buy-a-new-home/"
                                  >
                                    Buy a home
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="wp-block-kadence-column inner-column-2 kadence-column_35a59f-51 pos-rel">
                            <div className="kt-inside-inner-col">
                              <figure className="wp-block-image size-full">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  style={{
                                    width: "100%",
                                    height: "435px",
                                  }}
                                  src="/pics/refinance-home.webp"
                                  alt="refinance your home"
                                  className="wp-image-3966"
                                  // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/refinance-home.webp 525w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/refinance-home-259x300.webp 259w"
                                  // sizes="(max-width: 525px) 100vw, 525px"
                                />
                              </figure>

                              <div className="is-content-justification-center is-layout-flex wp-container-3 wp-block-buttons btn-over-img">
                                <div className="wp-block-button">
                                  <a
                                    className="wp-block-button__link has-theme-palette-2-background-color has-background wp-element-button"
                                    href="/refinance-home-loan/"
                                  >
                                    Refinance your home
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="wp-block-kadence-column inner-column-3 kadence-column_326d88-6e pos-rel">
                            <div className="kt-inside-inner-col">
                              <figure className="wp-block-image size-full">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  style={{
                                    width: "100%",
                                    height: "435px",
                                  }}
                                  src="/pics/buy-investment-property.webp"
                                  alt="buy investment property"
                                  className="wp-image-3969"
                                  // srcSet="https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-investment-property.webp 527w, https://scoresbymortgagebroker.com.au/wp-content/uploads/2022/12/buy-investment-property-260x300.webp 260w"
                                  // sizes="(max-width: 527px) 100vw, 527px"
                                />
                              </figure>

                              <div className="is-content-justification-center is-layout-flex wp-container-4 wp-block-buttons btn-over-img">
                                <div className="wp-block-button">
                                  <a
                                    className="wp-block-button__link has-theme-palette-2-background-color has-background wp-element-button"
                                    href="/buy-investment-property"
                                  >
                                    Buy Investment Property
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
