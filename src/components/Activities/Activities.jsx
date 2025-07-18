import "./activities.css";
import activityBiking from "../../assets/images/mountainBiking.jpg";
import activityHiking from "../../assets/images/hiking.jpg";
import activityRafting from "../../assets/images/rafting.jpg";

function Activities() {
  return (
    <section className="activities">
      <h2>Activity Highlights</h2>
      <div className="activity-cards">
        <div
          className="activity-card"
          style={{ backgroundImage: `url(${activityBiking})` }}
        >
          <div className="activity-card__info">
            <h3 className="activity-card__title">Mountain Biking</h3>
            <ul className="activity-card__list">
              <li>Crested Butte</li>
              <li>Winter Park</li>
              <li>Durango</li>
            </ul>
            <p className="activity-card__difficulty">
              <strong>Difficulty:</strong> Intermediate
            </p>
          </div>
        </div>
        <div
          className="activity-card"
          style={{ backgroundImage: `url(${activityHiking})` }}
        >
          <div className="activity-card__info">
            <h3 className="activity-card__title">Hiking</h3>
            <ul className="activity-card__list">
              <li>Rocky Mountain NP</li>
              <li>Maroon Bells</li>
              <li>Burangor</li>
            </ul>
            <p className="activity-card__difficulty">
              <strong>Difficulty:</strong> Beginner
            </p>
          </div>
        </div>
        <div
          className="activity-card"
          style={{ backgroundImage: `url(${activityRafting})` }}
        >
          <div className="activity-card__info">
            <h3 className="activity-card__title">White-water Rafting</h3>
            <ul className="activity-card__list">
              <li>Royal Gorge</li>
              <li>Browns Canyon</li>
              <li>Glenwood Canyon</li>
            </ul>
            <p className="activity-card__difficulty">
              <strong>Difficulty:</strong> Beginner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
