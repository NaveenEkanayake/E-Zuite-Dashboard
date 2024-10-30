import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import CustomizedTables from "../Table/Table";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AirplayIcon from "@mui/icons-material/Airplay";
import Footer from "../footer/Footer";

const MainContents = () => {
  return (
    <div className="bg-slate-200 h-[943px] md:min-h-screen w-[608px] md:w-full p-3 md:p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 col-span-1 md:col-span-2 mb-4 md:mb-0">
          <div className="flex items-center space-x-2 cursor-pointer group relative mb-4 md:mb-0 hover:text-blue-500">
            <div className="p-2 border border-black bg-transparent inline-flex items-center justify-center rounded transition duration-300 group-hover:border-blue-500">
              <AirplayIcon
                className=" group-hover:text-blue-500"
                style={{
                  height: "12px",
                  width: "12px",
                }}
              />
            </div>
            <span className="font-medium transition duration-300 group-hover:text-blue-500">
              Draft
            </span>

            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-black font-semibold transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
              40
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 top-[40px]"></span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer group relative mb-4 md:mb-0 hover:text-blue-500">
            <div className=" p-2 border border-black bg-transparent inline-flex items-center justify-center rounded transition duration-300 group-hover:border-blue-500">
              <SignalCellularAltIcon
                style={{
                  height: "12px",
                  width: "12px",
                }}
              />
            </div>

            <span className="font-medium group-hover:text-blue-500 transition duration-300">
              Active
            </span>

            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-black font-semibold group-hover:text-blue-500 group-hover:border-blue-500 transition duration-300">
              40
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 top-[40px]"></span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group relative mb-4 md:mb-0 hover:text-blue-500">
            <div className="p-3 border border-black bg-transparent inline-flex items-center justify-center rounded transition duration-300 group-hover:border-blue-500"></div>

            <span className="font-medium transition duration-300 group-hover:text-blue-500">
              Inactive
            </span>

            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-black font-semibold transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
              40
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 top-[40px]"></span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group relative mb-4 md:mb-0 hover:text-blue-500">
            <div className="p-2 border border-black bg-transparent inline-flex items-center justify-center rounded transition duration-300 group-hover:border-blue-500 h-8">
              <CloseIcon
                className=" group-hover:text-blue-500"
                style={{
                  height: "12px",
                  width: "12px",
                }}
              />
            </div>

            <span className="font-medium transition duration-300 group-hover:text-blue-500">
              Deleted
            </span>

            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-black font-semibold transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
              40
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 top-[40px]"></span>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center col-span-1 md:col-span-1 justify-end space-y-4 md:space-y-0 md:space-x-5">
          <div className="relative flex items-center w-full md:w-auto">
            <FilterAltOutlinedIcon className="absolute left-2 text-gray-600 text-[30px]" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 w-full md:w-auto border-b border-black bg-transparent focus:outline-none focus:border-blue-500 py-2 placeholder:text-black placeholder:font-semibold placeholder:text-[17px] placeholder:ml-6"
            />
          </div>

          <div className="flex items-center space-x-2 text-gray-700">
            <button className="px-2 py-1 text-gray-400 hover:text-black">
              <FirstPageIcon />
            </button>
            <button className="px-2 py-1 text-gray-400 hover:text-black">
              <ArrowBackIosNewIcon />
            </button>
            {["1", "2", "3"].map((page) => (
              <button
                key={page}
                className="px-2 py-1 text-gray-400 hover:text-black"
              >
                {page}
              </button>
            ))}
            <button className="px-2 py-1 text-gray-400 hover:text-black">
              <ArrowForwardIosIcon />
            </button>
            <button className="px-2 py-1 text-gray-400 hover:text-black">
              <LastPageIcon />
            </button>
          </div>
          <MoreHorizIcon
            className="cursor-pointer text-gray-400 hover:text-black"
            style={{
              height: "38px",
              width: "38px",
            }}
          />
        </div>
      </div>
      <CustomizedTables />
      <Footer />
    </div>
  );
};

export default MainContents;
