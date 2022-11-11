import React from "react";

export default function SearchInput() {
  return (
    <div className="flex leading-none text-[13.3333px]">
      <input
        type="text"
        className="py-2 px-1 border-t border-l border-b border-solid border-[#afafaf] rounded-l-sm"
        placeholder="Search by name..."
      />
      <button
        disabled={true}
        className="p-2 border text-black text-center border-[#000] rounded-sm disabled:border-[#afafaf] disabled:text-[#afafaf]"
      >
        Search
      </button>
    </div>
  );
}
