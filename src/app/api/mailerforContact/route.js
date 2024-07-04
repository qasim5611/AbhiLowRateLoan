import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email, subject, message, state } = await request.json();
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
          from: `"Talk To Us UserForm" <${text.email}>`,
          to: to,
          subject: title,
          html: `
            <div style="width: 600px; margin-bottom: 10px; height: 25px; padding-top: 7px;">
              <h3 style="font-family: 'Roboto'; font-size: 21px; color: green;">TalkToUs User Details</h3>
            </div>
            <br/>
            <div style="width: 600px;">
              <div style="width: 100%; background-color: #ffd08654; margin-bottom: 10px; height: 25px; padding-top: 7px;">
                <div style="width: 50%; text-align: center; float: left">User Name</div>
                <div style="width: 50%; text-align: center; float: left">${text.name}</div>
              </div>
              <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;">
                <div style="width: 50%; text-align: center; float: left">Email</div>
                <div style="width: 50%; text-align: center; float: left">${text.email}</div>
              </div>
              <div style="width: 100%; background-color: #ffd08654; margin-bottom: 10px; height: 25px; padding-top: 7px;">
                <div style="width: 50%; text-align: center; float: left">Phone</div>
                <div style="width: 50%; text-align: center; float: left">${text.phone}</div>
              </div>
              <div style="width: 100%; background-color: white; margin-bottom: 10px; height: 25px; padding-top: 7px;">
                <div style="width: 50%; text-align: center; float: left">Loan Type</div>
                <div style="width: 50%; text-align: center; float: left">${text.loanType}</div>
              </div>
              <div style="width: 100%; background-color: #ffd08654; margin-bottom: 10px; height: 25px; padding-top: 7px;">
                <div style="width: 50%; text-align: center; float: left">Message</div>
                <div style="width: 50%; text-align: center; float: left">${text.message}</div>
              </div>
            </div>
          `,
        };

        console.log("Mail Options:", mailOptions);
        const response = await smtpTransport.sendMail(mailOptions);
        console.log("Mail Response:", response);
        result = true;
        return true;
      } catch (error) {
        console.error("Error sending email:", error);
        result = false;
        return false;
      }
    }

    await sendEmail(email, subject, message);
  } else {
    result = false;
  }

  return NextResponse.json({ status: "200", result: result });
};
