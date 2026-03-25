import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Gift = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleClick = () => {
    // 🎵 Play music
    if (audioRef.current) {
      audioRef.current.play();
    }

    // 🎁 Navigate to Scrapbook page after 1s
    setTimeout(() => {
      navigate("/scrapbook");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-pink-600 text-white flex flex-col items-center justify-center px-4 py-10">
      
      {/* Audio */}
      <audio ref={audioRef} src="/music.mp3" />

      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-pink-700 p-6 rounded-2xl shadow-2xl max-w-5xl w-full text-center"
      >
        {/* Title */}
        <p className="text-sm opacity-70 mb-2">
          Step 1: Set the Atmosphere
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-6 text-yellow-100">
          The Soundtracks That's Remind's <br /> me of us
        </h1>

        {/* Song Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 justify-items-center">
          
          {/* Card 1 */}
          <div className="bg-pink-300 text-black p-4 rounded-lg shadow-lg w-56 hover:scale-105 transition duration-300">
            <div className="h-40 bg-pink-200 rounded mb-3 flex items-center justify-center text-sm">
              Song Image
            </div>
            <p className="text-center mt-2">At My Worst</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-300 text-black p-4 rounded-lg shadow-lg w-56 hover:scale-105 transition duration-300">
            <div className="h-40 bg-blue-200 rounded mb-3 flex items-center justify-center text-sm">
              Song Image
            </div>
            <p className="text-center mt-2 font-semibold">Perfect</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 text-black p-4 rounded-lg shadow-lg w-56 hover:scale-105 transition duration-300">
            <div className="h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-sm">
              Song Image
            </div>
            <p className="text-center mt-2">Until I Found You</p>
          </div>

        </div>

        {/* Scrapbook Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-700 transition duration-300"
        >
          VIEW OUR SCRAPBOOK 💌
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Gift;