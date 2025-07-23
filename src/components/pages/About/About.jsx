import DeveloperCard from "../../DeveloperCard/DeveloperCard";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__card">
        <h2 className="about__title">About ColoRUSH</h2>
        <p className="about__description">
          ColoRUSH was created by a team of five passionate developers who call
          themselves FullyStacked! Born out of a week-long coding competition
          known as a CodeJam, this project challenged us to rapidly design and
          build a functional MVP. ColoRUSH is an adventure-planning app that
          helps users discover and organize exciting outdoor activities like
          hiking, biking, and rafting, tailored to their preferences. With
          speed, collaboration, and creativity at its core, ColoRUSH is our take
          on making trip planning effortless and fun.
        </p>
        <h3 className="about__sub-title">Meet the Team</h3>
        <ul className="about__developers">
          <DeveloperCard />
        </ul>
      </div>
    </section>
  );
}

export default About;
