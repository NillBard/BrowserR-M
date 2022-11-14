import { SET_ALL_CHARACTERS } from "../constants";

const initialState = { characters: [], pageInfo: {} };

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_CHARACTERS:
      return { ...state, characters: [...state.characters, ...payload] };
    default:
      return state;
  }
};

export default characters;
