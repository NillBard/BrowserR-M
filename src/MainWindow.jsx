import React, { useEffect } from "react";
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
  const pageInfo = useSelector((store) => store?.characters?.pageInfo);
  const favouriteChars = useSelector(
    (store) => store?.favourite?.favouriteChars
  );

  const querySpecies = searchParams.get("species") || "";
  const queryPage = +searchParams.get("page") || 1;
  const queryName = searchParams.get("name") || "";
  const queryString = new URLSearchParams(searchParams);

  console.log("27", queryString.toString());

  const speciesFilterCharacter = (value) => {
    if (value) {
      setSearchParams({ species: value });
    } else {
      setSearchParams("");
    }
  };

  const setName = (name) => {
    queryString.set("name", name);
    console.log(queryString.toString());
    setSearchParams(queryString);
  };

  const clearInput = () => {
    searchParams.delete("name");
    searchParams.delete("page");
    setSearchParams(searchParams);
  };

  const changePageNum = (num) => {
    queryString.set("page", queryPage + num);
    return queryString.toString();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllCharacters(location.search));
  }, [location, dispatch]);

  const isFavourite = (id) => {
    return !!favouriteChars.find((el) => el.id === id);
  };

  const handleAdd = (id) => {
    const character = characters.find((el) => el.id === id);
    const newFav = [...favouriteChars, character];
    dispatch(addToFavorite(character));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  const nextPage = changePageNum(+1);
  const prevPage = changePageNum(-1);

  const handleRemove = (id) => {
    const newFav = favouriteChars.filter((el) => el.id !== id);
    dispatch(removeFromFavorite(newFav));
    localStorage.setItem("FAV_CHARS", JSON.stringify(newFav));
  };

  return (
    <>
      <FilterBar
        querySpecies={querySpecies}
        queryName={queryName}
        speciesFilterCharacter={speciesFilterCharacter}
        search={setName}
        clear={clearInput}
      />

      <div className="box-content max-w-7xl mx-auto py-6 px-12">
        <div className=" grid grid-cols-4 gap-4 ">
          {characters ? (
            characters.map((el) => (
              <NavLink key={el.id} to={`/character/${el.id}`}>
                <CharacterCard
                  id={el.id}
                  src={el.image}
                  name={el.name}
                  status={el.status}
                  species={el.species}
                  add={handleAdd}
                  remove={handleRemove}
                  isFavourite={isFavourite}
                />
              </NavLink>
            ))
          ) : (
            <div className="leading-[18px]">No cards</div>
          )}
        </div>
        <div className="leading-none flex justify-end mt-4">
          <p className="mr-12">
            Page {queryPage} of {pageInfo?.pages || 1}
          </p>
          <nav>
            <Link
              disabled={!pageInfo?.prev}
              to={`/characters?${prevPage}`}
              className="ml-2 mr-2"
            >
              &lt;&lt; Prev
            </Link>
            <Link disabled={!pageInfo?.next} to={`/characters?${nextPage}`}>
              {" "}
              <span> Next &gt;&gt;</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
