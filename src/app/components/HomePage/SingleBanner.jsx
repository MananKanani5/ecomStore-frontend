import Link from "next/link";
import React from "react";

const SingleBanner = ({
  title,
  subTitle,
  buttonText,
  buttonLink,
  image,
  alignment,
}) => {
  return (
    <div className="relative overflow-hidden h-112 max-lg:h-85 rounded w-full group">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-600 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative bg-black/30 w-full h-full z-10">
        <Link
          href={buttonLink}
          className={`w-full h-full flex items-center p-5 ${
            alignment === "left"
              ? "text-left justify-start"
              : alignment === "center"
              ? "text-center justify-center"
              : "text-right justify-end"
          }`}
        >
          <div className="text-white max-w-">
            <p className="text-lg font-light mb-1">{subTitle}</p>
            <h2 className="text-4xl max-lg:text-3xl font-medium mb-4 text-balance">
              {title}
            </h2>
            <button className="button">{buttonText}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleBanner;
