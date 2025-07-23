import DeveloperCard from "../../DeveloperCard/DeveloperCard";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__card">
        <h2 className="about__title">About ColoRUSH</h2>
        <p className="about__description">
          ColoRUSH is your go-to adventure planning tool for Colorado. Created
          by the FullyStacked team during an intense week-long CodeJam, this
          web app helps users plan exciting trips by selecting the outdoor
          sports and activities they want to experience—like hiking, mountain
          biking, and white-water rafting. Choose at least three activities and
          let ColoRUSH generate an optimized route so you can make the most of
          your Colorado journey.
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
