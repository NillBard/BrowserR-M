import { combineReducers } from "redux";
import favourite from "./favourite";
import characters from "./characters";

const reducer = combineReducers({ favourite, characters });

export default reducer;
