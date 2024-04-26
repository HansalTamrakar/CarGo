import React from "react";
import { Link } from "react-router-dom";
import carlogo from "../Assets/logo.png";
import { useSelector } from 'react-redux';
import { selectUser } from '../utils/UserSlice';
const Header = () => {
  const user = useSelector(selectUser);

  // Function to delete token from local storage
const deleteToken = () => {
  localStorage.removeItem('token'); // Remove token from local storage
};




  return (
    <div className=" flex justify-around text-black opacity-90   h-26 pt-4 bg-gray-900">
      <div className="font-serif font-semibold">
        <span className="text-4xl text-white">Cool</span>
        <br />
        <div className="flex">
          <div className="text-4xl ml-2 text-white">Car</div>
          <div className="rounded-full bg-green-600 h-4 w-4 -translate-y-1 ml-2 "></div>
        </div>
      </div>
      <div className="flex font-cambria  text-3xl">
        <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
        <Link to="/signin/Home"> Home</Link>
          <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
            <Link to="/signin/Home/Buy"> Buy</Link>
          </div>
        </div>
        <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
          <Link to="/signin/Home/Rent"> Rent</Link>
        </div>
        <div className="ml-16 flex items-center cursor-pointer  font-bold text-white ">
          <Link to="/signin/Home/Contact"> Contact</Link>
        </div>
      </div>
      <div className="flex font-bold">
        <img src={carlogo} alt="" />
        <div className="text-2xl  flex items-center align-center h-8 mt-6 mb-4  p-6 bg-sky-900 border border-white text-white  shadow-sky-300 opacity-65 hover:bg-green-700  rounded-lg  ">
          <Link to="/personaldetails/profile">
            <h1>{user?.name+" "+user?.lastname}</h1>
          </Link>
        </div>
        <a target="_blank" href="https://mediafiles.botpress.cloud/e6cf042b-8f6d-47cb-a6b3-44a744b14961/webchat/bot.html">
          <button className="text-2xl  flex items-center align-center text-center pl-10 h-8 mt-6 mb-4 w-36 p-6 bg-sky-900 border border-white text-white  shadow-sky-300 opacity-65 hover:bg-green-700  rounded-lg ml-24  ">
            QnA
          </button>
        </a>
       <Link to='/'>
          <button onClick={deleteToken()}className="text-2xl  flex items-center align-center text-center  h-8 mt-6 mb-4  p-6 bg-red-600 border border-white text-white  shadow-sky-300  hover:bg-green-700  rounded-lg ml-24  ">
            log out
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Header;
