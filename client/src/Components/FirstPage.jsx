import React, { useEffect,useState } from "react";
import firstcar from "../Assets/firstcar.png";
import carlogo from "../Assets/logo.png";
// import ellipse from "../Assets/Ellipse2.png";
import group3 from "../Assets/group3.png";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const FirstPage = () => {
  const mystyle = {
    backgroundImage: `url(${firstcar})`,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [hasToken]=useState(localStorage.getItem("token"));
  useEffect(() => {
    function check() {
      const hasToken = localStorage.getItem("token") !== null;
      if (hasToken) {
        return (window.location.href = "/signin/Home");
      }
    }

    check();
  }, []);

  return (!hasToken?
    <div className="h-[1148px]   w-screen" style={mystyle}>
      <div className="flex justify-between pt-8">
        <img src={carlogo} className="h-48 w-48 ml-28 " />
        <div className="mt-8 mr-8">
          <Link to="/signin">
            <button className=" text-bold font-semibold p-2 text-2xl border-sky-300 border text-sky-300 rounded-3xl w-48 pl-4 shadow-md shadow-gray-400 bg-gray-900 mr-16 ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className=" text-bold font-semibold p-2 text-2xl border-sky-300 border text-sky-300 rounded-3xl w-48 pl-4 shadow-md shadow-gray-400 bg-gray-900 mr-16 ">
              Sign Up ➡️
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-4 ml-36 ">
        <div className="text-bold text-white font-serif font-semibold text-[100px] mt-12  ">
          Hit The Road
        </div>
        {/* <img src={ellipse} className="translate-x-[600px] -translate-y-40" /> */}
        <span className="text-bold text-white font-serif font-semibold text-[80px]    ">
          with
        </span>

        <span className="text-bold text-blue-500 font-serif font-semibold text-[80px]   ">
          {" "}
          Confidence!
        </span>
        <div className="text-bold text-gray-400 font-serif font-semibold text-5xl mt-12 w-1/3 ">
          Your gateway to seamless car <br />
          Explore, drive, and discover <br /> with ease.
        </div>
        <img
          src={group3}
          alt=""
          className="mt-24 h-36 shadow-xl shadow-sky-500 "
        />
      </div>
    </div>
  :<Loading/>)
};

export default FirstPage;
