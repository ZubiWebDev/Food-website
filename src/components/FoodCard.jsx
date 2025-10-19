import React from "react";

export default function FoodCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="h-36 rounded-lg overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">{item.price}</div>
        <button
          onClick={() => onAdd(item)}
          className="px-3 py-1 rounded-md border"
        >
          Add
        </button>
      </div>
    </div>
  );
}
