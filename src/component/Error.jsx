import React from "react";

export default function Error({ string, id, remove }) {
  return (
    <div className="bg-red-700 text-white p-4 rounded m-2 flex justify-between">
      {string}
      <button onClick={() => remove(id)} className="ml-4  hover:">
        ✕
      </button>
    </div>
  );
}
