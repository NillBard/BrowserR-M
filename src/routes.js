import Character from "./component/Character";
import Favourites from "./component/Favorite";
import Login from "./component/Logins";
import SignUp from "./component/SignUp";
import MainWindow from "./MainWindow";
import {
  CHARACTERS_ROUTE,
  CHARACTER_ROUTE,
  FAVOURITES_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "./utils/consts";

export const publicRoutes = {
  withoutLayout: [
    {
      path: LOGIN_ROUTE,
      Component: <Login />,
    },
    {
      path: SIGNUP_ROUTE,
      Component: <SignUp />,
    },
  ],

  withLayout: [
    {
      path: CHARACTERS_ROUTE,
      Component: <MainWindow />,
    },
    {
      path: CHARACTER_ROUTE + "/:id",
      Component: <Character />,
    },
  ],
};

export const privateRoutes = [
  {
    path: FAVOURITES_ROUTE,
    Component: <Favourites />,
  },
];
