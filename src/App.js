import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Character from "./component/Character";
import Favourites from "./component/Favorite";
import Header from "./component/Header";
import MainWindow from "./MainWindow";

function App() {
  return (
    <>
      <Header></Header>
      <div className="relative">
        <div className="absolute top-0 right-0"></div>
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<MainWindow />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="*" element={<div>NotFoundPage</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
