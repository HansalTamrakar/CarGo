// import "./App.css";
// import firstcar from "./Assets/firstcar.png";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import FirstPage from "./Components/FirstPage";
// import Dashboard from "./Components/User/User.jsx";
// import Home from "./Components/Home";
// import LoginPage from "./Components/SignIn";
// import SignUp from "./Components/SignUp";
// import SignIn from "./Components/SignIn";
// import Error from "./Components/Error";
// import Buy from "./Components/Buy";
// import Rent from "./Components/Rent";
// import ContactPage from "./Components/Contact";
// import Caraousel from "./Components/Carousel";
// import CarView from "./Components/CarView";
// import Profile from "./Components/User/Profile.jsx";
// import BarCharts from "./Components/User/Overview.jsx";
// import Mapshow from "./Components/Mapshow.jsx";


// function App() {
 
//   return <div>
    
//   </div>;
// }
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FirstPage />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signup/Home",
//     element: <Home />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin/Home",
//     element: <Home />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin/Home/Buy",
//     element: <Buy />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin/Home/Rent",
//     element: <Rent />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin/Home/Contact",
//     element: <ContactPage />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/signin/Home/:id",
//     element: <CarView />,
//     error: <Error />,
//     children: [{}],
//   },
//   {
//     path: "/personaldetails",
//     element: <Dashboard />,
//     error: <Error />,
//     children: [
//       {
//         path: "profile",
//         element: <Profile />,
//         error: <Error />,
//         children: [{}],
//       },
//       {
//         path: "overview",
//         element: <BarCharts />,
//         error: <Error />,
//         children: [{}],
//       },
//     ],
//   },
//   {
//     path: "/map",
//     element: <Mapshow />,
//     error: <Error />,
//     children: [{}],
//   },
// ]);

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./Components/FirstPage";
import Dashboard from "./Components/User/User.jsx";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Error from "./Components/Error";
import Buy from "./Components/Buy";
import Rent from "./Components/Rent";
import ContactPage from "./Components/Contact";
import Confirmationbox from "./Components/DialogExample.jsx";
import CarView from "./Components/CarView";
import Profile from "./Components/User/Profile.jsx";
import BarCharts from "./Components/User/Overview.jsx";
import Mapshow from "./Components/Mapshow.jsx";
import { useDispatch } from 'react-redux';
import { setUser } from './utils/UserSlice.js';
import { useEffect } from "react";
import CongratulationPage from "./Components/CongratulationPage.jsx";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if user information exists in browser storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin/Home" element={<Home />}/>
        
          <Route path="/signin/Home/Buy" element={<Buy />} />
          <Route path="signin/Home/Rent" element={<Rent />} />
          <Route path="signin/Home/Contact" element={<ContactPage />} />
          <Route path="/signin/congrats" element={<CongratulationPage/>} />
         
          <Route path="signin/Home/:id" element={<CarView />} />
          {/* <Route path="*" element={<Error />} /> */}
        <Route path="/personaldetails" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="overview" element={<BarCharts />} />
        </Route>
        <Route path="/map/:location" element={<Mapshow />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
