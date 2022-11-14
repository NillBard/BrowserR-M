import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_ALL_CHARACTERS,
  SET_ALL_CHARACTERS,
} from "../constants";

export const addToFavorite = () => ({
  type: ADD_TO_FAVORITE,
});

export const removeFromFavorite = () => ({
  type: REMOVE_FROM_FAVORITE,
});

export const getAllCharacters = () => ({
  type: GET_ALL_CHARACTERS,
});

export const setAllCharacters = (payload) => ({
  type: SET_ALL_CHARACTERS,
  payload,
});
