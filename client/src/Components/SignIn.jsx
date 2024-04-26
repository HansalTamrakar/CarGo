import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/UserSlice";

// const navigate =Navigate();
const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", data);
      console.log(response?.data?.user)
      dispatch(setUser(response?.data?.user));


      localStorage.setItem('user', JSON.stringify(response?.data?.user));


      const token = response?.data?.token;
      console.log(token);
      localStorage.setItem('token', token);
      const hasToken = localStorage.getItem("token") !== null;
      // console.log(hasToken);
      
      axios
        .get("http://localhost:4000/token", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error:", "error"));
      if (hasToken) {
        return (window.location.href = "/signin/Home");
      }

      // async function fetchData() {
      //   try {
      //     const response = await axios.get('http://localhost:4000/login');
      //     console.log(response);
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // }

      // fetchData();
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  useEffect(() => {
    function check() {
      const hasToken = localStorage.getItem("token") !== null;
      if (hasToken) {
        return (window.location.href = "/signin/Home");
      }
    }

    check();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[1149px] flex justify-center align-middle items-center">
      <div className="bg-white h-3/4 w-1/4 rounded-lg pt-6 p-6  ">
        <div className="font-serif text-6xl text-blue-400 flex justify-center">
          Sign In
        </div>
        <div className="text-center">
          <h1 className="text-black text-bold font-serif text-6xl mt-8">
            Welcome Back{" "}
          </h1>
          <h1 className="text-gray-600 mt-6 text-xl">
            Glad to see you again 👋{" "}
          </h1>
          <h1 className="text-gray-600 text-xl">
            Login to Your Account Below{" "}
          </h1>
        </div>
        <form
          className="mt-16 ml-6 font-serif"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="text-md mt-6 ">Email</div>
          <br />
          <input
            name="email"
            type="text"
            defaultValue={data.email}
            onChange={(e) => {
              handleInput(e);
            }}
            className=" pl-6 ml-6 w-11/12 border border-gray-300  h-12"
            placeholder="Enter Your Email..."
          />
          <div className="text-md mt-6 ">Password</div>
          <br />
          <input
            name="password"
            type="text"
            value={data.password}
            className=" pl-6 ml-6 w-11/12 border border-gray-300  h-12"
            placeholder="Enter Your password..."
            onChange={(e) => {
              handleInput(e);
            }}
          />
          {/* <Link to="/signin/Home"> */}
          <button className="mt-12 ml-6 bg-sky-500/100 w-11/12 text-white font-bold h-12 font-serif cursor-pointer ">
            Sign In
          </button>
          {/* </Link> */}
          <br />
          <h1 className="text-center mt-12">
            Don't have an account?
            <Link to="/signup">
              <span className="underline text-cyan-900 cursor-pointer">
                SignUp
              </span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
