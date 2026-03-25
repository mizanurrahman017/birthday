import React, { useState } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#" },
    { name: "Gallery", path: "#gallery" },
    { name: "Wishes", path: "#wishes" },
    { name: "Surprise", path: "#surprise" },
  ];

  return (
    <nav className="bg-pink-500 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
       <h1 className="text-2xl font-bold">
  Happy Birthday, anila 🎂💖
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="hover:text-yellow-200 transition duration-300 flex items-center gap-1"
              >
                {link.name} <FaHeart className="text-sm" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-pink-400 text-center py-4 space-y-4 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.path} onClick={() => setOpen(false)}>
                {link.name} 💖
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;