import axios from "axios";

export const sendEmail = async (obj) => {
  try {
    console.log("message at lib", obj);
    console.log("message at lib", obj.radioState);
    // console.log("message at lib", email);

    let res = await axios.post("/api/mailer", {
      email: obj.state.email,
      subject: "Refinance Consultation Form",
      message: obj,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
