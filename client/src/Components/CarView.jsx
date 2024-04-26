import React from "react";
import { useParams } from "react-router-dom";
import { CarData } from "../Assets/CarData";
import Button from "./Button";
import location from "../Assets/location-pin.png";
import { Link } from "react-router-dom";

import DialogExample from "./DialogExample";

const CarView = () => {
  const { id } = useParams();
  console.log(id);

  const car = CarData.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className=" mx-auto my-auto text-white flex flex-center p-8" >
        <img src={location} className="h-8 w-auto" alt="" />
        <Link to={`/map/${car?.location}`}>
        <Button h={12} w={48} data={"Navigate to Car"} />
        </Link></div>
      <div className=" text-white font-cambria mx-96 ml-[700px]  h-[950px]  w-[1000px]   bg-gray-900 m-auto  border  shadow-2xl shadow-sky-900">
        <div className="h-1/2 m-8">
          <img
            src={car?.img}
            className="h-full w-full hover:scale-105 "
            alt=""
          />
        </div>
        <div className=" mt-4">
          <div className="text-4xl mt-4 bold text-center  ">{car?.name}</div>

          <div className="flex mt-4 justify-center">
            <div className="text-4xl ml-11">Model-{car?.year}</div>
            <div className="text-4xl ml-11">Price-{car?.selling_price}</div>
          </div>
          <div className="flex mt-4 justify-center">
            <div className="text-4xl ml-11">Model-{car?.fuel}</div>
            <div className="text-4xl ml-11">Price-{car?.seller_type}</div>
          </div>

          <div className="text-4xl ml-11 text-center mt-4">
          
            Owner-{car?.owner}
            <br /><br />
            location-{car?.location}
          
          </div>
          <div className="flex justify-center">
            <DialogExample data={"Book"} />
            <DialogExample data={"Rent"}/>
          
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CarView;
