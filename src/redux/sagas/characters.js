import { takeEvery, put, call, all, fork } from "redux-saga/effects";

import {
  fetchAllCharacters,
  fetchOneCharacter,
  fetchSeen,
} from "./api/characters";
import { GET_ALL_CHARACTERS, GET_ONE_CHARACTER } from "../constants";
import { setCharacter, setOneCharacter } from "../actions/actionCreatore";

export function* handleCharacters({ payload }) {
  try {
    const { results, info } = yield call(fetchAllCharacters, payload);
    yield put(setCharacter({ results, info }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleOneCharacter({ payload }) {
  try {
    const data = yield call(fetchOneCharacter, payload);
    const firstSeen = yield call(fetchSeen, data.episode[0]);
    const character = { ...data, firstSeen };
    yield put(setOneCharacter(character));
  } catch (error) {
    console.log(error);
  }
}

export function* watchOneCharacter() {
  yield takeEvery(GET_ONE_CHARACTER, handleOneCharacter);
}

export function* watchAllCharacter() {
  yield takeEvery(GET_ALL_CHARACTERS, handleCharacters);
}

export default function* loadCharacters() {
  yield all([fork(watchAllCharacter), fork(watchOneCharacter)]);
}
