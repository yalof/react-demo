import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  loadData,
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
  setTotalAllPostsCount,
  addPost,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost, addPostApi } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { callCheckingAuth } from "./callCheckingAuth";

function* getPostsSaga(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getPosts, action.payload);

  if (status === 200) {
    yield put(setPosts(data.results));
    yield put(setTotalAllPostsCount(data.count));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data));
  }
  yield put(setSinglePostLoading(false));
}

function* addPostSaga(action: any) {
  const { data, status } = yield callCheckingAuth(addPostApi, action.payload);
}
export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
    takeLatest(addPost, addPostSaga),
  ]);
}