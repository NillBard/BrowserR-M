import { fork, takeEvery, put, call, select } from "redux-saga/effects";
import { setFavourite } from "../actions/actionCreatore";
import {
  ADD_TO_FAVORITE,
  GET_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../constants";
import { fetchDataWithAuth } from "./api/useFetch";

function* fetchCharactersFromApi(favoriteArr) {
  if (favoriteArr.length > 0) {
    const characters = yield call(
      fetch,
      `https://rickandmortyapi.com/api/character/${favoriteArr}`
    );
    const favourites = yield characters.json();
    if (favoriteArr.length > 1) {
      return favourites;
    } else {
      return [favourites];
    }
  } else return [];
}

export function* handleAddFavourite({ payload }) {
  try {
    const response = yield call(
      fetchDataWithAuth,
      `http://localhost:5000/api/favourites/add`,
      "POST",
      { id: payload.id }
    );
    const { data } = yield response;

    const favourites = yield select(
      (store) => store?.favourite?.favouriteChars
    );
    const newFav = [...favourites, data];

    yield put(setFavourite(newFav));
  } catch (error) {
    console.log(error);
  }
}

export function* handleRemoveFavourite({ payload }) {
  try {
    const response = yield call(
      fetchDataWithAuth,
      `http://localhost:5000/api/favourites/remove`,
      "DELETE",
      { id: payload.id }
    );
    const { data } = yield response;

    const favourites = yield select(
      (store) => store?.favourite?.favouriteChars
    );

    const newFav = favourites.filter((el) => el.id !== data.id);

    yield put(setFavourite(newFav));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllFavourite() {
  try {
    const response = yield call(
      fetchDataWithAuth,
      "http://localhost:5000/api/favourites/"
    );
    const { data } = yield response;
    console.log(data.map((el) => el.id).join(","));
    const favourites = yield call(
      fetchCharactersFromApi,
      data.map((el) => el.id).join(",")
    );
    yield put(setFavourite(favourites));
  } catch (error) {}
}

export function* watchFavourite() {
  yield takeEvery(ADD_TO_FAVORITE, handleAddFavourite);
  yield takeEvery(REMOVE_FROM_FAVORITE, handleRemoveFavourite);
  yield takeEvery(GET_FAVORITE, handleGetAllFavourite);
}

export default function* fetchFavourites() {
  yield fork(watchFavourite);
}
