import React from "react";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ScoreOutlinedIcon from "@mui/icons-material/ScoreOutlined";
import inventoryImage from "../../assets/images/inventory.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import cpuImage from "../../assets/images/CpuImage.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";

const SideBar = () => {
  return (
    <div className="md:min-h-screen h-[943px]  bg-gradient-to-b from-blue-900 to-blue-500 flex flex-col items-center">
      <ul className="text-white flex flex-col items-center space-y-2 mt-5">
        <li className="flex flex-col items-center font-medium cursor-pointer mt-3">
          <img src={cpuImage} className="mb-2 w-8 h-8 invert brightness-110" />
          <span className="font-medium">Admin</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <AccountBalanceWalletOutlinedIcon
            className="mb-2  brightness-110"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span className="font-medium">Core</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <ListAltOutlinedIcon
            className="mb-2 w-6 h-6 brightness-110"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span className="font-medium">Procurement</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <img
            src={inventoryImage}
            alt="Inventory"
            className="mb-2 w-8 h-8 invert brightness-110"
          />
          <span className="font-medium">Inventory</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <SettingsOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Manufacture</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <ShoppingCartOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Sales</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer">
          <PaidOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Finance</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer">
          <StorageIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Assets</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer">
          <LanguageOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Service</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <LaptopOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>CRM</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <ScoreOutlinedIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
          <span>Analytics</span>
        </li>
        <li className="flex flex-col items-center font-medium text-[16px] cursor-pointer ">
          <StorageIcon
            className="mb-2"
            style={{
              height: "32px",
              width: "32px",
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
