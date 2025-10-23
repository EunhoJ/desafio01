import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import type { Post } from "./types";

function* fetchPostsSaga(): Generator<unknown, void, { data: Post[] }> {
  const response = yield call(axios.get, "http://localhost:3000/api/posts");
  yield put({ type: "SET_POSTS", payload: response.data });
}

interface DeletePostAction {
  type: string;
  payload: number;
}

function* deletePostSaga(action: DeletePostAction) {
  yield call(axios.delete, `http://localhost:3000/api/posts/${action.payload}`);
  yield put({ type: "REMOVE_POST_FROM_STATE", payload: action.payload });
}

export default function* rootSaga() {
  yield takeLatest("FETCH_POSTS", fetchPostsSaga);
  yield takeLatest("DELETE_POST", deletePostSaga);
}
