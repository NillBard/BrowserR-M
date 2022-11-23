import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFavourite } from "../redux/actions/actionCreatore";
import CharacterCard from "./CharactersCard";

export default function Favourites() {
  const favourite = useSelector((store) => store?.favourite?.favouriteChars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourite());
  }, []);

  return (
    <div className="box-content max-w-7xl mx-auto py-6 px-12">
      <div className=" grid grid-cols-4 gap-4 ">
        {favourite.length > 0 ? (
          favourite.map((el) => (
            <NavLink key={el.id} to={`/character/${el.id}`}>
              <CharacterCard
                character={el}
                src={el.image}
                name={el.name}
                status={el.status}
                species={el.species}
              />
            </NavLink>
          ))
        ) : (
          <div className="leading-[18px]">No cards</div>
        )}
      </div>
    </div>
  );
}
