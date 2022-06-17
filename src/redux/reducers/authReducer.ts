import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};
export type AuthReducerStateType = {
  isLoggedIn: boolean;
  tempMail: string;
  loginUserLoading: boolean;
  userNameHeader: string;
};
const initialState: AuthReducerStateType = {
  isLoggedIn:
    !!localStorage.getItem("jwtAccessToken") ||
    !!localStorage.getItem("jwtRefreshToken"),
  tempMail: "",
  loginUserLoading: false,
  userNameHeader: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userActivate: (state: any, action: any) => {},
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {},
    setLogStatus: (state: any, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setTempMail: (state: any, action: PayloadAction<string>) => {
      state.tempMail = action.payload;
    },
    loginUser: (
      state: any,
      action: PayloadAction<{ email: string; password: string }>
    ) => {},
    setLoginUserLoading: (state, action) => {
      state.loginUserLoading = action.payload;
    },
    getUserNameInfo: (state, action) => {},
    setUserNameHeader: (state, action) => {
      state.userNameHeader = action.payload;
    },
    logout: (state: any, action: any) => {},
  },
});

export const {
  registerUser,
  setLogStatus,
  setTempMail,
  loginUser,
  userActivate,
  setLoginUserLoading,
  getUserNameInfo,
  setUserNameHeader,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getTempMail: (state: any) => state.auth.tempMail,
  getloginUserLoading: (state: any) => state.auth.loginUserLoading,
  getUserNameHeader: (state: any) => state.auth.userNameHeader,
};
