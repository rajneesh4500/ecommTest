import {
  put,
  call,
  takeEvery,
  select,
  takeLast,
  takeLatest,
} from "redux-saga/effects";
import * as actions from "../actions/initialCallConstant";
import * as services from "../services/initialCall";

export function* initialCallWorker() {
  try {
    const data = yield call(services.initialCall);

    yield put({ type: actions.INITIATIAL_CALL_EVENT, data: data.product });
  } catch (error) {
    console.log(error);
  }
}

export function* initialCallWatcher() {
  yield takeLatest(actions.INITIATIAL_CALL, initialCallWorker);
}
