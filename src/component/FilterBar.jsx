import React from "react";
import SearchInput from "./SearchInput";

export default function FilterBar({
  speciesFilterCharacter,
  querySpecies,
  queryName,
  clear,
  search,
}) {
  const filter = [
    { id: "species-All", value: "All", species: "" },
    { id: "species-Human", value: "Human", species: "Human" },
    { id: "species-Animal", value: "Animal", species: "Animal" },
    { id: "species-Alien", value: "Alien", species: "Alien" },
  ];

  const selectFilter = (species) => {
    if (querySpecies !== species) {
      speciesFilterCharacter(species);
    }
  };

  return (
    <section className=" bg-[#f2f2f2] py-4">
      <div className="box-content max-w-7xl mx-auto flex px-12 items-center">
        <div className="mr-4 border border-black flex h-[27px] divide-x divide-black rounded ">
          {filter.map((el) => (
            <div
              key={el.id}
              onClick={() => selectFilter(el.species)}
              className={`${
                el.species === querySpecies
                  ? "activeStyle"
                  : "hover:bg-neutral-500"
              }  py-1 px-2 cursor-pointer flex items-center  `}
            >
              <span className="">{el.value}</span>
            </div>
          ))}
        </div>
        <SearchInput
          query={queryName}
          clear={clear}
          search={search}
        ></SearchInput>
      </div>
    </section>
  );
}
