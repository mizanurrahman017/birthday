import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white text-center py-6 mt-10">
      <p className="text-lg">
        Made with ❤️ for My Love
      </p>

      <p className="text-sm mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;