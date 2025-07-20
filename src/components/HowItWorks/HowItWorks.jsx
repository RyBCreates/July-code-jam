import "./HowItWorks.css";
import tag from "../../assets/icons/tag-icon.svg";
import world from "../../assets/icons/world-icon.svg";
import calendar from "../../assets/icons/calendar-icon.svg";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <article className="step">
          <img className="how-it-works__icon" src={tag} alt="Tag Icon" />
          <h3>1. Select your extreme sports</h3>
          <p className="how-it-works__description">
            Choose from biking, rafting, climbing, and more.
          </p>
        </article>
        <article className="step">
          <img className="how-it-works__icon" src={world} alt="World Icon" />
          <h3>2. Get your custom route</h3>
          <p className="how-it-works__description">
            We calculate the shortest, most epic path.
          </p>
        </article>
        <article className="step">
          <img
            className="how-it-works__icon"
            src={calendar}
            alt="Calendar Icon"
          />
          <h3>3. Adventure begins</h3>
          <p className="how-it-works__description">
            Gear up and explore Colorado like never before.
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
