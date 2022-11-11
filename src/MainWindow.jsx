import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CharacterCard from "./component/CharactersCard";
import FilterBar from "./component/FilterBar";

export default function MainWindow() {
  const [characters, setCharacters] = useState([]);
  async function fetchCharaters() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      console.log(results);
      setCharacters(results);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchCharaters();
  }, []);
  return (
    <>
      <FilterBar></FilterBar>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 py-6 px-12">
        {characters.map((el) => (
          <NavLink key={el.id} to={`/character/${el.id}`}>
            <CharacterCard
              src={el.image}
              name={el.name}
              status={el.status}
              species={el.species}
            />
          </NavLink>
        ))}
      </div>
    </>
  );
}
