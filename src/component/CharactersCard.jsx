import React from "react";

export default function CharacterCard({
  id,
  src,
  name,
  status,
  species,
  add,
  remove,
  isFavourite,
}) {
  const toggleFavourite = (event) => {
    event.preventDefault();
    isFavourite(id) ? remove(id) : add(id);
  };

  return (
    <div className="border border-[#afafaf]  rounded overflow-hidden">
      <img className="object-cover w-full h-[200px]" src={src} />
      <div className="p-4 box-content leading-[18px] text-[16px]">
        <h4 className="mb-2 font-bold ">{name}</h4>
        <p className="mb-2">
          {species} - {status}
        </p>
        <button
          onClick={toggleFavourite}
          className="bg-black p-2 text-white text-[14px] leading-[16px] rounded border-none cursor-pointer"
        >
          {isFavourite(id) ? "Remove from Favourite" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
}
