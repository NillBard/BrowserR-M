import Character from "./component/Character";
import Favourites from "./component/Favorite";
import Login from "./component/Logins";
import SignUp from "./component/SignUp";
import MainWindow from "./MainWindow";
import {
  CHARACTERS_ROUTE,
  FAVOURITES_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Comoinent: Login,
  },
  {
    path: SIGNUP_ROUTE,
    Comoinent: SignUp,
  },
];

export const privateRoutes = [
  {
    path: CHARACTERS_ROUTE,
    Comoinent: MainWindow,
  },
  {
    path: FAVOURITES_ROUTE,
    Comoinent: Favourites,
  },
  {
    path: CHARACTER_ROUTE + "/:id",
    Comoinent: Character,
  },
];
