import React, { useEffect, useState } from "react";

const messages = [
    "To my everything,",
    "I build this space because words alone aren’t enough to describe how special you are to me.",
    "You are my home, my laughter and my favourite adventure.",
    "Thank you for choosing me every single day.",
    "Happy birthday my beautiful love.",
    "Forever yours,",
    "Me."
];

const questions = [
    {
        question: "What is my absolute favorite thing about you?",
        options: [
            { text: "Your smile", isCorrect: false },
            { text: "Your Heart", isCorrect: false },
            { text: "Your Kindness", isCorrect: false },
            { text: "Everything", isCorrect: true },
        ],
    },
    {
        question: "Where is my favorite place in the world?",
        options: [
            { text: "Paris", isCorrect: false },
            { text: "The Mountains", isCorrect: false },
            { text: "Wherever you are", isCorrect: true },
            { text: "The Beach", isCorrect: false },
        ],
    },
    {
        question: "How much do I Love You?",
        options: [
            { text: "A lot", isCorrect: false },
            { text: "More than words say", isCorrect: true },
            { text: "Infinity", isCorrect: false },
            { text: "100%", isCorrect: false },
        ],
    },
];

const Note = () => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState([]);
    const [showButton, setShowButton] = useState(false);

    // Quiz states
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showTryAgain, setShowTryAgain] = useState(false);
    const [showUnlockHeart, setShowUnlockHeart] = useState(false);
    const [heartUnlocked, setHeartUnlocked] = useState(false);

    // Typing effect
    useEffect(() => {
        if (messageIndex >= messages.length) {
            setShowButton(true);
            return;
        }

        if (letterIndex < messages[messageIndex].length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => {
                    const newLines = [...prev];
                    if (!newLines[messageIndex]) newLines[messageIndex] = "";
                    newLines[messageIndex] += messages[messageIndex][letterIndex];
                    return newLines;
                });
                setLetterIndex((prev) => prev + 1);
            }, 60);
            return () => clearTimeout(timer);
        } else {
            const nextTimer = setTimeout(() => {
                setMessageIndex((prev) => prev + 1);
                setLetterIndex(0);
            }, 800);
            return () => clearTimeout(nextTimer);
        }
    }, [letterIndex, messageIndex]);

    const handleOptionClick = (isCorrect) => {
        if (isCorrect) {
            if (currentQuestion === questions.length - 1) {
                setShowUnlockHeart(true);
            } else {
                setCurrentQuestion((prev) => prev + 1);
            }
            setShowTryAgain(false);
        } else {
            setShowTryAgain(true);
        }
    };

    return (
        <div className="relative min-h-screen bg-pink-400 flex items-center justify-center overflow-hidden px-4">

            {/* Floating Hearts */}
            {/* {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute text-red-400 text-2xl animate-slowFloat"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        >
          ❤️
        </span>
      ))} */}

            {/* Inline CSS for floating hearts */}
            <style>
                {`
        @keyframes slowFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(-400px) rotate(360deg); opacity: 0; }
        }
        .animate-slowFloat {
          animation-name: slowFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        `}
            </style>

            {/* Main Box */}
            <div className="relative z-10 w-full max-w-3xl px-8 py-10 bg-white/5 backdrop-blur-sm border border-white/40 shadow-xl text-white text-center rounded-xl overflow-hidden">

                {/* If quiz not started, show messages */}
                {!quizStarted && (
                    <>
                        <p className="text-sm tracking-widest mb-6 opacity-70">
                            A Message for You ❤️
                        </p>
                        <div className="space-y-4">
                            {displayedText.map((line, idx) => (
                                <p
                                    key={idx}
                                    className="text-2xl md:text-3xl font-serif leading-relaxed break-words"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>

                        {showButton && (
                            <button
                                onClick={() => setQuizStarted(true)}
                                className="mt-10 px-8 py-3 border border-white text-lg font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
                            >
                                ONE LAST THING
                            </button>
                        )}
                    </>
                )}

                {/* Quiz */}
                {quizStarted && !heartUnlocked && (
                    <div>
                        <p className="text-2xl md:text-3xl font-serif mb-6">
                            {questions[currentQuestion].question}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {questions[currentQuestion].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(opt.isCorrect)}
                                    className="px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-all"
                                >
                                    {opt.text}
                                </button>
                            ))}
                        </div>

                        {showTryAgain && (
                            <p className="mt-6 text-red-400 font-semibold text-lg">
                                Try Again!
                            </p>
                        )}

                        {showUnlockHeart && (
                            <button
                                onClick={() => setHeartUnlocked(true)}
                                className="mt-8 px-8 py-3 border border-white text-lg font-semibold tracking-wider hover:bg-white hover:text-black transition-all rounded-lg"
                            >
                                Unlock Heart
                            </button>
                        )}
                    </div>
                )}
                {/* <video
              src="/path-to-your-video.mp4"
              controls
              className="w-full rounded-lg shadow-lg"
            /> */}

                {/* Heart unlocked - show video/message */}
                {heartUnlocked && (
                    <div className="relative w-full max-w-3xl px-8 py-12 bg-[#3b0000] border border-white/40 rounded-xl text-center text-white z-10">
                        <video
                            src="/path-to-your-video.mp4"
                            controls
                            className="w-full rounded-lg shadow-lg"
                        />
                        <p className="text-xl mb-2 opacity-70">Certificate of My Heart</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Owner of My World</h1>
                        <p className="text-base md:text-lg mb-6">
                            Presented to You, for stealing my heart and making every second of my existence a beautiful dream.
                        </p>
                        <p className="text-3xl md:text-4xl font-serif mt-4">I Love You! ❤️</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Note;