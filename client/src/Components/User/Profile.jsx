import React from "react";
import profile from "../../Assets/profile.png";
import { useSelector } from 'react-redux';
import { selectUser } from '../../utils/UserSlice';
import  { useState } from 'react';
const Profile = () => {
  const user = useSelector(selectUser);
  const [imageSrc, setImageSrc] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="my-auto mx-auto">
      <div className=" w-auto">
        <h1 className="text-6xl font-semibold font-sans ">Account</h1>
        <div className="mx-auto mt-8    my-auto flex ">
          <div className="w-[800px] border shadow-sm shadow-gray-500 p-8">
          {imageSrc && (
        <div>
          
          <img src={imageSrc} className="h-60 w-60 mx-auto  rounded-full  " />
        </div>
      )}
            {/* <img src={profile} className="h-32 w-auto mx-auto " alt="" /> */}
            <br /><br /><br />
            <div className="font-cambria  mt-6 font-bold text-center text-4xl">
              {user?.name+" "+user?.lastname}
            </div>
            <div className="font-cambria text-2xl text-gray-600 font-bold  mt-10 text-center">
              {user?.email}
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              {user?.city}
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              6267772283
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              29-sep-2003
            </div>
            <div className="font-cambria text-3xl text-gray-600  font-bold  mt-10 text-center">
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
         
            <hr className="mt-28 border border-sky-500" />
            <div className=" text-violet-500 font-bold  text-2xl mt-4 text-center underline">
              Upload Picture
            </div><br />
            <input className=" text-violet-500  text-center font-bold  text-2xl mt-4 ml-44 underline"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
          </div>
        </div>
      </div>
      <div>
   
     
      <br />
     
    </div>
    </div>
  );
};

export default Profile;
