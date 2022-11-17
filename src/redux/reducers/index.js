import { combineReducers } from "redux";
import favourite from "./favourite";
import characters from "./characters";
import notifications from "./notification";
import { reducer as formReducer } from "redux-form";

const reducer = combineReducers({
  favourite,
  characters,
  notifications,
  form: formReducer,
});

export default reducer;
