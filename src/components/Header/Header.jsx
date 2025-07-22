import "./Header.css";
import logo from "../../assets/logo/logo.png";
import defaultAvatar from "../../assets/images/default-avatar.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ handleLoginClick, handleRegisterClick }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo-container" to="/">
          <img className="header__logo" src={logo} alt="Logo" />
          <h1 className="header__title">ColoRUSH</h1>
        </Link>
        {isLoggedIn ? (
          <Link className="header__user-block" to="/user">
            <p className="header__username">{currentUser?.username}</p>
            <img
              className="header__avatar"
              src={currentUser?.avatar || defaultAvatar}
              alt="Avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultAvatar;
              }}
            />
          </Link>
        ) : (
          <div className="header__user-block">
            <button
              className="header__register-button"
              onClick={handleRegisterClick}
            >
              Register
            </button>
            <button className="header__login-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
