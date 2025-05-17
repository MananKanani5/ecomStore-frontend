import React from "react";
import Product from "./Product";

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
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
