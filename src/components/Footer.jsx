import React from "react";

function Footer() {
  return (
    <footer className="p-10 bg-gray-900 text-white">
      <div className="container mx-auto space-y-10">

        {/* Logo Section */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
          <div>
            <div className="font-bold text-xl">Foodie</div>
            <div className="text-sm text-gray-400">Delicious Delivered</div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {/* Menu */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Menu</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Pizza</a></li>
              <li><a href="#">Burger</a></li>
              <li><a href="#">Salad</a></li>
              <li><a href="#">Sushi</a></li>
              <li><a href="#">Tacos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Services</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Home Delivery</a></li>
              <li><a href="#">Online</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Opening Hours</h2>
            <p className="text-gray-300 text-sm">Mon – Fri: 10am – 10pm</p>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Community</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://web.whatsapp.com/"
                className="bg-green-500 text-white py-1 px-3 rounded-md"
                target="_blank" rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/share/1GPbufaXSb/"
                className="bg-blue-600 text-white py-1 px-3 rounded-md"
                target="_blank" rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/chzubair.official?igsh=MWptNTM3Znk1ajdqNA=="
                className="bg-pink-500 text-white py-1 px-3 rounded-md"
                target="_blank" rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                target="_blank" rel="noopener noreferrer"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6 text-sm text-gray-400">
          © 2025 Foodie. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
