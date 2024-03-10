import React, { useState } from "react";
import Map from "./Map";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import rightarrow from "../Assets/rightarrow.png";
const Mapshow = () => {
  return (
    <>
      <div className="mx-12">
        <MapContainer center={[0, 0]} zoom={2} style={{ height: "70vh", marginTop:"20" }}>
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
          placeholder={"DURG"}
          class="  w-96 h-24 px-4 border text-white font-serif text-4xl  border-blue-500 bg-black shadow-lg shadow-gray-900 "
        />
        <img src={rightarrow} className="h-96 w-96" alt="" />
        <input
          type="text"
          placeholder={"RAIPUR"}
          class=" text-centerw-96 h-24 px-4 border text-white font-serif text-4xl  border-blue-500 bg-black shadow-lg shadow-gray-900 "
        />
      </div>
    </>
  );
};

export default Mapshow;
