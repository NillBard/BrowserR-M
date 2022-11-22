import { takeEvery, put, call, select, spawn, all } from "redux-saga/effects";
import { fetchAllCharacters, fetchOneCharacter, fetchSeen } from "../../api";
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

export function* watchOneSaga() {
  yield takeEvery(GET_ONE_CHARACTER, handleOneCharacter);
}

export function* watchAllSaga() {
  yield takeEvery(GET_ALL_CHARACTERS, handleCharacters);
}

export default function* rootSaga() {
  const sagas = [watchAllSaga, watchOneSaga];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log(error);
        }
      }
    });
  });

  yield all(retrySagas);
}
