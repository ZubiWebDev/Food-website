import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar onOpenMenu={() => setShowOrder(true)} />
      <Hero />
      <main>
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />

      {showOrder && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h4 className="text-lg font-bold">Order Demo</h4>
            <p className="text-gray-600 mt-2">
              This is a demo order modal. Integrate a cart or real checkout to
              accept orders.
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowOrder(false)}
                className="px-4 py-2 border rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowOrder(false);
                  alert("Checkout demo (no payment)");
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
