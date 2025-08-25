"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoChevronDown, IoClose } from "react-icons/io5";
import Search from "./Search";

const headerDetails = {
  logo: logo,
  menuItems: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
      title: "Products",
      href: "/products",
      subMenu: true,
      subMenuItems: [
        { title: "Category 1", href: "/products/category-1" },
        { title: "Category 2", href: "/products/category-2" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (title) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
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
      <section className="navbar sticky top-0 z-[9999] max-lg:h-fit bg-white max-lg:py-3 flex flex-col justify-center animate__animated animate__fadeIn">
        <div className="container mx-auto flex items-center px-12 py-0 max-lg:px-5 max-lg:py-2">
          <button className="mr-3 hidden max-lg:block" onClick={toggleMenu}>
            <FiMenu className="text-2xl" />
          </button>

          <div className="navbar-left flex items-center w-1/4 max-lg:w-2/6">
            <Link href="/">
              <Image
                src={headerDetails.logo}
                alt="logo"
                width={180}
                height={100}
              />
            </Link>
          </div>

          <div
            ref={menuRef}
            className={`navbar-center w-1/2 flex justify-center max-lg:fixed max-lg:bg-white max-lg:h-screen max-lg:w-10/12 max-lg:top-0 max-lg:left-0 max-lg:z-50 max-lg:shadow-md max-lg:justify-start max-lg:duration-300 max-lg:py-18 ${
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
            <ul className="flex items-center gap-8 max-lg:flex-col max-col-justify-center max-lg:gap-0 max-lg:py-10 max-lg:w-full max-lg:justify-start max-lg:mx-7">
              {headerDetails.menuItems.map((item) => (
                <li
                  key={item.title}
                  className="relative group text-black hover:text-[#92855c] duration-300 max-lg:w-full max-lg:border-t border-gray-200 max-lg:py-3 py-10"
                >
                  <div className="flex items-center justify-between max-lg:w-full">
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="flex items-center gap-1 max-lg:w-full"
                    >
                      {item.title}

                      {item.subMenu && (
                        <IoChevronDown className="max-lg:hidden" />
                      )}
                    </Link>

                    {item.subMenu && (
                      <button
                        type="button"
                        className="ml-2 text-lg max-lg:block hidden"
                        onClick={() => toggleSubMenu(item.title)}
                      >
                        <IoChevronDown
                          className={`transition-transform ${
                            openSubMenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  <ul
                    className={`${
                      item.subMenu
                        ? "absolute -left-[20%] mt-7 hidden group-hover:flex flex-col bg-white shadow-xl p-6 gap-2 max-lg:static max-lg:shadow-none max-lg:p-0 max-lg:mt-4 min-w-max animate__animated animate__fadeIn animate__faster"
                        : ""
                    } ${
                      openSubMenu === item.title
                        ? "max-lg:flex"
                        : "max-lg:hidden"
                    }`}
                  >
                    {item.subMenuItems?.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          onClick={toggleMenu}
                          className="block text-gray-600 hover:text-[#92855c] duration-300 py-1 my-1 max-lg:pl-2 text-sm"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
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
            </ul>
          </div>
        </div>
      </section>

      <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
    </>
  );
};

export default Navbar;
