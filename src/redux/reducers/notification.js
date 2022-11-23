import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  CLEAR_NOTIFICATION,
} from "../constants";

const notifications = (state = { notifications: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TO_FAVORITE: {
      const string = `${payload.name} added to favourites`;
      return {
        ...state,
        notifications: [...state.notifications, { id: payload.date, string }],
      };
    }
    case REMOVE_FROM_FAVORITE: {
      const string = `${payload.name} removed from favourites`;
      return {
        ...state,
        notifications: [...state.notifications, { id: payload.date, string }],
      };
    }
    case CLEAR_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter((el) => payload !== el.id),
      };
    }
    default:
      return state;
  }
};

export default notifications;
