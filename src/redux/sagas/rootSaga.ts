import { act } from "@testing-library/react";
import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
//import postsWatcher from "./postsSaga";

function* postsWatcher() {}
export default function* rootSaga() {
  yield all([authWatcher(), postsWatcher()]);
}
