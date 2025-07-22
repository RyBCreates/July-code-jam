import "./HowItWorks.css";
import tagIcon from "../../assets/icons/tag.svg";
import worldIcon from "../../assets/icons/world.svg";
import calendarIcon from "../../assets/icons/calendar.svg";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">How It Works</h2>
      <div className="how-it-works__steps">
        <article className="how-it-works__step">
          <img className="how-it-works__icon" src={tagIcon} alt="Tag Icon" />
          <h3 className="how-it-works__step-title">1. CHOOSE YOUR TAGS</h3>
          <p className="how-it-works__description">
            Choose from biking, rafting, climbing, and more.
          </p>
        </article>
        <article className="how-it-works__step">
          <img
            className="how-it-works__icon"
            src={worldIcon}
            alt="World Icon"
          />
          <h3 className="how-it-works__step-title">
            2. WE FIND THE BEST MATCHES
          </h3>
          <p className="how-it-works__description">
            We match you with today's best and most exciting activities
          </p>
        </article>
        <article className="how-it-works__step">
          <img
            className="how-it-works__icon"
            src={calendarIcon}
            alt="Calendar Icon"
          />
          <h3 className="how-it-works__step-title">
            3. GET A PERSONALIZED ITINERARY
          </h3>
          <p className="how-it-works__description">
            Customize your trip and save your booking instantly
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
