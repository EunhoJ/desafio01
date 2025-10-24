import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import type { Post } from "./types";

function* fetchPostsSaga(): Generator<unknown, void, { data: Post[] }> {
  const response = yield call(axios.get, "http://localhost:3000/api/posts");
  yield put({ type: "SET_POSTS", payload: response.data });
}

function* createPostSaga(action: { type: string; payload: Post }) {
  yield call(axios.post, "http://localhost:3000/api/posts", action.payload);
  yield put({ type: "ADD_POST_LOCAL", payload: action.payload });
}

function* updatePostSaga(action: { type: string; payload: Post }) {
  yield call(
    axios.put,
    `http://localhost:3000/api/posts/${action.payload.id}`,
    action.payload
  );
  yield put({ type: "UPDATE_POST_LOCAL", payload: action.payload });
}

function* deletePostSaga(action: { type: string; payload: number }) {
  yield call(axios.delete, `http://localhost:3000/api/posts/${action.payload}`);
  yield put({ type: "REMOVE_POST_FROM_STATE", payload: action.payload });
}

export default function* rootSaga() {
  yield takeLatest("FETCH_POSTS", fetchPostsSaga);
  yield takeLatest("CREATE_POST", createPostSaga);
  yield takeLatest("UPDATE_POST", updatePostSaga);
  yield takeLatest("DELETE_POST", deletePostSaga);
}
