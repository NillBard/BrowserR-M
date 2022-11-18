import { LOGOUT_USER, SET_USER } from "../constants";

const user = (state = { user: null }, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return { state };
  }
};

export default user;
