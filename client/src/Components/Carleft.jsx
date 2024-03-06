import React from "react";

const Para = (props) => {
  return (
    <div className="flex items-center justify-around pt-12 bg-gray-200">
      <div className=" ">
        <h2 className="text-6xl font-cambria opacity-100 transform translate-x-0 transition-opacity duration-5000 delay-100 ease-in-out  ">
          {props.imageHeader}
        </h2>
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="mt-16 max-w-full h-96 w-[700px] hover:scale-105"
        />
      </div>
      <div className="w-1/2 mt-8">
        <h2 className="text-3xl font-bold">{props.descriptionHeader}</h2>
        <p className="mt-4 text-2xl">{props.description}</p>
      </div>
    </div>
  );
};

export default Para;
