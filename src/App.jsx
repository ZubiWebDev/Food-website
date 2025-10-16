import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Margherita Pizza",
    price: "$9.99",
    desc: "Classic pizza with fresh mozzarella, basil & tomato sauce.",
    img: "images/margherita-pizza.jpg",
    category: "Pizza",
  },
  {
    id: 2,
    title: "Cheeseburger",
    price: "$8.50",
    desc: "Juicy beef patty, cheddar, lettuce, tomato & special sauce.",
    img: "images/cheseburger.jpg",
    category: "Burgers",
  },
  {
    id: 3,
    title: "Caesar Salad",
    price: "$7.25",
    desc: "Crisp romaine, parmesan, croutons & Caesar dressing.",
    img: "images/Caesar Salad.jpg",
    category: "Salads",
  },
  {
    id: 4,
    title: "Sushi Platter",
    price: "$14.99",
    desc: "Fresh selection of nigiri and rolls, served with soy & wasabi.",
    img: "images/SushiPlatter.jpg",
    category: "Sushi",
  },
  {
    id: 5,
    title: "Tacos al Pastor",
    price: "$6.50",
    desc: "Marinated pork, pineapple, cilantro & onion on soft corn tortillas.",
    img: "images/TacosalPastor.jpg",
    category: "Tacos",
  },
];

function Navbar({ onOpenMenu }) {
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

function Hero() {
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

          <div className="mt-8 grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <strong>30+</strong> Daily specials
            </div>
            <div className="flex items-center gap-3">
              <strong>4.8★</strong> Customer rating
            </div>
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

function FoodCard({ item, onAdd }) {
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

function Menu() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(data.map((d) => d.category))),
  ];
  const filtered =
    filter === "All" ? data : data.filter((d) => d.category === filter);

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

function About() {
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

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function submit(e) {
    e.preventDefault();
    alert(`Thanks ${form.name || "friend"}! Message received (demo).`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold">Contact</h3>
      <p className="text-gray-600 mt-2">
        Questions? Catering requests? Send us a message.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="px-4 py-2 border rounded-md"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="px-4 py-2 border rounded-md"
        />
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
          className="px-4 py-2 border rounded-md"
          rows={4}
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Send
          </button>
          <button
            type="button"
            onClick={() => setForm({ name: "", email: "", message: "" })}
            className="px-4 py-2 border rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="p-6 bg-white-900 text-black py-20">
      <div className="container mx-auto">
        {/* Logo Left Side */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            F
          </div>
          <div>
            <div className="font-bold">Foodie</div>
            <div className="text-xs text-gray-500">Delicious delivered</div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 text-center">
          <div className="flex flex-col space-y-4 text-black items-center">
            <h2 className="font-medium">Menu</h2>
            <div className="flex flex-col space-y-2 text-sm text-black items-center">
              <a rel="noopener noreferrer" href="#">
                Pizza
              </a>
              <a rel="noopener noreferrer" href="#">
                Burger
              </a>
              <a rel="noopener noreferrer" href="#">
                Salad
              </a>
              <a rel="noopener noreferrer" href="#">
                Shushi
              </a>
              <a rel="noopener noreferrer" href="#">
                Tacos
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium">Services</h2>
            <div className="flex flex-col space-y-2 text-sm text-black items-center">
              <a rel="noopener noreferrer" href="#">
                About us
              </a>
              <a rel="noopener noreferrer" href="#">
                contact
              </a>
              <a rel="noopener noreferrer" href="#">
                Catering
              </a>
              <a rel="noopener noreferrer" href="#">
                Home Delivery
              </a>
              <a rel="noopener noreferrer" href="#">
                Online
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium">Opening Hours</h2>
            <div className="flex flex-col space-y-2 text-sm text-black items-center">
              <a rel="noopener noreferrer" href="#">
                Mon – Fri: 10am – 10pm
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium  ">Community</h2>
            <div className="flex flex-col space-y-2 text-sm text-white items-center ">
              <a
                rel="noopener noreferrer"
                href="https://web.whatsapp.com/"
                className="bg-green-400"
              >
                Whatsapp
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/share/1GPbufaXSb/"
                className="bg-green-400"
              >
                Facebook
              </a>

              <a
                rel="noopener noreferrer"
                href=" https://www.instagram.com/chzubair.official?igsh=MWptNTM3Znk1ajdqNA=="
                className="bg-green-400"
              >
                Instagram
              </a>
              <a
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/u/0/#inbox"
                className="bg-green-400"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center px-6 pt-12 text-sm text-white">
          <span>© Copyright 1986. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

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
