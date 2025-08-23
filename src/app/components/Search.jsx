import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Search = ({ isSearchOpen, toggleSearch }) => {
  const startY = useRef(null);
  const threshold = 50;
  useEffect(() => {
    if (isSearchOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSearchOpen]);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!startY.current) return;

    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY.current;

    if (diffY > threshold) {
      toggleSearch();
      startY.current = null;
    }
  };

  return (
    <section
      className={`search fixed top-0 shadow-lg z-[999999] h-screen w-full bg-white animate__animated animate__fadeInUp animate__faster transition-all duration-300 ease-in-out ${
        isSearchOpen ? "translate-y-0" : "translate-y-full"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="container mx-auto flex justify-center h-full px-12 py-2 max-lg:px-5 pt-28">
        <button
          className="absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={toggleSearch}
          aria-label="Close menu"
        >
          <IoClose />
        </button>
        <form className="w-2/3 max-lg:w-full">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border-b-1 focus-visible:outline-none p-2 text-xl relative"
              placeholder="Search for products..."
            />
            <CiSearch className="absolute right-2 top-4 text-xl" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
