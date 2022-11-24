import React, { useState } from "react";

export default function SearchInput({ query, search, clear }) {
  const [name, setName] = useState(query);

  const searchName = () => {
    console.log("add");
    search(name);
  };

  const clearInput = () => {
    clear();
    setName("");
  };

  return (
    <div className="flex leading-none text-[13.3333px]">
      <input
        type="text"
        className="py-2 px-1 border-t border-l border-b border-solid border-[#afafaf] rounded-l-sm placeholder:text-slate-500"
        placeholder="Search by name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        disabled={!name}
        onClick={searchName}
        className="p-2 border text-black text-center border-[#000] rounded-sm disabled:border-[#afafaf] disabled:text-[rgb(16,16,16,0.3)]"
      >
        Search
      </button>
      {query ? (
        <button
          onClick={clearInput}
          className="p-2 border text-black text-center border-none"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}
