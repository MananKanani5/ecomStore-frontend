import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeart, IoHeartOutline, IoStar } from "react-icons/io5";

const Product = ({
  mainImage,
  productName,
  price,
  sellingPrice,
  isWishlishted,
  isOnsale,
}) => {
  return (
    <div className="w-[23%] max-lg:w-[45%]">
      <div className="relative">
        <Link href={"/"}>
          <Image
            src={mainImage}
            height={100}
            width={250}
            className="w-full rounded"
          />
        </Link>

        {isOnsale ? (
          <p className="absolute top-2.5 left-2.5 bg-[#a79d80] px-2 py-1.5 text-white text-xs duration-300 rounded">
            <span>sale!</span>
          </p>
        ) : (
          ""
        )}

        {isWishlishted ? (
          <Link
            href={"/"}
            className="absolute top-2.5 right-2.5 bg-white p-2.5 text-[#a79d80] duration-300  rounded-full aspect-square "
          >
            <IoHeart />
          </Link>
        ) : (
          <Link
            href={"/"}
            className="absolute top-2.5 right-2.5 bg-white p-2.5 hover:text-[#a79d80] duration-300  rounded-full aspect-square "
          >
            <IoHeartOutline />
          </Link>
        )}
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex items-center gap-1 text-sm">
          <IoStar className="text-[#facc15]" />
          <p className="font-medium">4.67</p>
          <p className="text-gray-500">(9 Reviews)</p>
        </div>

        <Link
          href={"/"}
          className="hover:text-[#a79d80] duration-300 text-balance max-lg:text-sm"
        >
          {productName}
        </Link>
        <div className="flex items-center gap-1">
          <p className="line-through text-gray-500">₹{price}</p>
          <p className="  font-medium">₹{sellingPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
