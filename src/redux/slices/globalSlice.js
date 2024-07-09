import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import API from "../url";

// const token = localStorage.getItem("token");
const cookies = new Cookies();

const initialState = {
  SignupMsg: "",
  LoginMsg: "",
  Email: "",
  TokenMsg: "",
  data: {
    created: "",
    email: "",
    id: "",
    isVerified: "",
    jwtToken: "",
    msg: "",
    name: "",
    referral: "",
    refreshToken: "",
    role: "",
  },
  userDetail: "",
  userInfo: "",
  ForgPassMsg: "",
  ForgPassMsgMail: "",
  PassUpdateMsg: "",
  TokenMsgPassUpdate: "",
};

export const authuser = createAsyncThunk("auth/authuser", async (body) => {
  try {
    // const response = await axios.post(API + "/authenticate", body);
    console.log("body at global Slice", body);
    let response = await axios.post("/api/user/login", body);
    console.log("response at global Slice", response);

    if (response.data.msg === "Login Successfull") {
      return { type: "DATA_LOGIN", payload: response.data };
    }
    return { type: "MSG_LOGINS", payload: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const logoutuserNow = createAsyncThunk(
  "auth/logoutuserNow",
  async () => {
    console.log("logout");
    // return { type: "LOGOUT" };
    // let response = await axios.post("/api/user/logout");
    let body = {
      name: "LowRateloanLogout",
    };
    let response = await axios.post("/api/user/logout", body);

    console.log("response logoutuserNow", response);

    // if (response.data.msg === "Login Successfull") {
    //   return { type: "DATA_LOGIN", payload: response.data };
    // }
  }
);

export const forgotpass = createAsyncThunk("auth/forgotpass", async (body) => {
  try {
    const response = await axios.post(API + "/forgot-password", body);
    if (response.data.msg === "Email Not Found.") {
      toast.error("Email Not Found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      response.data.msg === "Cool Email Found, Redirecting to Change Password"
    ) {
      toast.info("Redirecting to Change Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return { type: "FORG_PASSERR", payload: response.data };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const signupdata = createAsyncThunk("auth/signupdata", async (body) => {
  try {
    console.log(
      ".................................>> SignUp Global Slice",
      body
    );

    let res = await axios.post("/api/user/Signup", body);
    console.log(res);
    return res;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
});

export const VerifyTokenForPass = createAsyncThunk(
  "auth/signupdata",
  async (body) => {
    try {
      axios
        .post(API + "/VerifyTokenforpass", body)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.msg == "Sorry Your Token Is Not Correct") {
            toast.error("Sorry Your Token Is Not Correct", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            resp.data.msg ==
            "You Have Been Verified for Password Update. Redirecting..."
          ) {
            toast.success(
              "You Have Been Verified for Password Update. Redirecting...",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );

            return { type: "ISTOKEN_OKTOEDIT", payload: { data: resp.data } };
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
);

export const resetpassw = createAsyncThunk(
  "auth/resetpassword",
  async (body) => {
    try {
      axios
        .post(API + "/resetpassword", body)
        .then((resp) => {
          console.log(resp.data);

          if (resp.data.msg === "Password Updated") {
            toast.success("Password Updated, You can Login Now!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const editHeroSection = createAsyncThunk(
  "auth/editHeroSection",
  async (body) => {
    try {
      console.log(
        ".................................>> editHeroSection Global Slice",
        body
      );

      let res = await axios.post("/api/useradmin/HeroBanner", body);
      console.log("res", res);
      return res;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
);

export const editFeatureTopSection = createAsyncThunk(
  "auth/editFeatureTopSection",
  async (body) => {
    try {
      console.log(
        ".................................>> FeatureTop Global Slice",
        body
      );
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      for (var item in body) {
        formData.append(item, body[item]);
      }
      console.log("formData", formData);

      let res = await axios.post(
        "/api/useradmin/featuretopedit",
        formData,
        config
      );
      console.log("res", res);
      return res;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
);

export const editReputeableBanner = createAsyncThunk(
  "auth/editReputeableBanner",
  async (body) => {
    try {
      console.log(
        ".................................>> editReputeableBanner Global Slice",
        body
      );
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      for (var item in body) {
        formData.append(item, body[item]);
      }
      console.log("formData", formData);

      let res = await axios.post(
        "/api/useradmin/reputeable-edit",
        formData,
        config
      );
      console.log("res", res);
      return res;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
);

export const getHeroSection = createAsyncThunk(
  "auth/getHeroSection",
  async (body) => {
    try {
      let res = await axios.get("/api/useradmin/HeroBannerGet");
      // console.log(res);
      return res;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
);

export const getFeatureSection = createAsyncThunk(
  "auth/getFeatureSection",
  async (body) => {
    try {
      let res = await axios.get("/api/useradmin/featuretopget");
      console.log(res);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getReputeableBanner = createAsyncThunk(
  "auth/getReputeableBanner",
  async (body) => {
    try {
      let res = await axios.get("/api/useradmin/reputeable-get");
      console.log(res);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    DATA_LOGIN: (state, action) => {
      console.log("reducer run login", action.payload);
      console.log("reducer run", action.payload.jwtToken);
      let date = new Date();
      let mydate = date.now;
      if (action.payload.jwtToken) {
        cookies.set("jwtToken", action.payload.jwtToken);
        cookies.set("myRole", action.payload.user.role);
        console.log(cookies.get("jwtToken")); // Pacman
      }
      state.data = action.payload;
    },
    MSG_LOGINS: (state, action) => {
      console.log("reducer run", action.payload);
      state.LoginMsg = action.payload.msg;
    },
    LOGOUT: (state, action) => {
      console.log("cookies removed");
      cookies.remove("token");
    },
    FORG_PASSERR: (state, action) => {
      state.ForgPassMsg = action.payload.msg;
      state.ForgPassMsgMail = action.payload.user.email;
    },
    FORG_PASS: (state, action) => {
      state.ForgPassMsg = action.payload.msg;
    },
    ISTOKEN_OK: (state, action) => {
      state.TokenMsg = action.payload.data.msg;
    },
    ISTOKEN_OKTOEDIT: (state, action) => {
      state.TokenMsgPassUpdate = action.payload.data.msg;
    },
    UPDATEPASS_MSG: (state, action) => {
      state.PassUpdateMsg = action.payload.data.msg;
    },
    CLEAR_STATE: (state, action) => {
      state.PassUpdateMsg = action.payload.data;
    },

    DUPERR_MSG: (state, action) => {
      state.SignupMsg = action.payload.data.msg;
    },

    clearState: (state) => {
      state.PassUpdateMsg = "";
    },
    dupErrorMsg: (state, action) => {
      state.SignupMsg = action.payload.data.msg;
    },
    clearStateUpdatePass: (state, action) => {
      state.PassUpdateMsg = action.payload.data;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authuser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(authuser.rejected, (state, action) => {
        state.LoginMsg = action.payload.msg;
      })
      .addCase(forgotpass.fulfilled, (state, action) => {
        state.ForgPassMsg = action.payload.msg;
        state.ForgPassMsgMail = action.payload.user.email;
      })
      .addCase(forgotpass.rejected, (state, action) => {
        console.error(action.payload);
      });
  },
});

export const {
  DATA_LOGIN,
  MSG_LOGINS,
  LOGOUT,
  FORG_PASSERR,
  FORG_PASS,
  ISTOKEN_OK,
  ISTOKEN_OKTOEDIT,
  UPDATEPASS_MSG,
  CLEAR_STATE,
  DUPERR_MSG,
  clearState,
  dupErrorMsg,
  clearStateUpdatePass,
} = globalSlice.actions;

export const selectCurrentUser = (state) => state.global.user;
