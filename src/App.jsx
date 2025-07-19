// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import UserProfile from "./pages/UserProfile";
import CreateRoute from "./pages/CreateRoute/CreateRoute";
import OptimalRoute from "./pages/OptimalRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/create-your-adventure" element={<CreateRoute />} />
      <Route path="/optimal-route" element={<OptimalRoute />} />
    </Routes>
  );
}

export default App;
