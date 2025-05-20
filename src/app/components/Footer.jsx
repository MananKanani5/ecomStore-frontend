import React from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiFacebookFill,
  RiFacebookLine,
  RiInstagramFill,
  RiInstagramLine,
  RiPinterestFill,
  RiPinterestLine,
  RiTwitterFill,
  RiTwitterLine,
} from "react-icons/ri";
import Input from "./form/Input";

const Footer = () => {
  return (
    <>
      <section className="footer bg-[#f5f2ec]">
        <div className="container mx-auto flex justify-between px-12 pt-18 pb-16 max-lg:px-5 max-lg:flex-col max-lg:gap-10">
          <div className="col-1 w-[30%] flex flex-col gap-5 max-lg:w-full">
            <Image src={logo} alt="logo" width={180} height={100} />
            <p className="text-sm text-gray-600 w-3/4 max-lg:w-full">
              Whether you're a trendsetter, a minimalist, or an adventurer at
              heart, Naturya has something for everyone. Our diverse range of
              styles caters to various personas.
            </p>
            <div className="flex gap-2">
              <Link
                href={"/"}
                className="p-3 text-lg bg-[#a79d80] text-white rounded-full"
              >
                <RiFacebookLine />
              </Link>
              <Link
                href={"/"}
                className="p-3 text-lg bg-[#a79d80] text-white rounded-full"
              >
                <RiInstagramLine />
              </Link>
              <Link
                href={"/"}
                className="p-3 text-lg bg-[#a79d80] text-white rounded-full"
              >
                <RiTwitterLine />
              </Link>
              <Link
                href={"/"}
                className="p-3 text-lg bg-[#a79d80] text-white rounded-full"
              >
                <RiPinterestLine />
              </Link>
            </div>
          </div>

          <div className="col-2 w-[20%] text-sm flex flex-col gap-4 max-lg:w-full">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Return/Exchange Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3 w-[20%] text-sm flex flex-col gap-4 max-lg:w-full">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Return/Exchange Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 w-[30%] text-sm flex flex-col gap-4 max-lg:w-full">
            <h3 className="text-xl font-semibold">Let’s get in touch</h3>
            <p className="text-gray-600">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>

            <form>
              <div className="relative">
                <Input
                  className="bg-white border-none outline-none p-4"
                  placeholder="Enter your email address..."
                  required
                />
                <button className="absolute top-3.5 right-2 cursor-pointer">
                  <RiArrowRightLine className="text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-[#dfd7c1]" />

        <div className="container mx-auto flex justify-between px-12 py-5 max-lg:px-5 max-lg:flex-col max-lg:text-center max-lg:gap-5">
          <div className="footer-left text-sm max-lg:text-balance">
            © 2024 Naturya All rights reserved. Designed by Manan Kanani
          </div>
          <div className="footer-right text-sm flex justify-center">
            <Image
              src={
                "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/payment_icon.png"
              }
              width={300}
              height={100}
              alt="payment methods"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
