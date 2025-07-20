import "./HighlightCard.css";

function HighlightCard({ activity }) {
  return (
    <div
      className="highlight-card">
      <img
        className="highlight-card__image"
        src={activity.image}
        alt={activity.name}
      />
      <div className="highlight-card__content">
          <h3 className="highlight-card__title">{activity.name}</h3>
          <hr className="highlight-card__divider" />
        <ul className="highlight-card__list">
          {activity.locations.map((location, idx) => (
            <li key={idx}>{location}</li>
          ))}
        </ul>
        <p className="highlight-card__difficulty">
          <strong>Difficulty:</strong> {activity.difficulty}
        </p>
      </div>
    </div>
  );
}

export default HighlightCard;
