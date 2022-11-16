import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharactersCard";
import { removeFromFavorite } from "../redux/actions/actionCreatore";

export default function Favourites() {
  const favourite = useSelector((store) => store?.favourite?.favouriteChars);
  const dispatch = useDispatch();

  console.log(favourite);

  const isFavourite = (id) => {
    return !!favourite.find((el) => el.id === id);
  };

  const handleRemove = (id) => {
    const newFav = favourite.filter((el) => el.id !== id);
    dispatch(removeFromFavorite(newFav));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  return (
    <div className="box-content max-w-7xl mx-auto py-6 px-12">
      <div className=" grid grid-cols-4 gap-4 ">
        {favourite.length > 0 ? (
          favourite.map((el) => (
            <NavLink key={el.id} to={`/character/${el.id}`}>
              <CharacterCard
                id={el.id}
                src={el.image}
                name={el.name}
                status={el.status}
                species={el.species}
                isFavourite={isFavourite}
                remove={handleRemove}
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
