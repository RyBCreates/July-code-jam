import closeButton from "../../../assets/icons/close-button.svg";

import "../Modals.css";
import "./RegisterModal.css";

function RegisterModal({ activeModal, closeModal, handleSwitchModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              ></input>
            </label>

            <label className="modal__label">
              Avatar URL
              <input
                className="modal__input"
                type="url"
                id="register-avatar"
                placeholder="Avatar URL"
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
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
