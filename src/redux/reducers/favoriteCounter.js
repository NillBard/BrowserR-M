import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../constants";

const favouriteCounter = (state = { count: 0 }, { type }) => {
  switch (type) {
    case ADD_TO_FAVORITE:
      return { ...state, count: state.count + 1 };
    case REMOVE_FROM_FAVORITE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default favouriteCounter;
