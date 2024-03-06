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
import { useLocation, useHistory } from 'react-router-dom';
import CarRight from "./CarRight";
const Home = () => {

  const navigate=useNavigate()
  const mystyle = {
    backgroundImage: `url(${homebg})`,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [token,setToken]=useState(localStorage.getItem("token"));


  useEffect(() => {
    
    function check() {
    
      // const hasToken = localStorage.getItem("token") !== null;
      if (!token) {
        navigate('/')
      } 
    }
  
    check();
  }, []);

  return (
    <div className="">
      <div
        className=" h-screen backdrop-filter backdrop-brightness-500 inset-0 opacity-90 "
        style={mystyle}
      >
        <div className=" flex justify-around text-black opacity-90   h-28 pt-4 bg-gray-900">
          <div className="font-serif font-semibold">
            <span className="text-4xl text-white">Cool</span>
            <br />
            <div className="flex">
              <div className="text-4xl ml-2 text-white">Car</div>
              <div className="rounded-full bg-green-600 h-4 w-4 -translate-y-1 ml-2 "></div>
            </div>
          </div>
          <div className="flex font-cambria  text-3xl">
            <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
              Home

              <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
              <Link to="/signin/Home/Buy"> Buy</Link>
              </div>
            </div>
            <div className="ml-16 flex items-center cursor-pointer text-white font-bold">
                <Link to="/signin/Home/Rent"> Rent</Link>
            </div>
            <div className="ml-16 flex items-center cursor-pointer  font-bold text-white ">
              <Link to="/signin/Home/Contact"> Contact</Link>
            </div>
          </div>
          <div className="flex font-bold">
            <img src={carlogo} alt="" />
            <div className="text-2xl  flex items-center align-center h-8 mt-6 mb-4  p-6 bg-sky-900 border border-white text-white  shadow-sky-300 opacity-65 hover:bg-green-700  rounded-lg w-min  ">
              <Link to="/personaldetails/profile"><h1>hansaltamrakar</h1></Link>
            </div>
            <a href="https://mediafiles.botpress.cloud/e6cf042b-8f6d-47cb-a6b3-44a744b14961/webchat/bot.html">
              <button className="text-2xl  flex items-center align-center text-center pl-10 h-8 mt-6 mb-4 w-36 p-6 bg-sky-900 border border-white text-white  shadow-sky-300 opacity-65 hover:bg-green-700  rounded-lg ml-24  ">
                QnA
              </button>
            </a>
          </div>
        </div>
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

      <footer class="bg-gray-900 text-gray-300 py-20 ">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 class="text-xl font-bold mb-4">About Us</h2>
              <p>
                We are on a motive to provide best services on Renting and
                Selling the Car in a India. We offer the Most Competitive Price
                and give Discounts on different seasons
              </p>
            </div>
            <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 class="text-xl font-bold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a href="#" class="hover:text-gray-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-500">
                    Cars
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 class="text-xl font-bold mb-4">Contact Us</h2>
              <p>123 Main Street</p>
              <p>City, State, ZIP</p>
              <p>Email: info@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 class="text-xl font-bold mb-4">Follow Us</h2>
              <ul class="flex">
                <li class="mr-4">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="mr-4">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="mr-4">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p>&copy; 2024 CarWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
