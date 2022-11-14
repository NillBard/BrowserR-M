import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useSearchParams } from "react-router-dom";
import CharacterCard from "./component/CharactersCard";
import FilterBar from "./component/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
  getAllCharacters,
} from "./redux/actions/actionCreatore";

export default function MainWindow() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const characters = useSelector((store) => store?.characters?.characters);

  async function fetchCharaters() {
    try {
      dispatch(getAllCharacters());
    } catch (error) {
      throw new Error(error);
    }
  }
  const querySpecies = searchParams.get("species") || "";
  const queryPage = +searchParams.get("page") || 1;
  const queryString = new URLSearchParams(searchParams);

  const speciesFilterCharacter = (value) => {
    if (value) {
      setSearchParams({ species: value });
    } else {
      searchParams.delete("species");
      setSearchParams(searchParams);
    }
  };

  const changePageNum = (num) => {
    queryString.set("page", queryPage + num);
    return queryString.toString();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCharaters();
  }, [location]);

  const handleAdd = () => {
    dispatch(addToFavorite());
  };

  const handleRemove = () => {
    dispatch(removeFromFavorite());
  };

  return (
    <>
      <FilterBar
        query={querySpecies}
        speciesFilterCharacter={speciesFilterCharacter}
      />
      <div>
        <button className="h-4 w-4 bg-indigo-500 mr-4" onClick={handleRemove}>
          -
        </button>
        <button className="h-4 w-4 bg-indigo-500" onClick={handleAdd}>
          +
        </button>
      </div>
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
          <p className="mr-12">Page {queryPage} of 42</p>
          <nav>
            <Link to={`/characters?${changePageNum(-1)}`} className="mr-2">
              &lt;&lt;Prev
            </Link>
            <Link to={`/characters?${changePageNum(+1)}`}>Next&gt;&gt;</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
