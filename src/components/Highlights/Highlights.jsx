import "./highlights.css";
import activityBiking from "../../assets/images/mountainBiking.jpg";
import activityHiking from "../../assets/images/hiking.jpg";
import activityRafting from "../../assets/images/rafting.jpg";

function Highlights() {
  return (
    <section className="highlights">
      <h2>Activity Highlights</h2>
      <div className="highlight-cards">
        <div className="highlight-card">
          <img
            className="highlight-card__image"
            src={activityBiking}
            alt="Mountain Biking"
          />
          <div className="highlight-card__content">
            <h3 className="highlight-card__title">Mountain Biking</h3>
            <hr style={{ border: "2px solid #ccc", borderRadius: "8px", margin: "0" }} />
            <ul className="highlight-card__list">
              <li>Crested Butte</li>
              <li>Winter Park</li>
              <li>Durango</li>
            </ul>
            <p className="highlight-card__difficulty">
              <strong>Difficulty:</strong> Intermediate
            </p>
          </div>
        </div>
        <div className="highlight-card">
          <img
            className="highlight-card__image"
            src={activityHiking}
            alt="Mountain Biking"
          />
          <div className="highlight-card__content">
            <h3 className="highlight-card__title">Hiking Trails</h3>
            <hr style={{ border: "2px solid #ccc", borderRadius: "8px", margin: "0" }} />
            <ul className="highlight-card__list">
              <li>Rocky Mountain NP</li>
              <li>Maroon Bells</li>
              <li>Burangor</li>
            </ul>
            <p className="highlight-card__difficulty">
              <strong>Difficulty:</strong> Beginner
            </p>
          </div>
        </div>
        <div className="highlight-card">
          <img
            className="highlight-card__image"
            src={activityRafting}
            alt="Mountain Biking"
          />
          <div className="highlight-card__content">
            <h3 className="highlight-card__title">White-water Rafting</h3>
            <hr style={{ border: "2px solid #ccc", borderRadius: "8px", margin: "0" }} />
            <ul className="highlight-card__list">
              <li>Royal Gorge</li>
              <li>Browns Canyon</li>
              <li>Glenwood Canyon</li>
            </ul>
            <p className="highlight-card__difficulty">
              <strong>Difficulty:</strong> Beginner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
