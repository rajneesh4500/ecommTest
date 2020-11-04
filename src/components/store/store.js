import React from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./rootReducers";
import rootSaga from "./rootSaga";

const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default store;
