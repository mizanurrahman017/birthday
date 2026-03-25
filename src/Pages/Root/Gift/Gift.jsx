import React from "react";

const Gift = () => {
  return (
    <div className="min-h-screen bg-[#5b0a0a] text-white flex flex-col items-center justify-center px-4">
      
      {/* Title Top */}
      <p className="text-sm opacity-70 mb-2">
        Step 1: Set the Atmosphere
      </p>

      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-serif text-center mb-10 text-yellow-100">
        The Soundtracks That's Remind's <br /> me of us
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1 */}
        <div className="bg-pink-300 text-black p-4 rounded-lg shadow-lg w-56">
          <div className="h-40 bg-pink-200 rounded mb-3 flex items-center justify-center text-sm">
            Song Image
          </div>
          <p className="text-center mt-2">At My Worst</p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-300 text-black p-4 rounded-lg shadow-lg w-56 scale-105">
          <div className="h-40 bg-blue-200 rounded mb-3 flex items-center justify-center text-sm">
            Song Image
          </div>
          <p className="text-center mt-2 font-semibold">Perfect</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 text-black p-4 rounded-lg shadow-lg w-56">
          <div className="h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-sm">
            Song Image
          </div>
          <p className="text-center mt-2">Until I Found You</p>
        </div>
      </div>

      {/* Button */}
      <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
        VIEW OUR SCRAPBOOK 💌
      </button>
    </div>
  );
};

export default Gift;