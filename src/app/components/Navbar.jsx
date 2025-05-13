import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingCart,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="top-bar bg-black text-white ">
        <div className="container mx-auto flex justify-between items-center px-5 py-1 font-light">
          <div className="topBar-left flex items-center gap-4 text-sm font-light">
            <Link
              href="mailto:kanani.manan5@gmail.com"
              className="flex items-center gap-2"
            >
              <FaEnvelope />
              <span>kanani.manan5@gmail.com</span>
            </Link>
          </div>

          <div className="topBar-right flex items-center gap-3">
            <Link href="https://www.facebook.com/profile.php?id=100084193929925">
              <FaFacebook />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100084193929925">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100084193929925">
              <FaYoutube />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100084193929925">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </section>
      <section className="navbar sticky top-0 z-50 bg-gray-200">
        <div className="container mx-auto flex items-center px-4 py-2">
          <div className="navbar-left flex items-center gap-4 w-1/4">
            <Link href="/">
              <Image src={logo} alt="logo" width={180} height={100} />
            </Link>
          </div>

          <div className="navbar-center w-1/2 flex justify-center">
            <ul className="flex items-center gap-4">
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/products">Products</Link>
              </li>
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right flex items-center justify-end gap-4 w-1/4 ">
            <ul className="flex items-center gap-4">
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/login">Login</Link>
              </li>
              <li className="text-black hover:text-blue-500 duration-300">
                <Link href="/register">Register</Link>
              </li>
              <span>|</span>
              <li className="text-black hover:text-blue-500 duration-300 text-lg">
                <Link href="/">
                  <FaShoppingCart />
                </Link>
              </li>
              <li className="text-black hover:text-blue-500 duration-300 text-lg ">
                <Link href="/">
                  <FaHeart />
                </Link>
              </li>

              {/* <li className="text-black hover:text-blue-500 duration-300 text-lg">
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
    </>
  );
};

export default Navbar;
