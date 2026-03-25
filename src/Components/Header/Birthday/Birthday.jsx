import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Birthday = () => {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    const handleClick = () => {
        // 🎵 music play
        audioRef.current.play();

        // 🎁 new page navigate
        setTimeout(() => {
            navigate("/surprise");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-300 to-pink-500 flex items-center justify-center px-4">

            {/* 🎵 Audio */}
            {/* <button onClick={() => audioRef.current.play()}>
                Play Music
            </button> */}

            <audio ref={audioRef} src="/musix.mp3" loop />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-pink-600 text-white text-center p-6 rounded-2xl shadow-xl max-w-md w-full"
            >

                {/* Image */}
                <motion.div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                        src="/asif (2).jpeg"
                        alt="Love"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>

                <p className="text-sm opacity-80 mb-2 mt-5">
                    A Story Written in the Stars ✨
                </p>

                <h1 className="text-3xl font-bold font-serif mb-2">
                    Happy Birthday 🎂
                </h1>

                <h2 className="text-xl mb-4">
                    ❤️ To My Love
                </h2>

                <p className="text-sm mb-6">
                    A journey through my heart, just for you...
                </p>

                {/* Button */}
                <motion.button
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-500 transition duration-300"
                >
                    OPEN MY GIFT 🎁
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Birthday;