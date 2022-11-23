import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/consts";

export default function Header() {
  const count = useSelector((store) => store?.favourite?.count);
  const user = useSelector((store) => store?.user?.token);

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
        {user ? (
          <div className="text-white h-[27px]">
            <span className="text-[20px]">♡</span> {count}
          </div>
        ) : (
          <div>
            <NavLink
              to={LOGIN_ROUTE}
              className="text-white py-1 px-2 border rounded-md mr-4 hover:bg-white hover:text-black"
            >
              Login
            </NavLink>
            <NavLink
              to={SIGNUP_ROUTE}
              className="text-white py-1 px-2 border rounded-md hover:bg-white hover:text-black"
            >
              SignUp
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
