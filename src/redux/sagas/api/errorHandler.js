import { call, delay, put } from "redux-saga/effects";
import { clearError, setErorr } from "../../actions/actionCreatore";

export function* showErrorMesseage(messeage) {
  const date = Date.now();
  yield put(setErorr({ date, messeage }));
  yield delay(5000);
  yield put(clearError(date));
}
