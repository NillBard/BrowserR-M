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
      const favourite = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];
      const newFav = [...favourite];
      newFav.push(payload);
      localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
      return { ...state, count: state.count + 1, favouriteChars: newFav };
    }
    case REMOVE_FROM_FAVORITE: {
      const storage = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];
      console.log(payload);
      const newFav = storage.filter((el) => el.id !== payload);
      console.log(newFav);
      localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
      return { ...state, count: state.count - 1, favouriteChars: newFav };
    }
    case SET_FAVORITE: {
      const storage = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];
      const counter = storage.length;
      return { ...state, count: counter, favouriteChars: storage };
    }
    default:
      return state;
  }
};

export default favourite;
