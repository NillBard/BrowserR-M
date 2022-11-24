import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_ALL_CHARACTERS,
  SET_PAGE,
  GET_ONE_CHARACTER,
  SET_ONE_CHARACTER,
  SET_FAVORITE,
  CLEAR_NOTIFICATION,
  SET_USER,
  LOGOUT_USER,
  LOGIN_USER,
  SIGNUP_USER,
  AUTH_USER,
  GET_FAVORITE,
  REMOVE_ONE_FAVOURITE,
  SET_ONE_FAVOURITE,
  SET_ERROR,
  CLEAR_ERROR,
} from "../constants";

export const addToFavorite = ({ date, id, name }) => ({
  type: ADD_TO_FAVORITE,
  payload: { date, id, name },
});

export const removeFromFavorite = ({ date, id, name }) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: { date, id, name },
});

export const getAllCharacters = (payload) => ({
  type: GET_ALL_CHARACTERS,
  payload,
});

export const setPage = ({ results, info }) => ({
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

export const getFavourite = () => ({
  type: GET_FAVORITE,
});

export const setFavourite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const clearNotification = (payload) => ({
  type: CLEAR_NOTIFICATION,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const signupUser = (payload) => ({
  type: SIGNUP_USER,
  payload,
});

export const authUser = () => ({
  type: AUTH_USER,
});

export const setOneFavourite = (payload) => ({
  type: SET_ONE_FAVOURITE,
  payload,
});

export const removeOneFavourite = (payload) => ({
  type: REMOVE_ONE_FAVOURITE,
  payload,
});

export const setErorr = ({ date, messeage }) => ({
  type: SET_ERROR,
  payload: { date, messeage },
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});
