"use client";
import React from "react";
import Slider from "./components/Slider";
import "animate.css";
import FeatureList from "./components/FeatureList";
import Products from "./components/Products";

const page = () => {
  return (
    <>
      <Slider />
      <FeatureList />
      <Products />
      <div className="container mx-auto px-4 py-28"></div>
    </>
  );
};

export default page;
