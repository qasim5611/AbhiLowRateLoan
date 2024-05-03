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
    const response = await axios.post(API + "/authenticate", body);
    if (response.data.msg === "Login Successfull") {
      return { type: "DATA_LOGIN", payload: response.data };
    }
    return { type: "MSG_LOGINS", payload: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const logoutuser = createAsyncThunk("auth/logoutuser", async () => {
  return { type: "LOGOUT" };
});

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
    const response = await axios.post(API + "/register", body);
    return response.data;
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
      cookies.remove("jwtToken");
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
      .addCase(logoutuser.fulfilled, (state) => {
        cookies.remove("jwtToken");
        state.data = "";
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
