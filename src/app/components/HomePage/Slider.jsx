import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from "@/app/assets/slider/1.jpg";
import slide2 from "@/app/assets/slider/2.jpg";

const slider = [
  {
    id: 1,
    image: slide1,
    title: "Timeless Elegance Collection",
    description:
      "A modern collection that combines street style with refined tailoring. It includes structured dresses and versatile separates, crafted from durable materials suitable for everyday wear while maintaining a polished look.",
    buttonText: "Shop Furniture",
    buttonLink: "/products/furniture",
    alignment: "left",
  },
  {
    id: 2,
    image: slide2,
    title: "Whimsical Wonders Wardrobe",
    description:
      "A modern collection that combines street style with refined tailoring. It includes structured dresses and versatile separates, crafted from durable materials suitable for everyday wear while maintaining a polished look.",
    buttonText: "Shop Fitness",
    buttonLink: "/products/fitness",
    alignment: "right",
  },
  {
    id: 3,
    // image: slide1,
    title: "Bold Colors, Effortless Elegance",
    description:
      "A modern collection that combines street style with refined tailoring. It includes structured dresses and versatile separates, crafted from durable materials suitable for everyday wear while maintaining a polished look.",
    buttonText: "Dicovery Now",
    buttonLink: "/products/fitness",
    alignment: "center",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <section className="hero-section bg-gray-200">
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={true}
          arrows={false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={600}
          containerClass="carousel-container"
        >
          {slider.map((item) => (
            <div
              key={item.id}
              className={`relative flex items-center justify-center max-sm:h-[400px] h-[600px] bg-cover bg-center animate__animated animate__fadeIn`}
              style={{ backgroundImage: `url(${item.image?.src})` }}
            >
              <div
                className={` absolute z-10 flex gap-5 flex-col max-w-1/2  ${
                  item.alignment === "left"
                    ? "items-start left-12 max-sm:left-5"
                    : item.alignment === "center"
                    ? "items-center"
                    : "items-end right-12 max-sm:right-5"
                }`}
              >
                <h3
                  className={`text-5xl max-sm:text-3xl font-bold animate__animated animate__fadeInUp ${
                    item.alignment === "left"
                      ? "text-left"
                      : item.alignment === "center"
                      ? "text-center"
                      : "text-right"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-lg max-sm:hidden animate__animated animate__fadeInUp ${
                    item.alignment === "left"
                      ? "text-left"
                      : item.alignment === "center"
                      ? "text-center"
                      : "text-right"
                  }`}
                >
                  {item.description}
                </p>

                <Link
                  className="button animate__animated animate__fadeInUp"
                  href={item.buttonLink}
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
