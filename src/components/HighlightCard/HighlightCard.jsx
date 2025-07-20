import "./HighlightCard.css";

function HighlightCard({ activity }) {
  return (
    <div
      className="highlight-card"
      style={{ backgroundImage: `url(${activity.image})` }}
    >
      <div className="highlight-card__info">
        <h3 className="highlight-card__title">{activity.name}</h3>
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
