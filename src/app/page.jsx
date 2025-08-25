"use client";
import React from "react";
import Slider from "./components/HomePage/Slider";
import "animate.css";
import FeatureList from "./components/HomePage/FeatureList";
import BannerList from "./components/HomePage/BannerList";
import HomeProducts from "./components/HomePage/HomeProducts";

const page = () => {
  return (
    <>
      <Slider />
      <FeatureList />
      <BannerList />
      <HomeProducts />
    </>
  );
};

export default page;
