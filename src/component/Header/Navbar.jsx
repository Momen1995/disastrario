import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavRight from "./NavRight";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-3 w-full mx-auto px-4">
      {/* Logo */}
      <Logo />

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        <button className="text-gray-800 focus:outline-none">
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Nav Links - Hidden on mobile, visible on larger screens */}
      <div className="hidden lg:flex space-x-8">
        <NavLinks />
      </div>

      {/* NavRight - Hidden on mobile, visible on larger screens */}
      <div className="hidden lg:flex">
        <NavRight />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          {/* NavLinks in flex-col for mobile */}
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLinks isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
