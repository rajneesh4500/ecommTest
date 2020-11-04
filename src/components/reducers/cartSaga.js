import React from "react";
import * as actions from "../actions/cartActionsConstant";
import { put, call, takeEvery, select } from "redux-saga/effects";

export function* addItemWorker({ data }) {
  try {
    yield put({ type: actions.AddItemEvent, data: data });
  } catch (error) {}
}

export function* removeItemWorker({ data }) {
  try {
    yield put({ type: actions.RemoveItemEvent, data: data });
  } catch (error) {}
}

export function* addItemWatcher() {
  yield takeEvery(actions.AddItem, addItemWorker);
}

export function* removeItemWatcher() {
  yield takeEvery(actions.RemoveItem, removeItemWorker);
}
