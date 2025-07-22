import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../../contexts/CurrentUserContext";
import closeButton from "../../../assets/icons/close-btn.svg";

import "../Modals.css";
import "./LoginModal.css";

function LoginModal({ activeModal, closeModal, handleSwitchModal }) {
  const { handleLogin } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    handleLogin({ email, password })
      .then(() => {
        closeModal();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`modal ${
        activeModal === "login-modal" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">Login</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img
            className="modal__close-image"
            src={closeButton}
            alt="close button"
          ></img>
        </button>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__input_type_text">
            <label className="modal__label">
              Email*
              <input
                required
                className="modal__input"
                type="email"
                id="login-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label className="modal__label">
              Password*
              <input
                required
                className="modal__input"
                type="password"
                id="login-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="modal__auth-buttons">
            <button className="modal__submit-button" type="submit">
              Log In
            </button>
            <button
              className="modal__button_alternate"
              type="button"
              onClick={handleSwitchModal}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
