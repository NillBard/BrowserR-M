import { SET_PAGE, SET_ONE_CHARACTER } from "../constants";

const initialState = {
  characters: [],
  pageInfo: {},
  currentCharacter: {},
};

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE: {
      return {
        ...state,
        characters: payload.results,
        pageInfo: payload.info,
      };
    }
    case SET_ONE_CHARACTER:
      return { ...state, currentCharacter: payload };
    default:
      return state;
  }
};

export default characters;
