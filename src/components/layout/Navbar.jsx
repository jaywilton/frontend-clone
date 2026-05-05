import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Explore", path: "/explore" },
    { name: "Learn", path: "/learn" },
    { name: "Individuals", path: "/" },
    { name: "Businesses", path: "/" },
    { name: "Developers", path: "/" },
    { name: "Company", path: "/" },
  ];

  return (
    <>
      <div className="bg-red-400 text-black text-center text-xs py-1.5 font-medium">
        This is a student demo project — not associated with or endorsed by
        Coinbase
      </div>
      <header className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex-shrink-0">
            <img src="/image/Capture.PNG" alt="Coinbase Logo" className="h-6" />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 font-bold text-[15px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive && link.path !== "/"
                    ? "text-blue-600 transition-colors"
                    : "text-gray-900 hover:text-blue-600 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/sign-in"
            className="text-[14px] font-bold text-gray-900 hover:text-blue-600 transition-colors hidden md:block"
          >
            Sign in
          </Link>
          <Link to="/get-started">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-[14px] hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </button>
          </Link>
          <button className="lg:hidden text-gray-900 text-2xl">
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
