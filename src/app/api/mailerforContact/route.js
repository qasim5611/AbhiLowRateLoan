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

        console.log("smtpTransport", smtpTransport);

        const mailOptions = {
          from: `"Talk To Use UserForm" ${text.state.email}`,
          to: `${to}`,
          subject: `${title}`,
          html: `
          <div style="width: 600px;margin-bottom: 10px;height: 25px;padding-top: 7px;">
          <h3 style="font-family: 'Roboto';
          font-size: 21px;
          color: green;">TalkToUs User Details</h3>
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
               <div style="width: 50%; text-align: center; float: left"> Loan Type</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.loanType}</div>
           </div>
       
           <div style="width: 100%;background-color: #ffd08654;margin-bottom: 10px;height: 25px;padding-top: 7px;">
               <div style="width: 50%; text-align: center; float: left">Message</div>
               <div style="width: 50%; text-align: center; float: left">${text.state.message}</div>
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
