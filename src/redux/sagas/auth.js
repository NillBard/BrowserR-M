import { call, put, fork, takeEvery, all, take } from "redux-saga/effects";
import { auth, fetchLogin, fetchRegistration } from "./api/authApi";
import { setErorr, setUser } from "../actions/actionCreatore";
import { AUTH_USER, GET_FAVORITE, LOGIN_USER, SIGNUP_USER } from "../constants";
import { handleGetAllFavourite } from "./favourites";
import { showErrorMesseage } from "./api/errorHandler";

export function* login({ payload }) {
  try {
    const data = yield call(fetchLogin, payload);
    yield put(setUser(data));
    yield take(GET_FAVORITE);
  } catch (error) {
    yield showErrorMesseage(error.message);
  }
}

export function* registration({ payload }) {
  try {
    const data = yield call(fetchRegistration, payload);
    yield put(setUser(data));
    yield take(GET_FAVORITE);
  } catch (error) {
    console.log(error.message);
    yield showErrorMesseage(error.message);
  }
}

export function* refreshToken() {
  try {
    const data = yield call(auth);
    yield put(setUser(data));
    yield call(handleGetAllFavourite);
  } catch (error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_USER, login);
}

export function* watchRegistration() {
  yield takeEvery(SIGNUP_USER, registration);
}

export function* watchRefreshToken() {
  yield takeEvery(AUTH_USER, refreshToken);
}

export default function* authUser() {
  yield all([
    fork(watchLogin),
    fork(watchRegistration),
    fork(watchRefreshToken),
  ]);
}
