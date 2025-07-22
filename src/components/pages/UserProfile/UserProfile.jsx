import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./UserProfile.css";

function UserProfile({ handleLogout }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <h1 className="profile__title">{`Welcome, ${currentUser?.username} `}</h1>
      <button className="profile__logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </section>
  );
}
export default UserProfile;
