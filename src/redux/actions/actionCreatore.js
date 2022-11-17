import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_ALL_CHARACTERS,
  SET_PAGE,
  GET_ONE_CHARACTER,
  SET_ONE_CHARACTER,
  SET_FAVORITE,
  CLEAR_NOTIFICATION,
} from "../constants";

export const addToFavorite = ({ date, character }) => ({
  type: ADD_TO_FAVORITE,
  payload: { date, character },
});

export const removeFromFavorite = ({ date, character }) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: { date, character },
});

export const getAllCharacters = (payload) => ({
  type: GET_ALL_CHARACTERS,
  payload,
});

export const setCharacter = ({ results, info }) => ({
  type: SET_PAGE,
  payload: {
    results,
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

export const getFavourite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const clearNotification = (payload) => ({
  type: CLEAR_NOTIFICATION,
  payload,
});
