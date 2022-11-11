import React from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function FilterBar() {
  const filter = [
    { id: "species-All", value: "All" },
    { id: "species-Human", value: "Human" },
    { id: "species-Animal", value: "Animal" },
    { id: "species-Alien", value: "Alien" },
  ];

  const [searchParams] = useSearchParams();
  return (
    <section className=" bg-[#f2f2f2] py-4">
      <div className="max-w-7xl mx-auto flex px-12 items-center">
        <div className="mr-4 h-[33px] flex  border border-black divide-x divide-black rounded ">
          {filter.map((el) => (
            <label
              key={el.id}
              className=" py-1 px-2 border-black cursor-pointer hover:bg-neutral-500"
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
