import { call, spawn, all } from "redux-saga/effects";
import authUser from "./auth";
import loadCharacters from "./characters";
import fetchFavourites from "./favourites";

export default function* rootSaga() {
  const sagas = [loadCharacters, authUser, fetchFavourites];

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
