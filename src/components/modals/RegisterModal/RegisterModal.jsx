import { useState } from "react";
import closeButton from "../../../assets/icons/close-btn.svg";

import "../Modals.css";
import "./RegisterModal.css";

function RegisterModal({
  activeModal,
  closeModal,
  handleSwitchModal,
  onRegister,
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ email, password, username, avatar: imageUrl });
  };
  return (
    <div
      className={`modal ${
        activeModal === "register-modal" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">Register</h2>
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
              Username *
              <input
                required
                className="modal__input"
                type="text"
                id="register-name"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label className="modal__label">
              Email*
              <input
                required
                className="modal__input"
                type="email"
                id="register-email"
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
                id="register-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>

            <label className="modal__label">
              Avatar URL
              <input
                className="modal__input"
                type="url"
                id="register-avatar"
                placeholder="Avatar URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="modal__auth-buttons">
            <button className="modal__submit-button">Register</button>
            <button
              className="modal__button_alternate"
              type="button"
              onClick={() => {
                handleSwitchModal();
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
