import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Product = ({ mainImage, productName, price, sellingPrice }) => {
  return (
    <div>
      <Image src={mainImage} width={100} height={100}></Image>
      <IoStar />
    </div>
  );
};

export default Product;
