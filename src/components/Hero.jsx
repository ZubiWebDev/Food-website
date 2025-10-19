import React from "react";

export default function Hero() {
  return (
    <header className="bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fresh ingredients, bold flavors, quick service
          </h1>
          <p className="mt-4 text-gray-600">
            Signature dishes prepared daily with premium ingredients — delivered
            to your door or ready for pickup.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#menu"
              className="px-5 py-3 bg-red-600 text-white rounded-lg shadow"
            >
              See Menu
            </a>
            <a href="#contact" className="px-5 py-3 border rounded-lg">
              Contact Us
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="images/Hero-img.jpg"
            alt="Delicious food"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
