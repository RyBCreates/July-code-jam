import "./App.css";
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Activities from "../pages/Activities/Activities";
import UserProfile from "../pages/UserProfile/UserProfile";
import RouteBuilder from "../pages/RouteBuilder/RouteBuilder";
import OptimalRoute from "../pages/OptimalRoute/OptimalRoute";
import About from "../pages/About/About";
import Questions from "../pages/Questions/Questions";
import Contact from "../pages/Contact/Contact";
import Footer from "../Footer/Footer";

import LoginModal from "../modals/LoginModal/LoginModal";
import RegisterModal from "../modals/RegisterModal/RegisterModal";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  // Close Modal with Escape or Click Outside
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleRegister = ({ email, password, name, avatar }) => {
    register({ email, password, name, avatar })
      .then(() => {
        return login({ email, password });
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  const handleLogin = ({ email, password }) => {
    return login({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      <div className="app">
        <div className="app__content">
          <Header
            handleLoginClick={handleLoginClick}
            handleRegisterClick={handleRegisterClick}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute
                  element={UserProfile}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route path="/create-your-adventure" element={<RouteBuilder />} />
            <Route path="/optimal-route" element={<OptimalRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/contact" element={<Contact />} />
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
          onRegister={handleRegister}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
