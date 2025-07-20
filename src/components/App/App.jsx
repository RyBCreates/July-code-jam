import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Activities from "../pages/Activities/Activities";
import UserProfile from "../pages/UserProfile/UserProfile";
import RouteBuilder from "../pages/RouteBuilder/RouteBuilder";
import OptimalRoute from "../pages/OptimalRoute/OptimalRoute";
import Footer from "../Footer/Footer";

import LoginModal from "../modals/LoginModal/LoginModal";
import RegisterModal from "../modals/RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  // Open Login Modal
  const handleLoginClick = () => {
    setActiveModal("login-modal");
  };

  // Open Register Modal
  const handleRegisterClick = () => {
    setActiveModal("register-modal");
  };

  // Switch Between Register and Login Modals
  const handleSwitchModal = () => {
    if (activeModal === "login-modal") {
      setActiveModal("register-modal");
    } else {
      setActiveModal("login-modal");
    }
  };

  // Close Modal
  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="app__content">
        <Header
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/create-your-adventure" element={<RouteBuilder />} />
          <Route path="/optimal-route" element={<OptimalRoute />} />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        activeModal={activeModal}
        closeModal={closeModal}
        handleSwitchModal={handleSwitchModal}
      />
      <RegisterModal
        activeModal={activeModal}
        closeModal={closeModal}
        handleSwitchModal={handleSwitchModal}
      />
    </div>
  );
}

export default App;
