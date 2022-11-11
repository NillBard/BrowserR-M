import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useSearchParams } from "react-router-dom";
import CharacterCard from "./component/CharactersCard";
import FilterBar from "./component/FilterBar";

export default function MainWindow() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({ prev: "", next: "" });
  const location = useLocation();

  async function fetchCharaters() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character${location.search}`
      );
      const { info, results } = await response.json();
      console.log(getPageFromUrl("next", info.next));
      console.log("prev", getPageFromUrl(info.prev));
      console.log(info);
      setCharacters(results);
      setPages({
        prev: getPageFromUrl(info.prev),
        next: getPageFromUrl(info.next),
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  const getPageFromUrl = (url) => {
    if (url) {
      return url.substring(url.indexOf("?"));
    }
    return "";
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("species") || "";

  const speciesFilterCharacter = (value) => {
    if (value) {
      setSearchParams({ species: value });
    } else {
      searchParams.delete("species");
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    fetchCharaters();
  }, [location]);

  return (
    <>
      <FilterBar
        query={query}
        speciesFilterCharacter={speciesFilterCharacter}
      ></FilterBar>
      <div className="box-content max-w-7xl mx-auto py-6 px-12">
        <div className=" grid grid-cols-4 gap-4 ">
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
        <div className="flex justify-end mt-4">
          <p className="mr-12">Page 1 of 42</p>
          <nav>
            <Link to={`/characters${pages.prev}`} className="mr-2">
              &lt;&lt;Prev
            </Link>
            <Link to={`/characters${pages.next}`}>Next&gt;&gt;</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
