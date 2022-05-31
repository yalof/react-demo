import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  loadData,
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";

function* getPostsSaga() {
  const { data, status } = yield call(getPosts);
  yield put(setAllPostsLoading(true));
  if (status === 200) {
    yield put(setPosts(data.results));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  const { data, status } = yield call(getSinglePost, action.payload);
  yield put(setSinglePostLoading(true));
  if (status === 200) {
    yield put(setPost(data));
  }
  yield put(setSinglePostLoading(false));
}
export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
  ]);
}
