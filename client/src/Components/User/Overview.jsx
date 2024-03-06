import React, { useState } from "react";
import BarCharts from "./Charts/BarCharts";
import LineCharts from "./Charts/LineChart";
import { UserData } from "./Data";
import PolarArea from "./Charts/PolarArea";
import Radar from "./Charts/Radar";
import Button from "../Button";

const Overview = () => {
  const [button, setButton] = useState(1);
  console.log(button);
  const userData= {
    labels: UserData.map((data) => data.year), // Extract labels
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) =>
          button === 1 ? data.usergain : data.userlost
        ), // Extract data
        backgroundColor: [
          "#36A2EB",
          "#9BD0F5",
          "#FF6384",
          "#FFB1C1",
          "#cc65fe",
          "	#ffce56",
        ], // Example colors
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <div className="text-white mt-2 flex justify-end overflow-hidden ">
        <button
          onClick={() => {
            setButton(1);
          }}
          className="h-16  w-44 bg-black font-extrabold  text-2xl rounded-xl "
        >
          User Gain
        </button>
        <button
          onClick={() => {
            setButton(0);
          }}
          className="h-16 ml-20  w-44 bg-black font-extrabold  text-2xl rounded-xl "
        >
          User Lost
        </button>
      </div>

      <div className="flex  flex-wrap mt-8">
        <div className="flex  justify-between ">
          <div
            className="flex justify-between"
            style={{ width: "800px", height: "800px" }}
          >
            <BarCharts chartData={userData} />
          </div>
          <div
            className="flex justify-between ml-24"
            style={{ width: "800px", height: "400px" }}
          >
            <LineCharts chartData={userData} />
          </div>
        </div>
      </div>
      <div className="flex  flex-wrap -mt-72">
        <div className="flex  justify-between ">
          <div
            className="flex justify-between"
            style={{ width: "800px", height: "600px" }}
          >
            <PolarArea chartData={userData} />
          </div>
          <div
            className="flex justify-between ml-24"
            style={{ width: "1000px", height: "600px" }}
          >
            <Radar chartData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
// const Overview = () => {
//   const [button, setButton] = useState(1);

//   // Define userData directly
//   const userData = {
//     labels: UserData.map((data) => data.year),
//     datasets: [
//       {
//         label: button === 1 ? "User Gained" : "User Lost",
//         data: UserData.map((data) => (button === 1 ? data.usergain : data.userlost)),
//         backgroundColor: [
//           "#36A2EB",
//           "#9BD0F5",
//           "#FF6384",
//           "#FFB1C1",
//           "#cc65fe",
//           "#ffce56",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div>
//       <div className="text-white mt-2 flex justify-end overflow-hidden ">
//         <button
//           onClick={() => {
//             setButton(1);
//           }}
//           className="h-16  w-44 bg-black font-extrabold  text-2xl rounded-xl "
//         >
//           User Gain
//         </button>
//         <button
//           onClick={() => {
//             setButton(0);
//           }}
//           className="h-16 ml-20  w-44 bg-black font-extrabold  text-2xl rounded-xl "
//         >
//           User Lost
//         </button>
//       </div>

//       <div className="flex  flex-wrap mt-8">
//         <div className="flex  justify-between ">
//           <div className="flex justify-between" style={{ width: "800px", height: "800px" }}>
//             <BarCharts chartData={userData} />
//           </div>
//           <div className="flex justify-between ml-24" style={{ width: "800px", height: "400px" }}>
//             <LineCharts chartData={userData} />
//           </div>
//         </div>
//       </div>
//       <div className="flex  flex-wrap -mt-72">
//         <div className="flex  justify-between ">
//           <div className="flex justify-between" style={{ width: "800px", height: "600px" }}>
//             <PolarArea chartData={userData} />
//           </div>
//           <div className="flex justify-between ml-24" style={{ width: "1000px", height: "600px" }}>
//             <Radar chartData={userData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
