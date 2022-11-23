import { ADD_TO_FAVORITE, SET_FAVORITE } from "../constants";

const favourite = (
  state = { count: 0, favouriteChars: [] },
  { type, payload }
) => {
  switch (type) {
    case SET_FAVORITE: {
      return { ...state, count: payload.length, favouriteChars: payload };
    }

    default:
      return state;
  }
};

export default favourite;
