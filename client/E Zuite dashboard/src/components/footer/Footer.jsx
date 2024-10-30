import React from "react";
import PaddingOutlinedIcon from "@mui/icons-material/PaddingOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const Footer = () => {
  return (
    <div className="bg-white shadow-lg h-20 w-full mt-3 flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
      <div className="flex items-center mb-2 md:mb-0">
        <PaddingOutlinedIcon fontSize="medium" />
        <span className="font-medium text-[22px] ml-2">5.0</span>
      </div>
      <div className="flex items-center text-gray-600">
        <CopyrightOutlinedIcon fontSize="small" className="mr-1" />
        <span className="text-sm md:text-xl font-semibold">
          2024 eZuite. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
