//import { legacy_createStore as createStore, compose } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { compose } from "redux";
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/postsReducer";
import createSagaMiddleware, { runSaga } from "redux-saga";
import { applyMiddleware } from "redux";
import rootSaga from "./sagas/rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counterReducer,
  posts: postsReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
