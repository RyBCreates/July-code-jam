import "./ActivityCard.css";

function ActivityCard({
  activity,
  onButtonClick,
  buttonText,
  showButton = false,
  isSelected = false,
}) {

  return (
    <div className="activity-card">
      <img
        src={activity.image}
        alt={activity.name}
        className="activity-card__image"
      />
      <div className="activity-card__details">
        <h3 className="activity-card__details-title">{activity.name}</h3>
        <p>
          <strong>Sport:</strong> {activity.type}
        </p>
        <p>
          <strong>Coordinates:</strong> {activity.location.lat},{" "}
          {activity.location.lng}
        </p>
        <p>
          <strong>Trail:</strong> {activity.trail}
        </p>
        <p>
          <strong>Gear Needed:</strong> {activity.gearNeeded}
        </p>
        <p>
          <strong>Camping:</strong> {activity.camping}
        </p>
        <p>
          <strong>Difficulty</strong> {activity.difficulty}
          </p>
      </div>

      <button
  className={`activity-card__button ${
    isSelected ? "activity-card__button--selected" : ""
  }`}
  onClick={() => onButtonClick(activity.id)}
>
  {buttonText}
</button>

    </div>
  );
}

export default ActivityCard;
