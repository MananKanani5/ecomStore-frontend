import React from "react";
import { loadIcon } from "../utils/loadIcon";

const SingleFeature = ({ icon, title, description }) => {
  const IconComponent = loadIcon(icon, "io5");
  return (
    <div className=" group flex items-center gap-2 max-lg:gap-5 border border-transparent hover:border-gray-200 p-4 max-lg:p-0 rounded duration-300 animate__animated animate__fadeIn">
      <div className="bg-gray-200 p-4 max-lg:p-5 rounded-full group-hover:bg-[#a79d80] duration-300">
        <IconComponent className="text-2xl group-hover:text-white duration-300" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-pretty max-lg:text-sm max-lg:mt-1">{description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
