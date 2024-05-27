import axios from "axios";

export const sendEmail = async (email, subject, message) => {
  try {
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    let res = await axios.post("/api/mailer", {
      email: email,
      subject: subject,
      message: message,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
