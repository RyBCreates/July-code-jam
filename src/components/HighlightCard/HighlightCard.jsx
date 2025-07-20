import activityBiking from "../../assets/images/mountainBiking.jpg";

import "./HighlightCard.css";

function HighlightCard() {
  return (
    <div
      className="highlight-card"
      style={{ backgroundImage: `url(${activityBiking})` }}
    >
      <div className="highlight-card__info">
        <h3 className="highlight-card__title">Mountain Biking</h3>
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
  );
}

export default HighlightCard;
