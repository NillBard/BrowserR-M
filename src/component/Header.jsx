import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((store) => store?.favourite?.count);

  return (
    <div className="bg-[#202428] w-full py-4">
      <div className="box-content flex flex-row justify-between items-center max-w-7xl px-12 mx-auto">
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
          <span className="text-[20px]">♡</span> {count}
        </div>
      </div>
    </div>
  );
}
