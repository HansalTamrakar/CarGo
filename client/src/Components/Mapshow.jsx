import React, { useState } from "react";
import Map from "./Map";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import rightarrow from "../Assets/rightarrow.png";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import { selectUser } from '../utils/UserSlice'
import { useParams } from "react-router-dom";
const Mapshow = () => {

  const user = useSelector(selectUser);
  const { location } = useParams();
  

  // const car = CarData.find((item) => item.id === parseInt(id));
  
  const [data, setData] = useState([user?.city,location]);
  return (
    <>
    <Header/>
      <div className="mx-12">
        <MapContainer center={[0, 0]} zoom={2} style={{ height: "70vh", marginTop:"20" }} data={data}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map />
        </MapContainer>
      </div>
      <div class="flex justify-around items-center mt-10">
        <input
          type="text"
          placeholder={user?.city}
          class="  w-96 h-24 px-4 border text-white font-serif text-4xl  border-blue-500 bg-black shadow-lg shadow-gray-900 "
        />
        <img src={rightarrow} className="h-96 w-96" alt="" />
        <input
          type="text"
          placeholder={data[1]}
          class=" text-centerw-96 h-24 px-4 border text-white font-serif text-4xl  border-blue-500 bg-black shadow-lg shadow-gray-900 "
        />
      </div>
      <Footer/>
    </>
  );
};

export default Mapshow;
