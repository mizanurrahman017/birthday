import React, { useState, useRef, useEffect } from "react";
import {
  FaHeart,
  FaBars,
  FaTimes,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Load from localStorage
  const [playing, setPlaying] = useState(
    JSON.parse(localStorage.getItem("musicPlaying")) || false
  );

  const [userInteracted, setUserInteracted] = useState(
    JSON.parse(localStorage.getItem("userInteracted")) || false
  );

  const audioRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "#gallery" },
  ];

  // ▶️ Play / Pause
  const handleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      localStorage.setItem("musicPlaying", false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          localStorage.setItem("musicPlaying", true);
          localStorage.setItem("userInteracted", true);
        })
        .catch(() => {
          console.log("Click required to play music");
        });
    }
  };

  // 🚀 Try autoplay on load
  useEffect(() => {
    if (playing && userInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          console.log("Autoplay blocked");
        });
    }
  }, []);

  // 🧠 Detect user interaction anywhere
  useEffect(() => {
    const handleFirstClick = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        localStorage.setItem("userInteracted", true);

        if (playing && audioRef.current) {
          audioRef.current.play();
        }
      }
    };

    window.addEventListener("click", handleFirstClick);

    return () => window.removeEventListener("click", handleFirstClick);
  }, [playing, userInteracted]);

  return (
    <>
      {/* 🎵 Audio */}
      <audio ref={audioRef} loop>
        <source src="/musix.mp3" type="audio/mpeg" />
      </audio>

      <nav className="bg-pink-500 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/asif (2).jpeg"
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
              <Link to="/">Happy Birthday 🎂💖</Link>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-yellow-200 flex items-center gap-1"
                >
                  {link.name} <FaHeart className="text-sm" />
                </a>
              </li>
            ))}
          </ul>

          {/* Music Button Desktop */}
          <button
            onClick={handleMusic}
            className="hidden md:flex items-center gap-2 bg-white text-pink-500 px-3 py-1 rounded-full"
          >
            {playing ? <FaPause /> : <FaPlay />}
            {playing ? "Pause" : "Play"}
          </button>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-pink-400 text-center py-4 space-y-4">

            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path} onClick={() => setOpen(false)}>
                  {link.name} 💖
                </a>
              </li>
            ))}

            {/* Mobile Music */}
            <li>
              <button
                onClick={handleMusic}
                className="bg-white text-pink-500 px-4 py-1 rounded-full"
              >
                {playing ? "Pause 🎵" : "Play 🎵"}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;