import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Character from "./component/Character";
import Favourites from "./component/Favorite";
import { Layout } from "./component/Layout";
import Login from "./component/Logins";
import NotFoundPage from "./component/NotFoundPage";
import SignUp from "./component/SignUp";
import MainWindow from "./MainWindow";
import { getFavourite } from "./redux/actions/actionCreatore";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("FAV_CHARS")) || [];
    dispatch(getFavourite(favourites));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="characters" />} />
          <Route path="characters" element={<MainWindow />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
