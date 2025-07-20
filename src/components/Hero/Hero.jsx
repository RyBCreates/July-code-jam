import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
          <section className="hero__text">
          <h1 className="hero__title">YOUR DREAM SUMMER ADVENTURE JUST ONE CLICK AWAY</h1>
          <p className="hero__tagline">Tell us what you love from mountain biking, rock climbing, kayaking and more. Pick your sports. We’ll map your adrenaline-filled route</p>
          <Link to="/create-your-adventure">
            <button className="btn-primary">Start Planning</button>
          </Link>
          </section>
        </div>
    </header>
  );
}

export default Hero;
