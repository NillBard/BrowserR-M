import { combineReducers } from "redux";
import favouriteCounter from "./favoriteCounter";
import characters from "./characters";

const reducer = combineReducers({ favouriteCounter, characters });

export default reducer;
