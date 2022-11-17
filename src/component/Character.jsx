import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCharacters } from "../redux/actions/actionCreatore";
import ToggleFavouriteButton from "./ToggleFavoriteButton";

export default function Character() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((store) => store?.characters?.currentCharacter);

  useEffect(() => {
    dispatch(getOneCharacters(id));
  }, [dispatch]);

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
          <ToggleFavouriteButton character={character} />
        </div>
        <img
          className="object-cover w-[300px] h-[300px]"
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
}
