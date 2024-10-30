import React from "react";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/SideBar";
import MainContents from "../../components/maincontents/MainContents";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="flex h-screen">
        <div className="w-28">
          <SideBar />
        </div>
        <div className="flex-grow">
          <MainContents />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

