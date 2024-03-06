import React from "react";
import profile from "../../Assets/profile.png";
const Profile = () => {
  return (
    <div className="my-auto mx-auto">
      <div className=" w-auto">
        <h1 className="text-6xl font-semibold font-sans ">Account</h1>
        <div className="mx-auto mt-8    my-auto flex ">
          <div className="w-[800px] border shadow-sm shadow-gray-500 p-8">
            <img src={profile} className="h-32 w-auto mx-auto " alt="" />
            <div className="font-cambria  mt-6 font-bold text-center text-4xl">
              Hansal Tamrakar
            </div>
            <div className="font-cambria text-2xl text-gray-600 font-bold  mt-10 text-center">
              hasnal@gmail.com
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              Shankar Nagar Durg
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              6267772283
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              29-sep-2003
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              CreatedAt
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              lastUpdated
            </div>
            <hr className="mt-28 border border-sky-500" />
            <div className=" text-violet-500 font-bold  text-2xl mt-4 text-center underline">
              Upload Picture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
