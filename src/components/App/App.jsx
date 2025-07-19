import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Activities from "../pages/Activities/Activities";
import UserProfile from "../pages/UserProfile/UserProfile";
import RouteBuilder from "../pages/RouteBuilder/RouteBuilder";
import OptimalRoute from "../pages/OptimalRoute/OptimalRoute";

function App() {
  return (
    <>
      <div className="background-image"></div>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/create-your-adventure" element={<RouteBuilder />} />
          <Route path="/optimal-route" element={<OptimalRoute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
