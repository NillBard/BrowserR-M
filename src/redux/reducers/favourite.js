import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SET_FAVORITE,
} from "../constants";

const favourite = (
  state = { count: 0, favouriteChars: [] },
  { type, payload }
) => {
  switch (type) {
    case ADD_TO_FAVORITE: {
      return {
        ...state,
        count: state.count + 1,
        favouriteChars: [...state.favouriteChars, payload.character],
      };
    }
    case REMOVE_FROM_FAVORITE: {
      return {
        ...state,
        count: state.count - 1,
        favouriteChars: state.favouriteChars.filter(
          (el) => el.id !== payload.character.id
        ),
      };
    }
    case SET_FAVORITE: {
      return { ...state, count: payload.length, favouriteChars: payload };
    }
    default:
      return state;
  }
};

export default favourite;
