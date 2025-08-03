import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    message: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    registerRequest() {
      state.loading = true;
      (state.error = null), (state.message = null);
    },
    registerSuccess(state, actions) {
      state.loading = false;
      state.message = action.payload.message;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  otpVerificationRequest() {
    state.loading = true;
    (state.error = null), (state.message = null);
  },
  otpVerificationSuccess(state, actions) {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  },
  otpVerificationFailed(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  loginRequest() {
    state.loading = true;
    (state.error = null),
     (state.message = null);
  },
  loginSuccess(state, actions) {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  },
  loginFailed(state, action) {
    state.loading = false;
    state.error = action.payload;
  },
  logoutRequest(state){
    state.loading=true;
    state.message=null;
    state.error=null;
  },
  logoutSuccess(state,action){
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
    state.user = action.null;
  },
  logoutFailed(state,action){
    state.loading = false;
    state.error=action.payload
    state.message = false;
  },
  getUserRequest(state){
    state.loading=true;
    state.error=null;
    state.message=null;
  },
  getUserSuccess(state,action){
    state.loading=false;
    state.user=action.payload.user;
    state.isAuthenticated=true;
  },
  getUserFailed(state){
  state.loading=false;
  state.user=null;
  state.isAuthenticated=false;
  },
  forgetPasswordRequest(state){
    state.loading=true;
    state.error=null;
    state.message=null;
  },
  forgetPasswordSuccess(state,action){
    state.loading=false;
  state.message=action.payload.message;
  },
  resetPasswordFailed(state){
  state.loading=false;
state.error=action.payload;
  },
  resetPasswordRequest(state){
    state.loading=true;
    state.error=null;
    state.message=null;
  },
  resetPasswordSuccess(state,action){
    state.loading=false;
  state.message=action.payload.message;
  state.user=action.payload.user;
  state.isAuthenticated=true;
  },
  resetPasswordFailed(state){
  state.loading=false;
state.error=action.payload;
  },
  updatePasswordRequest(state){
    state.loading=true;
    state.error=null;
    state.message=null;
  },
  updatePasswordSuccess(state,action){
    state.loading=false;
  state.message=action.payload;
  
  },
  updatePasswordFailed(state){
  state.loading=false;
state.error=action.payload;
  },
  resetAuthSlice(state){
state.error=null;
state.loading=false;
state.message=null;
state.user=state.user;
state.isAuthenticated=state.isAuthenticated;
  }
});
export const resetAuthSlice = ()=>(dispatch)=>{
    dispatch(authSlice.actions.resetAuthSlice())
}
export const register = (data) => async (dispatch) => {
  dispatch(authSlice.actions.registerRequest());
  await axios
    .post("http://localhost:4000/api/v1/auth/register", data, {
      //The URL may be changed later
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch(authSlice.actions.registerSuccess(res.data));
    })
    .catch((error) => {
      dispatch(authSlice.actions.registerFailed(error.response.data.message));
    });
};

export const otpVerification = (email, otp) => async (dispatch) => {
  dispatch(authSlice.actions.otpVerificationRequest());
  await axios
    .post(
      "http://localhost:4000/api/v1/auth/verify-otp",
      { email, otp },
      {
        withCredentials: true, //The URL may be changed later
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch(authSlice.actions.otpVerificationSuccess(res.data));
    })
    .catch((error) => {
      dispatch(
        authSlice.actions.otpVerificationFailed(error.response.data.message)
      );
    });
};

export const login = (data) => async (dispatch) => {
    dispatch(authSlice.actions.loginRequest());
    await axios
      .post(
        "http://localhost:4000/api/v1/auth/login",
        { data },
        {
          withCredentials: true, //The URL may be changed later
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(authSlice.actions.loginSuccess(res.data));
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.loginFailed(error.response.data.message)
        );
      });
  };

  export const logout = () => async (dispatch) => {
    dispatch(authSlice.actions.logoutRequest());
    await axios
      .get(
        "http://localhost:4000/api/v1/auth/logout",
        
        {
          withCredentials: true, //The URL may be changed later
         
        })
      .then((res) => {
        dispatch(authSlice.actions.logoutSuccess(res.data.message));
        dispatch(authSlice.actions.resetAuthSlice());
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.logoutFailed(error.response.data.message)
        );
      });
  };

  export const getUser = () => async (dispatch) => {
    dispatch(authSlice.actions.getUserRequest());
    await axios
      .get(
        "http://localhost:4000/api/v1/auth/me",
        
        {
          withCredentials: true, //The URL may be changed later
         
        })
      .then((res) => {
        dispatch(authSlice.actions.getUserSuccess(res.data));
        
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.getUserFailed(error.response.data.message)
        );
      });
  };


  export const forgetPassword = (email) => async (dispatch) => {
    dispatch(authSlice.actions.forgetPasswordRequest());
    await axios
      .post(
        "http://localhost:4000/api/v1/auth/password/forgot",
        { email },
        {
          withCredentials: true, //The URL may be changed later
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(authSlice.actions.forgetPasswordSuccess(res.data));
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.forgetPasswordFailed(error.response.data.message)
        );
      });
  };
  export const resetPassword = (email,token) => async (dispatch) => {
    dispatch(authSlice.actions.updatePasswordRequest());
    await axios
      .put(
        `http://localhost:4000/api/v1/auth/password/update`,
        { data },
        {
          withCredentials: true, //The URL may be changed later
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(authSlice.actions.resetPasswordSuccess(res.data));
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.resetPasswordFailed(error.response.data.message)
        );
      });
  };
  export const updatePassword = (email,token) => async (dispatch) => {
    dispatch(authSlice.actions.resetPasswordRequest());
    await axios
      .put(
        `http://localhost:4000/api/v1/auth/password/reset/${token}`,
        { data },
        {
          withCredentials: true, //The URL may be changed later
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(authSlice.actions.updatePasswordSuccess(res.data.message));
      })
      .catch((error) => {
        dispatch(
          authSlice.actions.updatePasswordFailed(error.response.data.message)
        );
      });
  };

  export default authSlice.reducer;