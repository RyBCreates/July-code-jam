import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <article className="step">
          <h3>1. Select your extreme sports</h3>
          <p>Choose from biking, rafting, climbing, and more.</p>
        </article>
        <article className="step">
          <h3>2. Get your custom route</h3>
          <p>We calculate the shortest, most epic path.</p>
        </article>
        <article className="step">
          <h3>3. Adventure begins</h3>
          <p>Gear up and explore Colorado like never before.</p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
