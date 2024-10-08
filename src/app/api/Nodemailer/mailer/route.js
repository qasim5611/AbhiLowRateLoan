// "use server";
// const nodemailer = require("nodemailer");
// let nodemailer;
const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { email, subject, message } = await request.json();
  console.log("request body chali", email, subject, message);

  if (email && subject && message) {
    async function sendEmail(to, title, text) {
      try {
        var smtpTransport = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 587,
          // ssl:     true,
          secure: false,
          //  requireTLS: true,
          auth: {
            user: "qmuhammad144@gmail.com",
            pass: "ovgytbqcdmdnaudo",
          },
          tls: { rejectUnauthorized: false },
        });

        const mailOptions = {
          from: `"LowRateHomeLoan Refinance Consultation" ${text.state.email}`,
          to: `${to}`,
          subject: `${title}`,
          html: `
          <div style="width: 600px;margin-bottom: 10px;height: 25px;padding-top: 7px;">
          <h3 style="font-family: 'Roboto';
          font-size: 21px;
          color: green;">Refinance Consultation User Details</h3>
          </div>
        <br/>
           <div style="width: 600px;">
           <div style="width: 100%;background-color: #ffd08654;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">User Name</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.name}</div>
           </div>
           <div style="width: 100%;background-color: white;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">Email</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.email}</div>
           </div>
       
           <div style="width: 100%;background-color: #ffd08654;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">Phone</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.phone}</div>
           </div>
       
           <div style="width: 100%;background-color: white; margin-bottom: 10px;height: 25px;padding-top: 7px;" ">
               <div style="width: 50%; text-align: center; float: left">Current Loan Amount</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.loanAmount}</div>
           </div>
       
           <div style="width: 100%;background-color: #ffd08654;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">Curretn Interest Rate</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.interestRate}</div>
           </div>
       
           <div style="width: 100%;background-color: white;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">Why Refinancing?</div>
               <div style="width: 50%; text-align: center; float: left">${text.radioState.whyRefinnancing}</div>
           </div>
       </div>
`,
        };
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
            return false;
          } else {
            console.log(response);
            return true;
          }
        });
      } catch (err) {
        return {
          status: false,
          message: err,
        };
      }
    }

    sendEmail(email, subject, message);
  }

  return NextResponse.json({ status: "ok" });
};
