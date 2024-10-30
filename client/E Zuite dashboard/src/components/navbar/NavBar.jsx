import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import cpuImage from "../../assets/images/CpuImage.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="py-4 px-2 bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex items-center cursor-pointer gap-5 ml-10">
          <HouseOutlinedIcon
            className="invert brightness-110"
            style={{
              height: "36px",
              width: "40px",
            }}
          />
          <img src={logo} className="w-28 h-11" alt="Logo" />
        </div>
        <div className="hidden md:flex flex-col justify-center items-center text-white ml-28">
          <ul>
            <li className="flex justify-center items-center">
              <img
                src={cpuImage}
                className="w-6 h-6 invert brightness-110"
                alt="CPU Icon"
              />
              <span className="font-medium text-[20px] ml-2 align-middle">
                Admin
              </span>
              <ChevronRightIcon
                className="font-bold"
                style={{
                  height: "40px",
                  width: "36px",
                }}
              />
              <span className="font-medium text-[20px]  align-middle">
                User
              </span>
              <StarIcon
                style={{ height: "24px", width: "24px", marginLeft: "3px" }}
              />
              <NoteAddOutlinedIcon
                className="ml-4 bg-slate-200 bg-opacity-50 rounded-md"
                style={{
                  height: "40px",
                  width: "36px",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <MenuOutlinedIcon
            className="text-white cursor-pointer"
            onClick={toggleMenu}
            style={{
              height: "36px",
              width: "36px",
            }}
          />
        </div>
        <div className="hidden md:flex text-white items-center mr-2">
          <ul className="flex items-center space-x-4">
            <span className="font-bold">Enhanzer</span>
            <WatchLaterIcon style={{ height: "40px", width: "36px" }} />
            <NotificationsOutlinedIcon
              style={{ height: "30px", width: "36px" }}
            />
            <StarBorderOutlinedIcon style={{ height: "30px", width: "36px" }} />
            <SettingsOutlinedIcon style={{ height: "30px", width: "36px" }} />
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center text-white  p-4">
          <ul className="flex flex-col items-start space-y-2">
            <li className="flex items-center">
              <MemoryOutlinedIcon />
              <span className="font-medium text-[20px] ml-2"> Admin</span>
            </li>
            <li className="flex items-center">
              <ChevronRightIcon className="font-bold" />
              <span className="font-medium text-[20px] mr-2"> User</span>
              <StarIcon />
            </li>
            <li>
              <NoteAddOutlinedIcon
                className="ml-4 bg-slate-200 bg-opacity-50 rounded-md"
                style={{
                  height: "40px",
                  width: "36px",
                }}
              />
            </li>
            <li className="flex flex-col gap-4 items-center">
              <span className="font-bold">Enhanzer</span>
              <WatchLaterIcon style={{ height: "40px", width: "36px" }} />
              <NotificationsOutlinedIcon
                style={{ height: "30px", width: "36px" }}
              />
              <StarBorderOutlinedIcon
                style={{ height: "30px", width: "36px" }}
              />
              <SettingsOutlinedIcon style={{ height: "30px", width: "36px" }} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
