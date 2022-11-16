import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOneCharacters,
  removeFromFavorite,
  addToFavorite,
} from "../redux/actions/actionCreatore";

export default function Character() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((store) => store?.characters?.currentCharacter);
  const favouriteChars = useSelector(
    (store) => store?.favourite?.favouriteChars
  );

  const isFavourite = () => {
    return !!favouriteChars.find((el) => el.id === +id);
  };

  const handleAdd = () => {
    const newFav = [...favouriteChars, character];
    dispatch(addToFavorite(character));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  const handleRemove = () => {
    const newFav = favouriteChars.filter((el) => el.id !== +id);
    dispatch(removeFromFavorite(newFav));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  const toggleToFavourite = () => {
    isFavourite() ? handleRemove() : handleAdd();
  };

  useEffect(() => {
    dispatch(getOneCharacters(id));
  }, []);

  return (
    <div className="box-content max-w-7xl py-6 px-12 mx-auto">
      <div className=" border border-[#afafaf] flex justify-between rounded overflow-hidden">
        <div className="p-4 leading-[18px]">
          <h1 className="mb-2 leading-[37px] font-bold text-[32px]">
            {character.name}
          </h1>
          <p className=" mb-2">
            {character.species} - {character.status}
          </p>
          <p className="mb-2">
            Last known location: {character.location?.name}
          </p>

          <p className="mb-2">First seen in: {character.firstSeen}</p>
          <button
            onClick={toggleToFavourite}
            className="bg-black p-2 text-white text-[14px] leading-[16px] rounded border-none cursor-pointer"
          >
            {isFavourite() ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
        <img
          className="object-cover w-[300px] h-[300px]"
          src={character.image}
        />
      </div>
    </div>
  );
}
