import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharactersCard";

export default function Favourites() {
  const favourite = useSelector((store) => store?.favourite?.favouriteChars);

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
