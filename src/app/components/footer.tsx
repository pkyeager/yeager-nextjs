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
        <Link legacyBehavior href="legal">
          <a className="mb-2 text-sm">Legal Notice</a>
        </Link>

        <Link legacyBehavior href="/terms" onClick={handleLinkClick}>
          <a className="mb-2 text-sm">Terms of Service</a>
        </Link>
        <Link legacyBehavior href="/privacy" onClick={handleLinkClick}>
          <a className="mb-2 text-sm">Privacy</a>
        </Link>
        <Link legacyBehavior href="/contact" onClick={handleLinkClick}>
          <a className="mb-2 text-sm">Contact Us</a>
        </Link>
        <Link
          legacyBehavior
          href="https://twitter.com/yourusername"
          onClick={handleLinkClick}
        >
          <a className="mb-2 text-sm">X</a>
        </Link>
        <Link
          legacyBehavior
          href="https://instagram.com/yourusername"
          onClick={handleLinkClick}
        >
          <a className="mb-2 text-sm">Instagram</a>
        </Link>
      </div>
      <div className="mt-4">
        {/* <p className="text-xs">© {new Date().getFullYear()} Yeager GmbH</p> */}
      </div>
    </footer>
  );
};

export default Footer;
