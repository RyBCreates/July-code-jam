import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./UserProfile.css";

function UserProfile({ handleLogout, handleEditProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <h1 className="profile__title">{`Welcome, ${currentUser?.username} `}</h1>
      <button className="profile__logout-button" onClick={handleLogout}>
        Log Out
      </button>
      <button className="profile__edit-button" onClick={handleEditProfileClick}>
        Edit User Information
      </button>
    </section>
  );
}
export default UserProfile;
