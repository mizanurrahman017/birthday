import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Scrapbook = () => {
  const navigate = useNavigate();
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="relative min-h-screen bg-pink-100 py-20 px-4 overflow-hidden">
      {/* Floating Hearts */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-500 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "100%"], opacity: [1, 0] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
          >
            ❤️
          </motion.span>
        ))}
      </motion.div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10 relative z-10 mt-10">
        💖 Our Beautiful Memories 💖
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition duration-300">
              💖 Memory {index + 1} 💖
            </div>
          </motion.div>
        ))}
      </div>

      {/* READ MY NOTE Button */}
      <div className="flex justify-center mt-8 relative z-10">
        <button
          onClick={() => navigate("/note")} // 👈 change to your target page path
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        >
          READ MY NOTE 💌
        </button>
      </div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Preview"
              className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Scrapbook;