// footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    alert("Under Development. Coming Soon!");
  };

  return (
    <footer className="bg-gray-800 text-white p-4 items-center w-full mt-36 text-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link legacyBehavior href="legal">
          <a className="mb-2 text-sm">Legal Notice</a>
        </Link>

        <Link legacyBehavior href="/terms">
          <a className="mb-2 text-sm" onClick={handleLinkClick}>Terms of Service</a>
        </Link>
        <Link legacyBehavior href="/privacy">
          <a className="mb-2 text-sm" onClick={handleLinkClick}>Privacy</a>
        </Link>
        <Link legacyBehavior href="mailto:management@yeager.gmbh">
          <a className="mb-2 text-sm">Contact Us</a>
        </Link>
        <Link  legacyBehavior href="https://twitter.com/yourusername">
          <a className="mb-2 text-sm" onClick={handleLinkClick}>X</a>
        </Link>
        <Link legacyBehavior href="https://instagram.com/yourusername">
          <a className="mb-2 text-sm" onClick={handleLinkClick}>Instagram</a>
        </Link>
      </div>
      <div className="mt-4">
        {/* <p className="text-xs">© {new Date().getFullYear()} Yeager GmbH</p> */}
      </div>
    </footer>
  );
};

export default Footer;