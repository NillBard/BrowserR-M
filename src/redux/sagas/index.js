import { takeEvery, put, call } from "redux-saga/effects";
import { fetchAllCharacters, fetchOneCharacter } from "../../api";
import { GET_ALL_CHARACTERS, GET_ONE_CHARACTER } from "../constants";
import { setCharacter, setOneCharacter } from "../actions/actionCreatore";

export function* handleCharacters({ payload }) {
  const { characters, info } = yield call(fetchAllCharacters, payload);
  yield put(setCharacter({ characters, info }));
}

export function* handleOneCharacter({ payload }) {
  const { results } = yield call(fetchOneCharacter, payload);
  yield put(setOneCharacter(results));
}

export function* watchClickSaga() {
  yield takeEvery(GET_ALL_CHARACTERS, handleCharacters);
  yield takeEvery(GET_ONE_CHARACTER, handleCharacters);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
