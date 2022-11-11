import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-[#202428] w-full py-4">
      <div className="flex flex-row justify-between items-center max-w-7xl px-12 mx-auto">
        <nav>
          <NavLink
            to="/characters"
            className="text-white mr-2  opacity-[.70] hover:opacity-100 cursor-pointer "
          >
            Characters
          </NavLink>
          <NavLink
            to="/favourites"
            className="text-white mr-2 opacity-[.70] hover:opacity-100 cursor-pointer"
          >
            Favourites
          </NavLink>
        </nav>
        <div className="text-white h-[27px]">
          <span className="text-[20px]">♡</span> 8
        </div>
      </div>
    </div>
  );
}
