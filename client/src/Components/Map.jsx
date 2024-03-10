import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default function Map() {
  const map = useMap();
  const [data, setData] = useState();

  useEffect(() => {
    const geocoder = new OpenStreetMapProvider();

    const startAddress = "Start address";
    const endAddress = "End address";

    Promise.all([
      //   geocoder.search({ query: startAddress }),
      //   geocoder.search({ query: endAddress }),
      geocoder.search({ query: "Durg" }),
      geocoder.search({ query: "Raipur" }),
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
