import { CLEAR_ERROR, SET_ERROR } from "../constants";

const errorMessage = (state = { messeages: [] }, { type, payload }) => {
  switch (type) {
    case SET_ERROR: {
      return {
        ...state,
        messeages: [
          ...state.messeages,
          { id: payload.date, messeage: payload.messeage },
        ],
      };
    }

    case CLEAR_ERROR: {
      console.log(payload);
      return {
        ...state,
        messeages: state.messeages.filter((el) => el.id !== payload),
      };
    }
    default:
      return state;
  }
};

export default errorMessage;
