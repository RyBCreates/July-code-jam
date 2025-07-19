import "./hero.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <img src={hero}></img>
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

export default Hero;
