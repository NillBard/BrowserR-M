import React from "react";

export default function Notification({ string, id, remove }) {
  return (
    <div className="bg-[#008000] text-white p-4 rounded m-2 flex justify-between">
      {string}{" "}
      <button onClick={() => remove(id)} className="ml-4  hover:">
        ✕
      </button>
    </div>
  );
}
