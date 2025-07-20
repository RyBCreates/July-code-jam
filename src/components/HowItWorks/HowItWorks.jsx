import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <article className="step">
          <img src="../../assets/icons/tag.svg" alt="Tag Icon" />
          <h3>1. CHOOSE YOUR TAGS</h3>
          <p>Select your preferred sport, skill level, climate, and dates</p>
        </article>
        <article className="step">
          <h3>2. WE FIND THE BEST MATCHES</h3>
          <p>We match you with today's best and most exciting activities</p>
        </article>
        <article className="step">
          <h3>3. GET A PERSONALIZED ITINERARY</h3>
          <p>Customize your trip and save your booking instantly</p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
