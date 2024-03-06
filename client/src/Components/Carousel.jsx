import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";


const Caraousel = ({
  name,
  year,
  selling_price,
  fuel,
  seller_type,
  owner,
  img,
  key
}) => {
  return (
    
      <div className=" text-white border border-white m-12 p-3 w-96 ">
        <div className="">
          <img src={img} className=" w-screen hover:scale-105 h-48" alt="" />
        </div>
        <div className="text-2xl mt-4 bold text-center  ">{name}</div>
        <div className="flex mt-4">
          <div className="text-xl ml-11">Model-{year}</div>
          <div className="text-xl ml-11">Price-{selling_price}</div>
        </div>
        <div className="flex mt-4">
          <div className="text-xl ml-11">Diesel-{fuel}</div>
          <div className="text-xl ml-11">Seller-{seller_type}</div>
        </div>
        <div className="text-xl ml-11 text-center mt-4">Owner-{owner}</div>
      </div>
      
   
  );
};

export default Caraousel;
