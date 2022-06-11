import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  setTempMail,
  loginUser,
  userActivate,
  getUserNameInfo,
  setLoginUserLoading,
  setUserNameHeader,
  logout,
} from "../reducers/authReducer";
import { setLogStatus } from "../reducers/authReducer";
import {
  loginUserApi,
  registerUserApi,
  userActivateApi,
  getUserNameInfoApi,
} from "../api";
import { callCheckingAuth } from "./callCheckingAuth";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { email, name, password } = action.payload;
  const { data, status } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });

  if (status === 201) {
    yield put(setTempMail(data?.email));
  }
}

function* userActivateSaga(action: any) {
  const { uuid, token, callback } = action.payload;
  const { status } = yield call(userActivateApi, uuid, token);
  if (status === 204) {
    callback();
  }
}

function* loginUserSaga(action: any) {
  //LOADING
  yield put(setLoginUserLoading(true));
  const userData = action.payload;
  const { status, data, problem } = yield call(loginUserApi, userData);
  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.access);
    localStorage.setItem("jwtRefreshToken", data.refresh);
    yield put(setLogStatus(true));
    yield put(getUserNameInfo({}));
  } else {
    console.error("ОШИБКА ПРИ ЛОГИНЕ", problem);
  }
  //LOADING - ЗАКРЫВАЕМ
  yield put(setLoginUserLoading(false));
}

function* getUserNameInfoSaga(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data } = yield callCheckingAuth(
    getUserNameInfoApi,
    accessToken
  );
  if (status === 200) {
    yield put(setUserNameHeader(data.username));
  }
}

export function* logoutSaga() {
  yield put(setLogStatus(false));
  //put isLogin - false
  //remove both tokens
  localStorage.removeItem("jwtAccessToken");
  localStorage.removeItem("jwtRefreshToken");
}
export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserSaga),
    takeLatest(userActivate, userActivateSaga),
    takeLatest(loginUser, loginUserSaga),
    takeLatest(getUserNameInfo, getUserNameInfoSaga),
    takeLatest(logout, logoutSaga),
  ]);
}
