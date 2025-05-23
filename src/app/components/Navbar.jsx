"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Search from "./Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <section className="navbar sticky top-0 z-[9999] h-26 max-lg:h-fit bg-white max-lg:py-3 flex flex-col justify-center animate__animated animate__fadeIn">
        <div className="container mx-auto flex items-center px-12 py-2 max-lg:px-5">
          <button className="mr-3 hidden max-lg:block" onClick={toggleMenu}>
            <FiMenu className="text-xl" />
          </button>

          <div className="navbar-left flex items-center w-1/4 max-lg:w-2/5">
            <Link href="/">
              <Image src={logo} alt="logo" width={180} height={100} />
            </Link>
          </div>

          <div
            ref={menuRef}
            className={`navbar-center w-1/2 flex justify-center max-lg:fixed max-lg:bg-white max-lg:h-screen max-lg:w-11/12 max-lg:top-0 max-lg:left-0 max-lg:z-50 max-lg:shadow-md max-lg:duration-300 max-lg:py-18 ${
              isMenuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
            }`}
          >
            <button
              className="absolute top-5 right-5 text-2xl max-lg:block hidden"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <IoClose />
            </button>
            <ul className="flex items-center gap-8 max-lg:flex-col max-col-justify-center max-lg:gap-10 max-lg:py-10 max-sm:w-full ">
              <li className="text-black hover:text-[#92855c] duration-300 ">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-black hover:text-[#92855c] duration-300">
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="text-black hover:text-[#92855c] duration-300">
                <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li className="text-black hover:text-[#92855c] duration-300">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right flex items-center justify-end gap-4 w-1/4 max-lg:w-3/5">
            <ul className="flex items-center gap-4">
              <li className="text-black hover:text-[#92855c] duration-300 text-2xl">
                <Link href={""} onClick={toggleSearch}>
                  <CiSearch />
                </Link>
              </li>

              <li className="text-black hover:text-[#92855c] duration-300 text-2xl">
                <Link href="/login">
                  <CiUser />
                </Link>
              </li>

              <li className="text-black hover:text-[#92855c] duration-300 text-2xl ">
                <Link href="/">
                  <CiHeart />
                </Link>
              </li>
              <li className="text-black hover:text-[#92855c] duration-300 text-2xl">
                <Link href="/">
                  <CiShoppingCart />
                </Link>
              </li>

              {/* <li className="text-black hover:text-[#92855c] duration-300 text-lg">
                <Link href="/">
                  <Image
                    src={
                      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
                    }
                    width={20}
                    height={20}
                    className="rounded-full"
                  ></Image>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
    </>
  );
};

export default Navbar;
