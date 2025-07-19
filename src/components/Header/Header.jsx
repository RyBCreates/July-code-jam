import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="hero">
      <div className="hero__content">
        <div className="hero__logo">
          <img src={logo} alt="ColoRUSH Logo" className="hero__logo-img" />
        </div>
        <div className="hero__tagline">
          <h1>Plan Your Ultimate Colorado Adventure</h1>
          <p>Pick your sports. We’ll map your adrenaline-filled route.</p>
          <Link to="/create-your-adventure">
            <button className="btn-primary">Start Planning</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
