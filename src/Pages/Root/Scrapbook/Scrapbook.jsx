import React from "react";

const Scrapbook = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-10 px-4">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10">
        💖 Our Beautiful Memories 💖
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={img}
              alt="memory"
              className="w-full h-64 object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Scrapbook;