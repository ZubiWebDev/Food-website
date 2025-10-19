import React, { useState } from "react";
import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(foodData.map((d) => d.category))),
  ];
  const filtered =
    filter === "All" ? foodData : foodData.filter((d) => d.category === filter);

  function handleAdd(item) {
    alert(`${item.title} added to cart (demo)`);
  }

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Menu</h2>
      <p className="text-gray-600 mt-2">
        Explore our popular dishes — tap Add to try (demo).
      </p>

      <div className="mt-4 flex gap-3 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1 rounded-full border ${
              filter === c ? "bg-red-600 text-white" : ""
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <FoodCard key={item.id} item={item} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  );
}
