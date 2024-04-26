import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from '../utils/UserSlice'



// const { location } = useParams();


export default function Map() {
  const user = useSelector(selectUser);
  const map = useMap();
  const { location } = useParams();
  console.log(location)
  const [data, setData] = useState([user?.city,location]);
  console.log("location")

  useEffect(() => {
    const geocoder = new OpenStreetMapProvider();

    const startAddress = "Start address";
    const endAddress = "End address";

    Promise.all([
      //   geocoder.search({ query: startAddress }),
      //   geocoder.search({ query: endAddress }),
      geocoder.search({ query: user?.city }),
      geocoder.search({ query: location}),
    ])
      .then((results) => {
        {
          setData(results[1]);
        }
        const startLatLng = [results[0][0].y, results[0][0].x];
        const endLatLng = [results[1][0].y, results[1][0].x];

        L.Routing.control({
          waypoints: [
            L.latLng(startLatLng[0], startLatLng[1]),
            L.latLng(endLatLng[0], endLatLng[1]),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      })
      .catch((error) => console.error("Error geocoding addresses:", error));
  }, [map]);


}
