import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  async function fetchCharacter() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    const firstSeen = await fetchSeen(data.episode[0]);
    const newCharacter = { ...data, firstSeen };
    setCharacter(newCharacter);
  }

  async function fetchSeen(first) {
    try {
      const response = await fetch(first);
      const data = await response.json();
      return data.name;
    } catch (error) {
      throw new Error(error);
    }
  }
  useEffect(() => {
    console.log("here");
    fetchCharacter();
  }, []);

  console.log(character);

  return (
    <div className="py-6 px-12">
      <div className="border border-[#afafaf] flex justify-between rounded overflow-hidden">
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
          <button className="bg-black p-2 text-white text-[14px] rounded border-none cursor-pointer">
            Add To Favourites
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
