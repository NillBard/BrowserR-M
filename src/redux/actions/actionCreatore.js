import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_ALL_CHARACTERS,
  SET_PAGE,
  GET_ONE_CHARACTER,
  SET_ONE_CHARACTER,
  SET_FAVORITE,
} from "../constants";

export const addToFavorite = (id) => ({
  type: ADD_TO_FAVORITE,
  payload: id,
});

export const removeFromFavorite = (id) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: id,
});

export const getAllCharacters = (payload) => ({
  type: GET_ALL_CHARACTERS,
  payload,
});

export const setCharacter = ({ characters, info }) => ({
  type: SET_PAGE,
  payload: {
    characters,
    info,
  },
});

export const getOneCharacters = (payload) => ({
  type: GET_ONE_CHARACTER,
  payload,
});

export const setOneCharacter = (payload) => ({
  type: SET_ONE_CHARACTER,
  payload,
});

export const getFavourite = () => ({
  type: SET_FAVORITE,
});
