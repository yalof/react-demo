import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  loadData,
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
  setTotalAllPostsCount,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";

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
export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
  ]);
}
