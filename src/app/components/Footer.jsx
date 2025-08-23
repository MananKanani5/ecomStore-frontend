import React from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Input from "./form/Input";
import { loadIcon } from "../utils/loadIcon";

const footerDetails = [
  {
    column: 1,
    logo: logo,
    about:
      "Whether you're a trendsetter, a minimalist, or an adventurer at heart, Naturya has something for everyone. Our diverse range of styles caters to various personas.",
    socialLinks: [
      { icon: "RiFacebookLine", link: "/" },
      { icon: "RiInstagramLine", link: "/" },
      { icon: "RiTwitterLine", link: "/" },
      { icon: "RiPinterestLine", link: "/" },
    ],
  },
  {
    column: 2,
    title: "Customer Support",
    links: [
      { title: "Terms of Service", url: "/" },
      { title: "Privacy Policy", url: "/" },
      { title: "Return/Exchange Policy", url: "/" },
      { title: "Shipping Policy", url: "/" },
    ],
  },
  {
    column: 3,
    title: "Quick Links",
    links: [
      { title: "About Us", url: "/" },
      { title: "Contact", url: "/" },
      { title: "FAQs", url: "/" },
      { title: "Blog", url: "/" },
    ],
  },
  {
    column: 4,
    title: "Let's get in touch",
    content:
      "Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!",
  },
  {
    column: 5,
    content: "© 2025 Naturya All rights reserved.",
    paymentImg:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/payment_icon.png",
  },
];

const Footer = () => {
  const ArrowRight = loadIcon("RiArrowRightLine", "ri");

  return (
    <section className="footer bg-[#f5f2ec]">
      <div className="container mx-auto flex justify-between px-12 pt-18 pb-16 max-lg:px-5 max-lg:flex-col max-lg:gap-10">
        {/* Column 1 */}
        <div className="col-1 w-[30%] flex flex-col gap-5 max-lg:w-full">
          <Image
            src={footerDetails[0].logo}
            alt="logo"
            width={180}
            height={100}
          />
          <p className="text-sm text-gray-600 w-3/4 max-lg:w-full">
            {footerDetails[0].about}
          </p>
          <div className="flex gap-2">
            {footerDetails[0].socialLinks.map((social, index) => {
              const DynamicIcon = loadIcon(social.icon, "ri");
              return (
                <Link
                  key={index}
                  href={social.link}
                  className="p-3 text-lg bg-[#a79d80] text-white rounded-full"
                >
                  <DynamicIcon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-2 w-[20%] text-sm flex flex-col gap-4 max-lg:w-full">
          <h3 className="text-xl font-semibold">{footerDetails[1].title}</h3>
          <ul className="flex flex-col gap-4">
            {footerDetails[1].links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-3 w-[20%] text-sm flex flex-col gap-4 max-lg:w-full">
          <h3 className="text-xl font-semibold">{footerDetails[2].title}</h3>
          <ul className="flex flex-col gap-4">
            {footerDetails[2].links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="hover:text-[#a79d80] duration-300 text-gray-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-4 w-[30%] text-sm flex flex-col gap-4 max-lg:w-full">
          <h3 className="text-xl font-semibold">{footerDetails[3].title}</h3>
          <p className="text-gray-600">{footerDetails[3].content}</p>

          <form>
            <div className="relative">
              <Input
                className="bg-white border-none outline-none p-4"
                placeholder="Enter your email address..."
                required
              />
              <button className="absolute top-3.5 right-2 cursor-pointer">
                <ArrowRight className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="border-[#dfd7c1]" />

      {/* Bottom Footer */}
      <div className="container mx-auto flex justify-between px-12 py-5 max-lg:px-5 max-lg:flex-col max-lg:text-center max-lg:gap-5">
        <div className="footer-left text-sm max-lg:text-balance">
          {footerDetails[4].content} Developed by Manan Kanani
        </div>
        <div className="footer-right text-sm flex justify-center">
          <Image
            src={footerDetails[4].paymentImg}
            width={300}
            height={100}
            alt="payment methods"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
