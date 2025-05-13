"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "./assets/slider/1.jpg";

const products = [
  {
    id: "66424b4a12abf2d88cba0001",
    productName: "Classic White Sneakers",
    shortDescription: "Comfortable and stylish sneakers",
    longDescription:
      "These classic white sneakers are perfect for everyday wear. Made from high-quality materials, they offer both durability and comfort.",
    mainImage: "/images/products/sneakers1.jpg",
    galleryImages: [
      "/images/products/sneakers1.jpg",
      "/images/products/sneakers1-2.jpg",
      "/images/products/sneakers1-3.jpg",
    ],
    price: 3499.0,
    sellingPrice: 2999.0,
    quantity: 50,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryIds: ["66424b4a12abf2d88cba1001"],
    categories: [],
    orders: [],
  },
  {
    id: "66424b4a12abf2d88cba0002",
    productName: "Denim Jacket",
    shortDescription: "Classic blue denim jacket",
    longDescription:
      "A timeless denim jacket made from 100% cotton. Perfect for layering over your casual outfits.",
    mainImage: "/images/products/jacket1.jpg",
    galleryImages: [
      "/images/products/jacket1.jpg",
      "/images/products/jacket1-2.jpg",
    ],
    price: 2599.0,
    sellingPrice: 2199.0,
    quantity: 30,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryIds: ["66424b4a12abf2d88cba1002"],
    categories: [],
    orders: [],
  },
  {
    id: "66424b4a12abf2d88cba0003",
    productName: "Smartwatch Pro",
    shortDescription: "Advanced fitness smartwatch",
    longDescription:
      "Track your health, monitor your sleep, and stay connected with the new Smartwatch Pro. Sleek design with long battery life.",
    mainImage: "/images/products/smartwatch.jpg",
    galleryImages: [
      "/images/products/smartwatch.jpg",
      "/images/products/smartwatch-2.jpg",
    ],
    price: 7999.0,
    sellingPrice: 6999.0,
    quantity: 20,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryIds: ["66424b4a12abf2d88cba1003"],
    categories: [],
    orders: [],
  },
];

const page = () => {
  return (
    <>
      <section className="hero-section bg-gray-200">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={3000}
          transitionTime={600}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          className="carousel-container"
        >
          <div className="reltive flex items-center justify-center">
            <Image src={slide1} alt="slide1" className="slider-image" />
            <div className="z-10 absolute flex gap-5 flex-col items-center">
              <h3 className="text-5xl font-bold">Discover the Latest Trends</h3>
              <p className="text-lg font-medium">
                Explore our fresh new collection — handpicked just for you.
              </p>
              <Link className="button" href={"/products"}>
                Shop Now
              </Link>
            </div>
          </div>

          <div className="relative  flex items-center justify-center">
            <Image src={slide1} alt="slide1" className="slider-image" />
            <div className="z-10 absolute flex gap-5 flex-col items-center">
              <h3 className="text-5xl font-bold">
                Limited Time Offer - Up to 50% Off!
              </h3>
              <p className="text-lg font-medium">
                Grab exclusive deals on top-selling products before they're
                gone.
              </p>
              <Link className="button" href={"/products"}>
                Shop Now
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

      <section className=""></section>
    </>
  );
};

export default page;
