import React, { useEffect, useState } from "react";

import carlogo from "../Assets/logo.png";
import homebg from "../Assets/homebg.jpg";
import rent from "../Assets/rent.png";
import Para from "./Carleft";
import carImage1 from "../Assets/Caraousel/1.jpg";
import carImage2 from "../Assets/Caraousel/2.jpg";
import carImage3 from "../Assets/Caraousel/3.jpg";
import carImage10 from "../Assets/Caraousel/10.jpg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import CarRight from "./CarRight";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectUser } from '../utils/UserSlice';

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  console.log(user)

  const mystyle = {
    backgroundImage: `url(${homebg})`,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [token, setToken] = useState(localStorage.getItem("token"));


 

  return (
    <div className="">
      <div
        className=" h-screen backdrop-filter backdrop-brightness-500 inset-0 opacity-90 "
        style={mystyle}
      >
        <Header />

        <div className="mt-44 ml-32 flex justify-between mr-20 font-semibold text-gray-600">
          <img src={rent} alt="" className="h-44 w-[600px]" />
          <div className="text-6xl">
            UNLOCK YOUR 🗺️ <br />
            BOOKING EXPERIENCE <br />
            <button className="text-2xl font-bold  w-96 text-center  bg-red-500 border border-white text-white shadow-lg shadow-red-500    rounded-lg h-16 mt-12 ">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <div className="pb-12 bg-gray-200">
        <Para
          imageHeader="Luxury Car"
          imageUrl={carImage1}
          imageAlt="Luxury Car"
          descriptionHeader="Car Description"
          description={`This luxury car features a sleek design, powerful engine, and luxurious interior. With advanced technology and safety features, it offers an unparalleled driving experience.Imagine cruising down the open road in a sleek, vibrant blue car, effortlessly blending style and performance. This stunning vehicle captivates attention with its bold hue, evoking a sense of confidence and sophistication. Its aerodynamic silhouette slices through the air with grace, embodying the perfect balance of form and function.

          Step inside, and you'll be greeted by a luxurious interior that exudes comfort and refinement. Plush, supportive seats invite you to settle in for the journey ahead, while advanced technology surrounds you, seamlessly integrating entertainment, navigation, and safety features.`}
        />
        <CarRight
          imageHeader="Luxury Car"
          imageUrl={carImage2}
          imageAlt="Luxury Car"
          descriptionHeader="Car Description"
          description={`Step into a world of heightened visibility and striking aesthetics with the red car's dynamic LED lighting system. Embracing both form and function, this innovative feature illuminates your path with brilliance while adding a touch of flair to your driving experience. Whether you're navigating city streets under the cloak of night or embarking on a scenic countryside adventure, the dynamic LED headlights adapt seamlessly to changing conditions, ensuring optimal visibility and safety at every turn. Meanwhile, the responsive taillights not only enhance your car's presence on the road but also serve as a beacon of reassurance to fellow motorists. With the red car's dynamic LED lighting, every journey is illuminated with style, sophistication, and a dash of exhilaration, making each drive an unforgettable experience defined by both practicality and aesthetic allure.`}
        />
        <Para
          imageHeader="Luxury Car"
          imageUrl={carImage3}
          imageAlt="Luxury Car"
          descriptionHeader="Car Description"
          description={`Escape into a realm of unparalleled luxury and sensory delight with the black car's panoramic sunroof, a feature that transcends mere transportation to become an immersive experience in itself. Stretching majestically across the entire roof, this expansive sunroof invites the outside world to embrace you in its warm embrace, flooding the cabin with natural light and offering panoramic vistas of the surrounding landscape. Whether you're embarking on a leisurely weekend drive or commuting through the bustling cityscape, the panoramic sunroof transforms every journey into a moment of serenity and connection with the world outside. Let the gentle caress of sunlight and the whisper of the wind elevate your driving experience to new heights of tranquility and sophistication, as you revel in the luxury of the black car's panoramic sunroof.`}
        />
        <CarRight
          imageHeader="Luxury Car"
          imageUrl={carImage10}
          imageAlt="Luxury Car"
          descriptionHeader="Car Description"
          description={`Experience the epitome of convenience and connectivity with the gray car's advanced wireless charging pad, a technological marvel that seamlessly integrates into your on-the-go lifestyle. Say goodbye to the hassle of tangled cords and the anxiety of drained batteries as you effortlessly power up your compatible smartphone while on the move. Whether you're navigating bustling city streets or embarking on an epic road trip, the built-in wireless charging pad ensures that you stay powered up and connected at all times, keeping you in touch with the world around you. With the gray car's wireless charging pad, convenience and connectivity are no longer luxuries but essential companions on your journey, empowering you to stay focused, productive, and connected wherever the road may take you.`}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
