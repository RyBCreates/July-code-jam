import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import SavedRoutes from "../../../components/SavedRoutes/SavedRoutes";
import { API_KEY } from "../../../constants/config";
import "./UserProfile.css";

function UserProfile({ handleLogout, handleEditProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [savedRoutes, setSavedRoutes] = useState([]);

  useEffect(() => {
    const storedRoutes = JSON.parse(localStorage.getItem("savedRoutes")) || [];
    setSavedRoutes(storedRoutes);
  }, []);

  const handleDeleteRoute = (id) => {
    const updated = savedRoutes.filter((route) => route.id !== id);
    setSavedRoutes(updated);
    localStorage.setItem("savedRoutes", JSON.stringify(updated));
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{`Welcome, ${currentUser?.username}`}</h1>
      <div className="profile__user-info">
        <div className="profile__user-details">
          <p>
            <strong>Username: </strong>
            {currentUser?.username}
          </p>
          <p>
            <strong>Email: </strong>
            {currentUser?.email}
          </p>
        </div>
      </div>
      <div className="profile__btn-container">
        <button className="profile__logout-button" onClick={handleLogout}>
          Log Out
        </button>
        <button
          className="profile__edit-button"
          onClick={handleEditProfileClick}
        >
          Edit User Information
        </button>
      </div>
      <div className="profile__saved-routes-section">
        <SavedRoutes
          savedRoutes={savedRoutes}
          onDeleteRoute={handleDeleteRoute}
          API_KEY={API_KEY}
        />
      </div>
    </section>
  );
}

export default UserProfile;
