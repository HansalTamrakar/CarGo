import React from "react";
import carsell from "../Assets/CarSell.png";
import Header from "./Header";
import Footer from "./Footer";
// import Animation from "./Animation";



function ContactPage() {
  return (
    <>
    <Header/>
      <div className="container mx-auto mt-5 flex items-center justify-center h-screen ">
        <div className="flex flex-col  bg-gradient-to-r from-purple-400 to-pink-500  p-8 rounded-lg shadow-lg">
          <div className=" mb-4 ">
            <img src={carsell} alt="Contact" className="rounded-md" />
          </div>
          <div className="md:w-2/3 md:ml-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Contact Us</h1>
            <form className="max-w-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-2 text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-2 text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2 text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="border rounded-md px-4 py-2 w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
  
    
    </>
  );
}

export default ContactPage;
