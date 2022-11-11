import React from "react";

export default function CharacterCard({ src, name, status, species }) {
  return (
    <div className="border border-[#afafaf] rounded overflow-hidden">
      <img className="object-cover w-full h-[200px]" src={src} />
      <div className="p-4 leading-none">
        <h4 className="mb-2 font-bold text-[18px]">{name}</h4>
        <p className="mb-2">
          {species} - {status}
        </p>
        <button className="bg-black p-2 text-white text-[14px] rounded border-none cursor-pointer">
          Add To Favourites
        </button>
      </div>
    </div>
  );
}