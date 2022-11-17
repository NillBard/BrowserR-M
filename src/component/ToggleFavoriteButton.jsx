import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorite,
  addToFavorite,
  clearNotification,
} from "../redux/actions/actionCreatore";

export default function ToggleFavouriteButton({ character }) {
  const dispatch = useDispatch();
  const favouriteChars = useSelector(
    (store) => store?.favourite?.favouriteChars
  );

  const isFavourite = () => {
    return !!favouriteChars.find((el) => el.id === character.id);
  };

  const handleAdd = (date) => {
    const newFav = [...favouriteChars, character];
    dispatch(addToFavorite({ date, character }));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  const handleRemove = (date) => {
    const newFav = favouriteChars.filter((el) => el.id !== character.id);
    dispatch(removeFromFavorite({ date, character }));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  const removeNotification = (date) => {
    setTimeout(() => dispatch(clearNotification(date)), 5000);
  };

  const toggleToFavourite = (e) => {
    const date = Date.now();
    e.preventDefault();
    isFavourite() ? handleRemove(date) : handleAdd(date);
    removeNotification(date);
  };

  return (
    <button
      onClick={toggleToFavourite}
      className="bg-black p-2 text-white text-[14px] leading-[16px] rounded border-none cursor-pointer"
    >
      {isFavourite() ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
}
