import { LOGOUT_USER, SET_USER } from "../constants";

const user = (state = { token: null }, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      return {
        ...state,
        token: payload,
      };
    }

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default user;
