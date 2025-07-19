import "./Header.css";
import logo from "../../assets/logo/logo.png";
import avatar from "../../assets/images/default-avatar.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Logo" />
        <h1 className="header__title">ColoRUSH</h1>
      </Link>
      <div className="header__user-block">
        <button className="header__login-button">Login</button>
        <img className="header__avatar" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
}

export default Header;
