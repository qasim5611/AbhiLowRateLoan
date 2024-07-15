import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { Connect } from "./../../../dbconfig/dbconfig";
import { RefinanceConsultModel } from "./../../../modals/RefinanceConsultModel";

export const POST = async (request) => {
  await Connect();
  const { email, email2, subject, message } = await request.json();
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

        const uniqueSubject = `${title} - ${new Date().toISOString()}`;
        const uniqueMessageId = `${new Date().getTime()}-${Math.random()}@example.com`;

        const mailOptions = {
          from: `"LowRateHomeLoan Refinance Consultation" <${text.email}>`,
          to: to,
          subject: uniqueSubject,
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
          headers: {
            "Message-ID": uniqueMessageId,
            "In-Reply-To": uniqueMessageId,
            References: uniqueMessageId,
          },
        };
        console.log("Mail Options:", mailOptions);
        const response = await smtpTransport.sendMail(mailOptions);
        console.log("Mail Response:", response);

        return true;
      } catch (error) {
        console.error("Error sending email:", error);
        return false;
      }
    }

    result = await sendEmail(email, subject, message);
    result = await sendEmail(email2, subject, message);
    let isclientSave = await RefinanceConsultModel.create({
      name: `${message.state.name}`,
      email: `${message.state.email}`,
      phone: `${message.state.phone}`,
      whyRefinnancing: `${message.radioState.whyRefinnancing}`,
      loanAmount: `${message.state.loanAmount}`,
      interestRate: `${message.state.interestRate}`,
    });
    console.log("isclientSave", isclientSave);
  } else {
    result = false;
  }

  return NextResponse.json({ status: "200", result: result });
};
