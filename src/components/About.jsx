import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">About Foodie</h3>
          <p className="mt-3 text-gray-600">
            Born from a love of honest flavors, Foodie crafts simple, craveable
            meals using seasonal ingredients and friendly service.
          </p>

          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Locally sourced produce</li>
            <li>• Daily-made sauces & breads</li>
            <li>• Fast delivery & pickup</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="images/kitchen.jpg"
            alt="Kitchen"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
