"use client";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export function Faq(props) {
  const [open, setOpen] = useState(true);

  const toogleFaq = () => {
    setOpen(!open);
  };
  return (
    <>
      <>
        <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-4_e82d30-17">
          <div className="kt-block-spacer kt-block-spacer-halign-center">
            <hr className="kt-divider" />
          </div>
        </div>
        <div className="kb-row-layout-wrap kb-row-layout-id1786_f1cfc2-83 alignnone wp-block-kadence-rowlayout">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top kb-theme-content-width">
            <div className="wp-block-kadence-column kadence-column1786_640566-79 inner-column-1">
              <div className="kt-inside-inner-col">
                <h6
                  className="kt-adv-heading1786_aabdf7-1d wp-block-kadence-advancedheading has-theme-palette-1-color has-text-color"
                  data-kb-block="kb-adv-heading1786_aabdf7-1d"
                >
                  FAQs
                </h6>
                <h2
                  className="kt-adv-heading1786_beddb7-18 wp-block-kadence-advancedheading"
                  data-kb-block="kb-adv-heading1786_beddb7-18"
                >
                  Frequently Asked Questions
                </h2>
                <p className="has-text-align-center">
                  {" "}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t<style>\n#wpsm_accordion_1713 .wpsm_panel-heading{\n\tpadding:0px !important;\n}\n#wpsm_accordion_1713 .wpsm_panel-title {\n\tmargin:0px !important; \n\ttext-transform:none !important;\n\tline-height: 1 !important;\n}\n#wpsm_accordion_1713 .wpsm_panel-title a{\n\ttext-decoration:none;\n\toverflow:hidden;\n\tdisplay:block;\n\tpadding:0px;\n\tfont-size: 18px !important;\n\tfont-family: 0 !important;\n\tcolor:#0e0e0e !important;\n\tborder-bottom:0px !important;\n}\n\n#wpsm_accordion_1713 .wpsm_panel-title a:focus {\noutline: 0px !important;\n}\n\n#wpsm_accordion_1713 .wpsm_panel-title a:hover, #wpsm_accordion_1713 .wpsm_panel-title a:focus {\n\tcolor:#0e0e0e !important;\n}\n#wpsm_accordion_1713 .acc-a{\n\tcolor: #0e0e0e !important;\n\tbackground-color:#ffffff !important;\n\tborder-color: #ddd;\n}\n#wpsm_accordion_1713 .wpsm_panel-default > .wpsm_panel-heading{\n\tcolor: #0e0e0e !important;\n\tbackground-color: #ffffff !important;\n\tborder-color: #ffffff !important;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n}\n#wpsm_accordion_1713 .wpsm_panel-default {\n\t\tborder:0px solid transparent !important;\n\t}\n#wpsm_accordion_1713 {\n\tmargin-bottom: 20px;\n\toverflow: hidden;\n\tfloat: none;\n\twidth: 100%;\n\tdisplay: block;\n}\n#wpsm_accordion_1713 .ac_title_class{\n\tdisplay: block;\n\tpadding-top: 12px;\n\tpadding-bottom: 12px;\n\tpadding-left: 15px;\n\tpadding-right: 15px;\n}\n#wpsm_accordion_1713  .wpsm_panel {\n\toverflow:hidden;\n\t-webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, .05);\n\tbox-shadow: 0 0px 0px rgba(0, 0, 0, .05);\n\t\t\tborder-radius: 0px;\n\t}\n#wpsm_accordion_1713  .wpsm_panel + .wpsm_panel {\n\t\tmargin-top: 0px;\n\t}\n#wpsm_accordion_1713  .wpsm_panel-body{\n\tbackground-color: !important;\n\tcolor:#0e0e0e !important;\n\tborder-top-color: #ffffff !important;\n\tfont-size:16px !important;\n\tfont-family: 0 !important;\n\toverflow: hidden;\n\t\tborder: 2px solid transparent !important;\n\t}\n\n#wpsm_accordion_1713 .ac_open_cl_icon{\n\tbackground-color:#ffffff !important;\n\tcolor: #0e0e0e !important;\n\tfloat:right !important;\n\tpadding-top: 12px !important;\n\tpadding-bottom: 12px !important;\n\tline-height: 1.0 !important;\n\tpadding-left: 15px !important;\n\tpadding-right: 15px !important;\n\tdisplay: inline-block !important;\n}\n\n\t\t\t #wpsm_accordion_1713 .wpsm_panel-heading {\n\t\t\t\tbackground-image: url(https://lowratehomeloan.com.au/wp-content/plugins/responsive-accordion-and-collapse/img/style-soft.png);\n\t\t\t\tbackground-position: 0 0;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t}\n\t\t\t#wpsm_accordion_1713 .ac_open_cl_icon{\n\t\t\t\tbackground-image: url(https://lowratehomeloan.com.au/wp-content/plugins/responsive-accordion-and-collapse/img/style-soft.png);\n\t\t\t\tbackground-position: 0 0;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t}\n\t\t\t",
                    }}
                  />
                </p>
                <div className="wpsm_panel-group" id="wpsm_accordion_1713">
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse1"
                          onclick="do_resize()"
                        >
                          {/* <span className="ac_open_cl_icon fa fa-minus" /> */}
                          <span className="ac_open_cl_icon fa fa-minus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>

                          {/* <div onClick={toogleFaq}>hy</div> */}

                          <span className="ac_title_class" onClick={toogleFaq}>
                            Is it better to go through a mortgage broker in
                            Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse1"
                      className="wpsm_panel-collapse collapse in"
                    >
                      <div className="wpsm_panel-body">
                        There's no easy answer to this question. It depends on
                        your individual circumstances and what you're looking
                        for in a mortgage broker. If you're not sure what you
                        want or need, then going through a mortgage broker may
                        be a good idea.They can help you compare different loan
                        products and find the one that most suitable for your
                        needs. However, if you're confident about what you want
                        and don't need help comparing different loans, then
                        going directly to a lender may be a better option.
                        Whichever route you choose, make sure you do your
                        research and shop around to get a better outcome.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse2"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            What is a mortgage broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse2"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        A mortgage broker is a professional who works with
                        people to help them find the better mortgage loan for
                        their needs. Most lenders do not work directly with
                        consumers, but instead work through brokers. They
                        typically have access to a large number of lenders and
                        can therefore offer borrowers a wide range of options,
                        including different types of mortgages and refinance
                        loans. Brokers may also be able to offer advice about
                        how much money you will need for a down payment, which
                        can help you qualify for the loan. Finally, they can
                        also assist you in getting pre-approved for your
                        mortgage so that you know exactly what type of home you
                        are buying before going into contract negotiations with
                        the seller. If you are thinking of purchasing a home or
                        refinancing your current mortgage, working with a
                        mortgage broker may be a good option for you. Low Rate
                        Home Loan can help you compare different loan options
                        and find the product that accommodates your needs. Be
                        sure to shop around and compare different brokers before
                        choosing one to work with. Ask them about their
                        experience, fees, and the types of loans they typically
                        work with so that you can be sure they are a good fit
                        for you.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse3"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            What does a mortgage broker do?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse3"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        A mortgage broker is a person who helps people take out
                        mortgages. They will help you find the better mortgage
                        for you, and they can also help you with things like
                        refinancing your home or changing your loan terms. A
                        good mortgage broker will always have your best
                        interests in mind. There are many different types of
                        brokers, including banks and brokers. If you are looking
                        for a new mortgage, it might be a good idea to work with
                        a broker so that you can get the better product that
                        suits you’re circumstances. However, there are many
                        factors to consider when choosing a mortgage broker, so
                        be sure to do your research before making any decisions.
                        Mortgage brokers play an important role in the home
                        buying process. Whether you're looking to purchase your
                        first home or investment property, or you're interested
                        in refinancing an existing mortgage, a broker can help
                        you navigate the sometimes-complex world of home
                        financing. A mortgage broker is basically a middleman
                        between you and the lender. After you fill out a loan
                        application with a broker, they will then shop around to
                        various lenders on your behalf in order to get you the
                        better interest rate and terms possible. Mortgage
                        brokers are required by law to disclose all fees upfront
                        so there are no surprises later on down the road. While
                        working with a mortgage broker can save you time and
                        effort, it's important to remember that they are not
                        always going to get you a good loan product. It's still
                        in your best interest to do your research and shop
                        around for loans on your own before deciding what to do.
                        If you're in the market for a new mortgage, whether it's
                        your first home or an investment property, working with
                        a reputable mortgage broker can help make the process
                        smoother. Just remember to carefully consider all of
                        your options before signing any loan documents!{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse4"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Pros and cons of using a mortgage broker in
                            Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse4"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are a number of pros and cons to using a mortgage
                        broker in Australia. Some of the pros include access to
                        a wider range of lenders, the ability to negotiate on
                        behalf of the borrower, and potentially lower interest
                        rates. Some of the cons include higher fees, less
                        control over the loan process, and the potential for
                        borrower confusion. Ultimately, it is up to the borrower
                        to decide whether or not using a mortgage broker is the
                        right decision for their situation. What questions
                        should you ask a mortgage broker? 1. How long have you
                        been working as a mortgage broker? 2. What is your
                        experience in the Australian mortgage market? 3. What
                        lenders do you work with? 4. What are your thoughts on
                        the current state of the Australian mortgage market? 5.
                        What are the pros and cons of using a mortgage broker?
                        6. How much will it cost me to use your services? 7.
                        What are the benefits of using a mortgage broker? 8. How
                        can I be sure that I am getting the right product for my
                        needs? 9. What should I do if I am not happy with the
                        service, I receive from my mortgage broker?{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse5"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Is it better to get a mortgage from a bank or broker
                            in Australia?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse5"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are many consumers who prefer to get a mortgage
                        from a bank in Australia. However, there are some
                        advantages and disadvantages to consider. Here, we will
                        discuss both aspects of the issue and let you know which
                        option is better for you. First, let’s talk about the
                        advantages of getting a mortgage from a bank. One of the
                        main reasons that people choose to go with banks is that
                        they can get a lower interest rate when compared to
                        other options. Banks have been around for a long time,
                        so they have reliable and trustworthy reputations that
                        borrowers like investors trust. Additionally, when it
                        comes to paperwork and documentation, banks also make
                        things smoother because their lending process is
                        well-established and streamlined. This makes the process
                        less time consuming and more convenient for borrowers.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse6"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Why choose a mortgage broker over a bank?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse6"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        There are several reasons why you might choose to work
                        with a mortgage broker rather than a bank. Here are some
                        of the most common reasons: 1. Mortgage brokers have
                        access to a wider range of lenders and products. This
                        means that they can shop around and find multiple
                        products that meets your needs. Instead of being limited
                        to the products offered by just one bank. 2. Mortgage
                        brokers are usually more sufficient, which means they’re
                        not tied to any one lender. This gives them more
                        flexibility to find a loan that suits your individual
                        needs and circumstances. 3. Mortgage brokers are
                        typically knowledgeable in the home loan market. They
                        can provide you with better advice and guidance
                        throughout the process, from finding the right loan to
                        signing the final paperwork. 4. Mortgage brokers can
                        help you avoid common pitfalls in the home loan process,
                        such as being offered a higher interest rate than
                        necessary or having to pay unnecessary fees and charges.
                        In short, they’ll work hard to make sure you get a
                        better outcome for your needs. So if you’re looking for
                        knowledge and guidance when it comes to securing a home
                        loan, rather than simply walking into your nearest bank
                        branch, then a mortgage broker could be the right option
                        for you. If this sounds like something that interests
                        you, get in touch with a Low Rate Home Loan your local
                        mortgage broker today to learn more about their services
                        and find out what we could do for you.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse7"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Do mortgage brokers charge a fee? How much does a
                            mortgage broker cost?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse7"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        When you ask this question, the answer may not be
                        straightforward. Mortgage brokers in Melbourne charge a
                        fee for their services, although it differs depending on
                        the company and the type of mortgage offered. Some
                        companies do charge a transaction fee if your loan is
                        processed and approved, while others don't. Others may
                        offer discounted rates to entice more borrowers or may
                        pass on additional charges added by banks that are
                        beneficial to the borrower. Income-driven mortgages are
                        also available as an alternative to fixed interest rates
                        with potential savings in both interest payments and tax
                        deductions. So if you're looking for a good deal on a
                        mortgage broker in Melbourne, search online first. We do
                        not charge any mortgage broking service fees. The
                        advantages of using a mortgage broker There are many
                        advantages to using a mortgage broker when you’re buying
                        a home. Here are just a few: Matching service: Mortgage
                        brokers provide borrowers with access to the entire
                        lending marketplace, which means they can find lenders
                        and loan products that match your needs. In contrast,
                        most consumers only have access to the small number of
                        loans offered by their bank or credit union. Finance
                        Knowledge: A good mortgage broker has years of
                        experience working with different lenders and can help
                        borrowers navigate the complexities associated with
                        various types of loans. They also know when changes in
                        interest rates make it worthwhile for borrowers to
                        refinance their mortgages. Correct process: Unlike
                        applying for a mortgage directly through a lender, going
                        through a mortgage broker is generally a smoother
                        process. Mortgage brokers handle most of the paperwork
                        and legwork involved in securing a loan, which can be a
                        big help for busy borrowers. Potential savings: Mortgage
                        brokers typically have access to wholesale interest
                        rates, which are lower than the rates available to
                        consumers who go directly to lenders. That means
                        borrowers who use a mortgage broker may be able to save
                        money on their loan. These are just a few of the
                        advantages that come with using a mortgage broker. If
                        you’re considering buying a home, working with a
                        mortgage broker is a great way to make sure you get
                        multiple loan products to choose from for your needs.
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse8"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Why use a mortgage broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse8"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        Many people are uncomfortable dealing with large sums of
                        money and being in charge of making all the decisions
                        when it comes to buying a home. However, having your
                        mortgage through a broker can help relieve some of that
                        stress by acting as a middleman between you and the
                        lender. Mortgage brokers have access to many lenders and
                        loan products that you may not be able to find on your
                        own. They also have more knowledge in finance, so they
                        can help you pick a loan that fits your financial
                        situation, including negotiating better rates or terms
                        than what you might be able to get yourself. And since
                        mortgage brokers make their living from helping people
                        like you purchase homes, they typically work for without
                        any costs for their clients and aren't paid unless a the
                        loan application is approved and settled.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse9"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            What makes Low Rate Home Loan Mortgage Broker
                            different?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse9"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        Low Rate Home Loan Mortgage Broker is different from
                        other lenders because we offer a wide range of refinance
                        options and loan products to choose from. Whether you
                        are looking for a low interest rate home mortgage or
                        need assistance in finding the better refinance option,
                        our dedicated team will be happy to help you find the
                        ideal solution that meets your needs and fits within
                        your budget. We understand that making the decision
                        about taking on additional debt can be overwhelming, so
                        our goal is to make it as simple and convenient as
                        possible by providing you with all of the information
                        you need up front so that you can make an informed
                        decision. At Low Rate Home Loan Mortgage Broker, we
                        focus on building long-term relationships with our
                        clients so that we can help you achieve your goals and
                        navigate the often complicated process of refinancing or
                        purchasing a home. Whether you are looking to purchase
                        your first home, trade up to a larger property, or
                        transition into retirement, our team is here for you
                        every step of the way. So why not contact us today and
                        see how we can help you find the right mortgage solution
                        for your needs?
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse10"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            What happens in my first meeting with Mortgage
                            Broker?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="ac_1713_collapse10"
                      className="wpsm_panel-collapse collapse "
                    >
                      <div className="wpsm_panel-body">
                        I had just graduated from college and was in the process
                        of buying my first home when I met with a mortgage
                        broker. I wasn't quite sure what to expect, and I was
                        definitely nervous about the whole thing, but my broker
                        assured me that he would be able to help me find a loan
                        that would fit my needs. Over the course of our meeting,
                        we discussed several different types of loans and how
                        each one worked. We also talked about things like
                        interest rates and payment options, and we looked at
                        some sample monthly payments so that I could get an idea
                        of what to expect once my loan went into effect. In the
                        end, it turned out to be a lot simpler than I had
                        imagined, and I am grateful for all of the help that my
                        mortgage broker provided me. If you are looking to buy a
                        home and aren't quite sure how to find the right loan,
                        then we would highly recommend meeting with a mortgage
                        broker. They can provide you with all of the information
                        and guidance that you need in order to make smart
                        decisions about your finances. And they will be there
                        for you throughout the entire process, answering any
                        questions that come up along the way so that you feel
                        confident and comfortable in your purchase decision.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wpsm_panel wpsm_panel-default">
                    <div className="wpsm_panel-heading" role="tab">
                      <h4 className="wpsm_panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#wpsm_accordion_1713 "
                          href="javascript:void(0)"
                          data-target="#ac_1713_collapse11"
                          onclick="do_resize()"
                        >
                          <span className="ac_open_cl_icon fa fa-plus">
                            {open ? (
                              <AddIcon sx={{ fontSize: "25px" }} />
                            ) : (
                              <RemoveIcon sx={{ fontSize: "25px" }} />
                            )}
                          </span>
                          <span className="ac_title_class">
                            Does a Broker just help me get to settlement or do
                            they provide an ongoing service?{" "}
                          </span>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
