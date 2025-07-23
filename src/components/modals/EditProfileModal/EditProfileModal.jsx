import { useState, useEffect, useContext } from "react";
import closeButton from "../../../assets/icons/close-btn.svg";

import CurrentUserContext from "../../../contexts/CurrentUserContext";

import "./EditProfileModal.css";
import "../Modals.css";

function EditProfileModal({ activeModal, closeModal }) {
  const { currentUser, updateUser } = useContext(CurrentUserContext);

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (activeModal === "edit-profile-modal") {
      setUsername(currentUser.username);
      setImageUrl(currentUser.avatar);
    }
  }, [activeModal, currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ username, avatar: imageUrl })
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to update user:", err);
      });
  };

  return (
    <div
      className={`modal ${
        activeModal === "edit-profile-modal" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">Edit User Information</h2>
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
                id="edit-username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label className="modal__label">
              Avatar *
              <input
                required
                className="modal__input"
                type="Url"
                id="edit-avatar"
                placeholder="Image Url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              ></input>
            </label>
          </div>
          <button className="modal__submit-button" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
