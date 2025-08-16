// ExploreMoreArrow.jsx
import React from "react";
import { HiArrowDown } from "react-icons/hi";

const ExploreMoreArrow = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer animate-bounce">
      <span className="font-medium text-sm md:text-md text-gray-100 mb-2 ">Explore More</span>
      <HiArrowDown className="text-gray-100" />
    </div>
  );
};

export default ExploreMoreArrow;
