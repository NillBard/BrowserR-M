import { combineReducers } from "redux";
import favourite from "./favourite";
import characters from "./characters";
import notifications from "./notification";
import errorMessage from "./error";
import { reducer as formReducer } from "redux-form";
import user from "./user";

const reducer = combineReducers({
  favourite,
  characters,
  notifications,
  user,
  errorMessage,
  form: formReducer,
});

export default reducer;
