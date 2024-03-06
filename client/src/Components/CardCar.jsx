import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Cardcar = ({
  name,
  year,
  selling_price,
  fuel,
  seller_type,
  owner,
  img,
  codn,
  index,
}) => {
  
  return (
    <Link to={`/signin/Home/${index+1}`}>
   
      <div className=" text-white  bg-gray-900 hover:scale-105 hover:text-lg text-xl hover:bg-gray-500 hover:font-bold hover:text-black  border border-green-300 shadow-2xl shadow-sky-900 m-12 p-3  w-96 ">
        <div className="">
          <img src={img} className=" w-screen h-48 " alt="" />
        </div>
        <div className="text-2xl mt-4 bold text-center  ">{name}</div>

        <div className="flex mt-4">
          <div className=" ml-11">Model-{year}</div>
          <div className=" ml-11">Price-{selling_price}</div>
        </div>
        <div className="flex mt-4">
          <div className=" ml-11">Diesel-{fuel}</div>
          <div className=" ml-11">Seller-{seller_type}</div>
        </div>
        <div className=" ml-11 text-center mt-4">Owner-{owner}</div>
        <div className="flex justify-center">
          {codn ? (
            <Button h={14} w={48} data={"Book"} />
          ) : (
            <Button h={12} w={48} data={"Rent"} />
          )}
        </div>
      </div>
      </Link>
    
  );
};

export default Cardcar;
