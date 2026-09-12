import logo from "../assets/logo-text.png"

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <img src={logo} alt="DevStack Logo" className="h-8" />

        {/* nav links - desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* buttons - desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="#signin" className="text-sm font-medium">Sign In</a>
          <a
            href="#signup"
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            Sign Up
          </a>
        </div>

        {/* hamburger button - mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* mobile menu - shows only when menuOpen is true */}
      {menuOpen && (
        <div className="w-full bg-white flex flex-col gap-4 p-6 md:hidden">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#signin">Sign In</a>
          <a
            href="#signup"
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 rounded-full"
          >
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
}