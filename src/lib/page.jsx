import axios from "axios";

export const sendEmail = async (email, subject, message) => {
  try {
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    let res = await axios.post("/api/mailerform", {
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

export const sendEmailBuyHome = async (email, subject, message) => {
  try {
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    let res = await axios.post("/api/mailerformbuyhome", {
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

export const talkToUs = async (email, subject, message) => {
  try {
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    let res = await axios.post("/api/mailerforContact", {
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

export const sendVerificationEmail = async (user, origin) => {
  try {
    console.log("sendVerificationEmail User at lib", user);
    console.log("sendVerificationEmail origin at lib", origin);

    // let res = await axios.post("/api/mailerverification", {
    //   user: user,
    //   origin: origin,
    // });

    let res = await axios.post("http://localhost:3000/api/mailerverification", {
      // Use full URL in development
      user: user,
      origin: origin,
    });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
