import "./App.css";
import firstcar from "./Assets/firstcar.png";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import FirstPage from "./Components/FirstPage";
import Dashboard from "./Components/User/User.jsx";
import Home from "./Components/Home";
import LoginPage from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Error from "./Components/Error";
import Buy from "./Components/Buy";
import Rent from "./Components/Rent";
import ContactPage from "./Components/Contact";
import Caraousel from "./Components/Carousel";
import CarView from "./Components/CarView";
import Profile from "./Components/User/Profile.jsx";
import BarCharts from "./Components/User/Overview.jsx";


function App() {
  return (
    <div>
  
    </div>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signup",
    element: <SignUp />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin",
    element: <SignIn />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signup/Home",
    element: <Home />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin/Home",
    element: <Home />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin/Home/Buy",
    element: <Buy />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin/Home/Rent",
    element: <Rent />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin/Home/Contact",
    element: <ContactPage />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/signin/Home/:id",
    element: <CarView />,
    error: <Error />,
    children: [{}],
  },
  {
    path: "/personaldetails",
    element: <Dashboard/>,
    error: <Error />,
    children: [
      {
        path: "profile",
        element: <Profile/>,
        error: <Error />,
        children: [{}],
      },
      {
        path: "overview",
        element: <BarCharts/>,
        error: <Error />,
        children: [{}],
      },
    ],
  },

 
]);

export default App;
