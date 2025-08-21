// ExploreMoreArrow.jsx
import React from "react";
import { HiArrowDown } from "react-icons/hi";

const ExploreMoreArrow = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer animate-bounce">
      <HiArrowDown className="text-gray-100 mt-5 text-xl" />
    </div>
  );
};

export default ExploreMoreArrow;
