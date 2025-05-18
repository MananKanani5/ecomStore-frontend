"use client";
import React from "react";
import Slider from "./components/Slider";
import "animate.css";
import FeatureList from "./components/FeatureList";
import Products from "./components/Products";
import BannerList from "./components/BannerList";

const page = () => {
  return (
    <>
      <Slider />
      <FeatureList />
      <BannerList />
      <div className="container mx-auto px-4 py-28"></div>
    </>
  );
};

export default page;
