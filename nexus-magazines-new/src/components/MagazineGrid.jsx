import React from "react";

export default function MagazineGrid({ magazines, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {magazines.map((mag) => (
        <div
          key={mag.id}
          className="cursor-pointer p-2 bg-gray-800 rounded"
          onClick={() => onSelect(mag)}
        >
          <img src={mag.coverUrl} alt={mag.title} className="rounded" />
          <h3 className="text-center mt-2 text-white">{mag.title}</h3>
        </div>
      ))}
    </div>
  );
}
