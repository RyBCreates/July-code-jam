import "./RouteBuilder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RouteBuilder() {
  const navigate = useNavigate();
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [difficultySelections, setDifficultySelections] = useState({});

  const activities = ["Mountain Biking", "Hiking", "White-Water Rafting"];
  const difficulties = ["Easy", "Intermediate", "Hard"];

  const handleActivityToggle = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const handleDifficultyChange = (activity, difficulty) => {
    setDifficultySelections((prev) => ({ ...prev, [activity]: difficulty }));
  };

  const handleGenerateRoute = () => {
    // (You may want to pass selectedActivities and difficultySelections as state)
    navigate("/optimal-route");
  };

  return (
    <div className="route-builder-wrapper">
      <div className="route-background" />
      <div className="route-builder">
        <div className="route-builder__content">
          <h2 className="route-builder__title">
            Choose the activities that you want to experience
          </h2>

          <div className="route-builder__filter-menu">
            <span className="route-builder__filter-label">
              Which activities would you like to try:
            </span>
            <div className="route-builder__filter-options">
              {activities.map((activity) => (
                <label key={activity} className="route-builder__filter-option">
                  <input
                    type="checkbox"
                    checked={selectedActivities.includes(activity)}
                    onChange={() => handleActivityToggle(activity)}
                  />
                  {activity}
                </label>
              ))}
            </div>
          </div>

          <div className="route-builder__activity-cards">
            {selectedActivities.map((activity) => (
              <div key={activity} className="route-builder__activity-card">
                <h3 className="route-builder__activity-name">{activity}</h3>
                <div className="route-builder__difficulty-options">
                  {difficulties.map((level) => (
                    <label
                      key={level}
                      className="route-builder__difficulty-card"
                    >
                      <input
                        type="radio"
                        name={`difficulty-${activity}`}
                        checked={difficultySelections[activity] === level}
                        onChange={() => handleDifficultyChange(activity, level)}
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="route-builder__generate-route-btn"
            onClick={handleGenerateRoute}
          >
            Generate My Route
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteBuilder;
