import React from "react";
import { useParams } from "react-router-dom";
import { CarData } from "../Assets/CarData";
import Button from "./Button";

const CarView = () => {
  const { id } = useParams();
  console.log(id);

  const car = CarData.find((item) => item.id === parseInt(id));

  return (
    <div className=" text-white font-cambria mx-96 ml-[700px] my-24 h-[950px]  w-[1000px]   bg-gray-900 m-auto  border  shadow-2xl shadow-sky-900">
      <div className="h-1/2 m-8">
        <img src={car?.img} className="h-full w-full hover:scale-105 " alt="" />
      </div>
      <div className=" mt-4">
        <div className="text-6xl mt-4 bold text-center  ">{car?.name}</div>

        <div className="flex mt-4 justify-center">
          <div className="text-6xl ml-11">Model-{car?.year}</div>
          <div className="text-6xl ml-11">Price-{car?.selling_price}</div>
        </div>
        <div className="flex mt-4 justify-center">
          <div className="text-6xl ml-11">Model-{car?.fuel}</div>
          <div className="text-6xl ml-11">Price-{car?.seller_type}</div>
        </div>
      
        <div className="text-6xl ml-11 text-center mt-4">Owner-{car?.owner}</div>
        <div className="flex justify-center">
          <Button h={14} w={48} data={"Book"} />

          <Button h={12} w={48} data={"Rent"} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CarView;
