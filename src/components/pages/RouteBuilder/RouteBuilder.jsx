import "./RouteBuilder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { activities as hikingActivities } from "../../../utils/mockData/hikingData";
import { mountainBikingData } from "../../../utils/mockData/mountainBiking";
import { whiteWaterRaftingData } from "../../../utils/mockData/whiteWaterRafting";
// import { generateOptimizedRoute } from "../../../utils/api/route";

const dataMap = {
  Hiking: hikingActivities,
  "Mountain Biking": mountainBikingData,
  "White-Water Rafting": whiteWaterRaftingData,
};

function RouteBuilder() {
  const navigate = useNavigate();
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [difficultySelections, setDifficultySelections] = useState({});

  const activityType = ["Mountain Biking", "Hiking", "White-Water Rafting"];
  const handleActivityToggle = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const handleDifficultyChange = (activity, level) => {
    setDifficultySelections((prev) => {
      const currentLevels = prev[activity] || [];
      const isSelected = currentLevels.includes(level);

      const updatedLevels = isSelected
        ? currentLevels.filter((selectedLevel) => selectedLevel !== level) // remove if already selected
        : [...currentLevels, level]; // add if not selected

      return {
        ...prev,
        [activity]: updatedLevels,
      };
    });
  };

  const handleGenerateRoute = () => {
    const selected = selectedActivities.flatMap((type) => {
      const dataSet = dataMap[type] || [];
      const selectedDifficulties = difficultySelections[type] || [];
      return dataSet.filter((activity) =>
        selectedDifficulties.includes(activity.difficulty)
      );
    });

    navigate("/optimal-route", { state: { selected } });
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
            <span className="route-builder__filter-menu-label">
              Which activities would you like to try:
            </span>
            <div className="route-builder__filter-options">
              {activityType.map((type) => (
                <label key={type} className="route-builder__filter-option">
                  <input
                    type="checkbox"
                    checked={selectedActivities.includes(type)}
                    onChange={() => handleActivityToggle(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {selectedActivities.map((type) => {
            const dataSet = dataMap[type];
            if (!dataSet) return null;
            return (
              <div key={type} className="route-builder__difficulty-group">
                <p className="route-builder__filter-label">
                  Select difficulty for {type}:
                </p>
                <div className="route-builder__filter-options">
                  {["Beginner", "Intermediate", "Hard"].map((level) => {
                    const activityCard = dataSet.find(
                      (activity) => activity.difficulty === level
                    );

                    return activityCard ? (
                      <div
                        key={`${type}-${level}`}
                        className="route-builder__activity-card"
                      >
                        <img
                          src={activityCard.image}
                          alt={activityCard.name}
                          className="route-builder__activity-image"
                        />
                        <div className="route-builder__activity-info">
                          <h3 className="route-builder__activity-name">
                            {activityCard.name}
                          </h3>
                          <p>
                            <strong>Trail:</strong> {activityCard.trail}
                          </p>
                          <p>
                            <strong>Difficulty:</strong>{" "}
                            {activityCard.difficulty}
                          </p>
                          <label>
                            <input
                              type="checkbox"
                              checked={
                                difficultySelections[type]?.includes(level) ||
                                false
                              }
                              onChange={() =>
                                handleDifficultyChange(type, level)
                              }
                            />
                            {level}
                          </label>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}

          {/* <div className="route-builder__activity-cards">
            {filteredActivities.map((activity) => (
              <div key={activity.name} className="route-builder__activity-card">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="route-builder__activity-image"
                />
                <div className="route-builder__activity-info">
                  <h3 className="route-builder__activity-name">
                    {activity.name}
                  </h3>
                  <p>
                    <strong>Trail:</strong> {activity.trail}
                  </p>
                  <p>
                    <strong>Difficulty:</strong> {activity.difficulty}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

          <button
            className="route-builder__generate-route-btn"
            onClick={handleGenerateRoute}
            // onClick={() => {
            //   generateOptimizedRoute(locations);
            // }}
          >
            Generate My Route
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteBuilder;
