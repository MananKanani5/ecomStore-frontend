import React from "react";
import Product from "./Product";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const products = [
  {
    id: 1,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 2,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 3,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 4,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 5,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 6,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 7,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
  {
    id: 8,
    productName: "Check asymmetric top",
    shortDescription: "A stylish and comfortable top for any occasion.",
    longDescription:
      "This top is perfect for those who want to look stylish and feel comfortable. It features a unique design that makes it stand out from the crowd. Made from high-quality materials, this top is both durable and comfortable to wear.",
    price: 3999,
    sellingPrice: 2999,
    mainImage:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/p1-1-750x750.jpg",
  },
];

const HomeProducts = () => {
  return (
    <section className="container mx-auto px-12 pb-18 max-lg:pb-12 max-lg:px-5">
      <div className="flex flex-col items-center justify-center gap-2 mb-18">
        <h2 className="text-3xl font-semibold text-center">
          You are interested in
          <span>
            <Link
              href={"/"}
              className="text-[#92855c] inline-flex items-center"
            >
              <span className="ml-2">Women</span>
              <span>
                <IoChevronDown />
              </span>
            </Link>
          </span>
        </h2>
        <p className="w-1/3 max-lg:w-full text-center">
          A magical mix of enchanting prints and playful designs that bring out
          every child's imagination.
        </p>
      </div>
      <div className="flex justify-between gap-6 flex-wrap mb-18">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href={"/"} className="button-bordered text-center">
          Show More Products
        </Link>
      </div>
    </section>
  );
};

export default HomeProducts;
