import React, { useState } from "react";
import dashboard from "../../Assets/Dashboard.png";
import Button from "../Button";
import rentcar from "../../Assets/rentcar.png";
import Overview from "../../Assets/Overview.png";
import help from "../../Assets/help.png";
import profile from "../../Assets/profile.png";
import statistics from "../../Assets/statistics.png";
import Profile from "./Profile";
import Chart from "chart.js/auto";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex ">
      <div className="w-1/6   bg-gradient-to-r to-blue-950 from-gray-800">
        <div>
          <img src={dashboard} className="h-48 w-auto m-8 ml-26" alt="" />
          <hr className="border border-green-950" />
        </div>
        <div className="text-2xl ml-20 mt-24">
          <div className="text-3xl text-white text-left w-96 mt-4  p-4 rounded-lg">
          <Link to="/personaldetails/overview">
            <img className="h-12  w-12 " src={Overview} alt="" />
            Overview
            </Link>
          </div>
          <div className="text-3xl text-white text-left w-96 mt-4  p-4 rounded-lg">
            <Link to="/personaldetails/profile">
              <img className="h-12  w-12 " src={profile} alt="" />
              Profile
            </Link>
          </div>
          <div className="text-3xl text-white text-left w-96 mt-4  p-4 rounded-lg">
            <img className="h-12  w-12 " src={statistics} alt="" />
            Statistics
          </div>
          <div className="text-3xl text-white text-left w-96 mt-4  p-4 rounded-lg">
            <img className="h-12  w-12 " src={rentcar} alt="" />
            Rent to Car
          </div>
          <div className="text-3xl text-white text-left w-96 mt-4  p-4 rounded-lg">
            <img className="h-12  w-12 " src={help} alt="" />
            Need Any Help
          </div>
        </div>
        <div className="ml-8 text-white font-bold opacity-80 text-2xl mt-1 ">
          <Button w={72} data={"Upgrade to Pro"} />
        </div>
      </div>
      <div className=" mx-auto my-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
