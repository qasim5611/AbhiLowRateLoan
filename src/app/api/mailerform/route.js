import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { Connect } from "./../../../dbconfig/dbconfig";
import { RefinanceConsultModel } from "./../../../modals/RefinanceConsultModel";

export const POST = async (request) => {
  await Connect();
  const { email, subject, message } = await request.json();
  console.log("Request body:", email, subject, message);

  let result = null;

  if (email && subject && message) {
    async function sendEmail(to, title, text) {
      try {
        const smtpTransport = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "qmuhammad144@gmail.com",
            pass: "ovgytbqcdmdnaudo",
          },
          tls: { rejectUnauthorized: false },
        });

        console.log("SMTP Transport:", smtpTransport);

        const mailOptions = {
          from: `"LowRateHomeLoan Refinance Consultation" <${text.email}>`,
          to: to,
          subject: title,
          html: `
            <div style="width: 600px; margin-bottom: 10px; height: 25px; padding-top: 7px;">
              <h3 style="font-family: 'Roboto'; font-size: 21px; color: green;">Refinance Consultation User Details</h3>
            </div>
            <br/>

            <div style="width: 600px;">

              <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px; padding-left: 5px;">
              User Name
              </div>

              <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
               ${text.state.name}
              </div>

              <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 5px;">
               Email
              </div>

              <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
               ${text.state.email}
              </div>

              <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 5px;">
                Phone
              </div>

              <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
               ${text.state.phone}
              </div>



              <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 5px;">
              Why Refinancing?
            </div>

            <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
            ${text.radioState.whyRefinnancing}
            </div>



            <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 5px;">
            Current Loan Amount
          </div>

          <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
          ${text.state.loanAmount}
          </div>
          <div style="font-weight: bold ;width: 100%; background-color: #eaf3fa; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 5px;">
          Current Interest Rate
        </div>

        <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;  padding-left: 15px;">
        ${text.state.interestRate}
        </div>
            </div>
          `,
        };
        console.log("Mail Options:", mailOptions);
        const response = await smtpTransport.sendMail(mailOptions);
        console.log("Mail Response:", response);

        let isclientSave = await RefinanceConsultModel.create({
          name: `${text.state.name}`,
          email: `${text.state.email}`,
          phone: `${text.state.phone}`,
          whyRefinnancing: `${text.radioState.whyRefinnancing}`,
          loanAmount: `${text.state.loanAmount}`,
          interestRate: `${text.state.interestRate}`,
        });
        console.log("isclientSave", isclientSave);

        return true;
      } catch (error) {
        console.error("Error sending email:", error);
        return false;
      }
    }

    result = await sendEmail(email, subject, message);
  } else {
    result = false;
  }

  return NextResponse.json({ status: "200", result: result });
};
