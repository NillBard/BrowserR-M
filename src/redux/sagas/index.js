import { takeEvery, put, call } from "redux-saga/effects";
import { fetchAllCharacters } from "../../api";
import { ADD_TO_FAVORITE, GET_ALL_CHARACTERS } from "../constants";
import { setAllCharacters } from "../actions/actionCreatore";

export function* handleCharacters() {
  const { results } = yield call(fetchAllCharacters, "");
  yield put(setAllCharacters(results));
}

export function* watchClickSaga() {
  yield takeEvery(GET_ALL_CHARACTERS, handleCharacters);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
