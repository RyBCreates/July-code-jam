import "./UserProfile.css";

function UserProfile({ handleLogout }) {
  return (
    <section className="profile">
      <h1 className="profile__title">User Profile</h1>
      <button className="profile__logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </section>
  );
}
export default UserProfile;
