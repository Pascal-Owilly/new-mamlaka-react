import { useState } from "react";
import { logo } from "../assets"; // Import logo
import { navLinks, CaretIcon } from "../constants"; // Import navigation links and caret icon
import { CloseIcon, MenuIcon } from "./icons"; // Import close and menu icons
import "./Nav.css"; // Import styles for the navbar

const Navbar = () => {
  const [active, setActive] = useState("Home"); // Active link state
  const [dropdownOpen, setDropdownOpen] = useState(null); // Dropdown state
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close state

  // Toggles dropdown menu for desktop
  const toggleDropdown = (title) => {
    setDropdownOpen(dropdownOpen === title ? null : title);
  };

  return (
    <nav className="">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="h-16" />
        </a>

        {/* Desktop view */}
        <div className="hidden sm:flex sm:gap-x-4 sm:items-center">
          {navLinks.map((nav) => (
            <div key={nav.title} className="relative">
              <a
                href={nav.url || "#"}
                className={`cursor-pointer ${
                  active === nav.title ? "text-primary" : ""
                } hover:text-primary transition-colors flex items-center`}
                onClick={() => {
                  setActive(nav.title);
                  if (nav.dropdown) toggleDropdown(nav.title);
                }}
              >
                {nav.title}
                {/* Dropdown caret */}
                {nav.dropdown && (
                  <span className="ml-2" onClick={() => toggleDropdown(nav.title)}>
                    <CaretIcon />
                  </span>
                )}
              </a>

              {/* Dropdown menu for desktop */}
              {nav.dropdown && dropdownOpen === nav.title && (
                <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-lg" style={{ zIndex: 10, width: "300px" }}>
                  {nav.dropdown.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(null)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
{/* Mobile view */}
<div className="sm:hidden relative z-50 flex flex-1 justify-end items-center">
  {/* Menu toggle button */}
  <button className="size-7" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <MenuIcon /> : <CloseIcon />}
  </button>

  {/* Mobile menu */}
  <div
    className={[
      !isOpen ? "hidden" : "block",
      "py-6 bg-white shadow-xl absolute top-8 -right-2",
      "mx-4 my-2 min-w-[140px] rounded-lg border border-gray-200 sidebar",
    ].join(" ")}
  >
    {navLinks.map((nav) => (
      <div key={nav.title}>
        {/* Full clickable link that toggles the dropdown */}
        <a
          href={nav.url || "#"}
          className={`block min-w-64 px-6 py-2 cursor-pointer ${
            active === nav.title ? "text-primary" : ""
          } hover:text-primary transition-colors flex items-center`}
          onClick={() => {
            setActive(nav.title); // Set active tab
            if (nav.dropdown) toggleDropdown(nav.title); // Toggle dropdown if available
          }}
        >
          {nav.title}
          {nav.dropdown && (
            <span className="ml-2">
              <CaretIcon /> {/* Dropdown caret */}
            </span>
          )}
        </a>

        {/* Dropdown for mobile */}
        {nav.dropdown && dropdownOpen === nav.title && (
          <div className="mt-2 bg-white shadow-md rounded-lg">
            {nav.dropdown.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(null)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
