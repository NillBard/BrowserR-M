import React from "react";
import SearchInput from "./SearchInput";

export default function FilterBar({ speciesFilterCharacter, query }) {
  const filter = [
    { id: "species-All", value: "All", species: "" },
    { id: "species-Human", value: "Human", species: "Human" },
    { id: "species-Animal", value: "Animal", species: "Animal" },
    { id: "species-Alien", value: "Alien", species: "Alien" },
  ];

  return (
    <section className=" bg-[#f2f2f2] py-4">
      <div className="max-w-7xl mx-auto flex px-12 items-center">
        <div className="mr-4 h-[33px] flex  border border-black divide-x divide-black rounded ">
          {filter.map((el) => (
            <label
              key={el.id}
              onClick={() => speciesFilterCharacter(el.species)}
              className={`${
                el.species === query ? "activeStyle" : "hover:bg-neutral-500"
              } py-1 px-2 cursor-pointer `}
            >
              <span>{el.value}</span>
            </label>
          ))}
        </div>
        <SearchInput></SearchInput>
      </div>
    </section>
  );
}
