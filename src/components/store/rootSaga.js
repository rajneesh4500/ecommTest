import React from "react";
import { addItemWatcher, removeItemWatcher } from "../reducers/cartSaga";
import { put, call, takeEvery, select, all } from "redux-saga/effects";
import { initialCallWatcher } from "../reducers/initialCallSaga";

export default function* rootSaga() {
  yield all([addItemWatcher(), removeItemWatcher(), initialCallWatcher()]);
}
