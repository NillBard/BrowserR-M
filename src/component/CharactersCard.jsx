import React from "react";
import ToggleFavouriteButton from "./ToggleFavoriteButton";

export default function CharacterCard({
  character,
  src,
  name,
  status,
  species,
}) {
  return (
    <div className="border border-[#afafaf]  rounded overflow-hidden">
      <img className="object-cover w-full h-[200px]" src={src} alt={name} />
      <div className="p-4 box-content leading-[18px] text-[16px]">
        <h4 className="mb-2 font-bold ">{name}</h4>
        <p className="mb-2">
          {species} - {status}
        </p>
        <ToggleFavouriteButton character={character} />
      </div>
    </div>
  );
}
