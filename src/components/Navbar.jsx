import React from "react";

export default function Navbar({ onOpenMenu }) {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            F
          </div>
          <div>
            <div className="font-bold">Foodie</div>
            <div className="text-xs text-gray-500">Delicious delivered</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a className="hover:text-red-600" href="#menu">
            Menu
          </a>
          <a className="hover:text-red-600" href="#about">
            About
          </a>
          <a className="hover:text-red-600" href="#contact">
            Contact
          </a>
          <button
            className="px-4 py-2 rounded-md bg-red-600 text-white"
            onClick={onOpenMenu}
          >
            Order Now
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={onOpenMenu} className="px-3 py-2 rounded-md border">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
