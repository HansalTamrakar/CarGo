import React, { useEffect } from "react";
// import homebg from "../Assets/homebg.png";
import carlogo from "../Assets/logo.png";
import homebg from "../Assets/homebg.jpg";
import rent from "../Assets/rent.png";
import { CarData } from "../Assets/CarData";
import Caraousel from "./Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Cardcar from "./CardCar";
import carrent from "../Assets/CarRent.png";

const Buy = () => {
  const route = {
    Buy: true,
  };
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 500,
    easing: "linear",
  };
  return (
    <div>
      <div>
        <div className="flex flex-wrap bg-gradient-to-br from-blue-400 to-purple-500 h-[650px]   flex-col justify-center items-center">
          <div className="flex flex-wrap">
            <img
              src={carrent}
              className="h-48"
              alt=""
              style={{ filter: "drop-shadow(0 0 25px black)" }}
            />
            <div className="text-center">
              <h1 className="text-[100px] font-bold text-white mb-8 font-cambria">
                Let's embark on the journey <br /> acquiring the dream car
              </h1>
              <div className="flex  justify-evenly mx-16">
                <p className="text-lg text-white font-bold font-cambria mb-6">
                  Discover the perfect vehicle for you from our diverse
                  selection of cars! Whether you're in the market for a reliable
                  sedan, a spacious SUV, or a high-performance sports car, we
                  have something for every taste and budget.
                </p>
                <p className="text-lg text-white mb-6">
                  Our online showroom offers a seamless shopping experience,
                  allowing you to explore our inventory, compare different
                  models, and find the perfect match for your needs—all from the
                  comfort of your own home.
                </p>
                <p className="text-lg text-white mb-2">
                  With transparent pricing, detailed vehicle listings, and
                  intuitive search tools, you can shop with confidence, knowing
                  that you're getting the best value for your money. Start your
                  journey to car ownership today!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900  mt-1  justify-center">
          <Slider {...settings}>
            {CarData.map((items) => {
              return <Caraousel {...items} />;
            })}
          </Slider>
        </div>
        );
      </div>
      <div className="flex flex-wrap justify-around pt-24 bg-gray-200 ">
        {CarData.map((items,i) => {
          
          return <Cardcar {...items} codn={route.Buy} index={i}  />
        
        })}
      </div>
    </div>
  );
};

export default Buy;
