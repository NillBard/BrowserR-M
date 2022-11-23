import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const user = useSelector((store) => store?.user?.token);
  const navigate = useNavigate();

  const isFavourite = () => {
    return !!favouriteChars.find((el) => el.id === character.id);
  };

  const handleAdd = (date) => {
    dispatch(addToFavorite({ date, id: character.id, name: character.name }));
  };

  const handleRemove = (date) => {
    dispatch(
      removeFromFavorite({ date, id: character.id, name: character.name })
    );
  };

  const removeNotification = (date) => {
    setTimeout(() => dispatch(clearNotification(date)), 5000);
  };

  const toggleToFavourite = (e) => {
    e.preventDefault();
    if (user) {
      const date = Date.now();
      isFavourite() ? handleRemove(date) : handleAdd(date);
      removeNotification(date);
    } else {
      return navigate("/login");
    }
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
