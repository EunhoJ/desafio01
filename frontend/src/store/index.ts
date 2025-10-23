import { createStore, applyMiddleware, combineReducers } from "redux";
import { postsReducer } from "./reducers";
import  createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
