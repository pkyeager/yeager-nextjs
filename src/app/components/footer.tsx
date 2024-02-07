// footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    alert("These links are under development.");
  };

  return (
    <footer className="bg-gray-800 text-white p-4 items-center w-full mt-36 text-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="/legal" className="mb-2 text-sm">
          Legal Notice
        </a>

        <a href="/terms" className="mb-2 text-sm" onClick={handleLinkClick}>
          Terms of Service
        </a>
        <a href="/privacy" className="mb-2 text-sm" onClick={handleLinkClick}>
          Privacy
        </a>
        <a href="/contact" className="mb-2 text-sm" onClick={handleLinkClick}>
          Contact Us
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="mb-2 text-sm"
          onClick={handleLinkClick}
        >
          X
        </a>
        <a
          href="https://instagram.com/yourusername"
          className="mb-2 text-sm"
          onClick={handleLinkClick}
        >
          Instagram
        </a>
      </div>
      <div className="mt-4">
        {/* <p className="text-xs">© {new Date().getFullYear()} Yeager GmbH</p> */}
      </div>
    </footer>
  );
};

export default Footer;
