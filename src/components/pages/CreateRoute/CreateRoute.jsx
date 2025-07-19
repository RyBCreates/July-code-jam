import "./CreateRoute.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import avatar from "../../../assets/images/default-avatar.svg";

function CreateRoute() {
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
    <div className="create-route-page">
      <header className="create-route-header">
        <div className="logo-block">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="app-name">ColoRUSH</h1>
        </div>
        <div className="user-block">
          <button className="login-button">Login</button>
          <img src={avatar} alt="Avatar" className="avatar-img" />
        </div>
      </header>
      <div className="content-wrapper">
        <h2 className="title">
          Choose the activities that you want to experience
        </h2>

        <div className="filter-menu">
          <span className="filter-label">
            Which activities would you like to try:
          </span>
          <div className="filter-options">
            {activities.map((activity) => (
              <label key={activity} className="filter-option">
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

        <div className="activity-cards">
          {selectedActivities.map((activity) => (
            <div key={activity} className="activity-card">
              <h3 className="activity-name">{activity}</h3>
              <div className="difficulty-options">
                {difficulties.map((level) => (
                  <label key={level} className="difficulty-card">
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

        <button className="generate-route-btn" onClick={handleGenerateRoute}>
          Generate My Route
        </button>
      </div>
    </div>
  );
}

export default CreateRoute;
