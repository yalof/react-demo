import { all, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser, registerUser } from "../reducers/authReducer";
import { loadData } from "../reducers/postsReducer";

/*function* postsSaga(action: any) {}

export default function* postsWatcher() {
  yield all([takeLatest(postsSaga, postsSaga)]);
}
*/
