"use client";
import React from "react";
import Slider from "./components/Slider";
import "animate.css";
import FeatureList from "./components/FeatureList";
import Products from "./components/Products";
import BannerList from "./components/BannerList";
import HomeProducts from "./components/HomeProducts";

const page = () => {
  return (
    <>
      <Slider />
      <FeatureList />
      <BannerList />
      <HomeProducts />
      {/* <div className="py-56"></div> */}
    </>
  );
};

export default page;
