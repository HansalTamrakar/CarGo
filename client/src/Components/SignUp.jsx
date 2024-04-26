import React, { useState } from "react";
import secondcar from "../Assets/secondcar.png";
import formlogo from "../Assets/formlogo.png";
// import logoform from "../Assets/logoform.png";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    city: "",
    address: "",
  });

 function handleInput(e){
  const name = e.target.name;
  const value = e.target.value;
  setData({...data,
     [name]:value
  })

 }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    await axios
      .post("http://localhost:4000/signup", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("This Email is Registered Try Another One")
      });
  }
  return (
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-[1149px] flex justify-center align-middle items-center">
      <div className="bg-white h-3/4 w-2/4 rounded-lg pt-6 p-6  ">
        <div className="font-serif text-6xl text-blue-400 flex justify-center">
          Sign Up
        </div>
        <div className="text-center">
          <h1 className="text-black text-bold font-serif text-6xl mt-8">
            Welcome To Cool Car{" "}
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={formlogo} alt="" />
        </div>
        <form
          className="mt-16  font-serif text-xl"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="flex justify-around">
              <div></div>
              <div className="text-md mt-6  ">
                <label className="mr-6">Name</label>
                <input
                  value={data.name}
                  name="name"
                  type="text"
                  className=" w-96   border border-gray-300   p-2"
                  placeholder="name..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div className="text-md mt-6 ">
                <label className="mr-6">LastName</label>
                <input
                  type="text"
                  value={data.lastname}
                  name="lastname"
                  className="  border border-gray-300 w-96 p-2"
                  placeholder="lastname..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-around">
              <div></div>
              <div className="text-md mt-6  ">
                <label className="mr-6">Email</label>
                <input
                  value={data.email}
                  name="email"
                  type="text"
                  className=" w-96   border border-gray-300   p-2"
                  placeholder="example@gmail.com"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div className="text-md mt-6 ">
                <label className="mr-6">Password</label>
                <input
                  value={data.password}
                  name="password"
                  type="text"
                  className="  border border-gray-300 w-96 p-2"
                  placeholder="***************"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-around">
              <div></div>
              <div className="text-md mt-6  ">
                <label className="mr-6">City</label>
                <input
                  value={data.city}
                  name="city"
                  type="text"
                  className=" w-96   border border-gray-300   p-2"
                  placeholder="Enter Your City..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div className="text-md mt-6 ">
                <label className="mr-6">Address</label>
                <input
                  value={data.address}
                  name="address"
                  type="text"
                  className="  border border-gray-300 w-96 p-2"
                  placeholder="Enter Your Address..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* <Link to="/signup/Home"> */}
            <button className=" bg-sky-500/100 w-96 text-white font-bold h-12 font-serif cursor-pointer mt-14 ">
              Sign Up
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
