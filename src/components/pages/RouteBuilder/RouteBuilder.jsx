import "./RouteBuilder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { activities as hikingActivities } from "../../../utils/mockData/hikingData";
import { mountainBikingData } from "../../../utils/mockData/mountainBiking";
import { whiteWaterRaftingData } from "../../../utils/mockData/whiteWaterRafting";
// import { generateOptimizedRoute } from "../../../utils/api/optimalRoute";
import trashIcon from "../../../assets/icons/trash-can-icon.svg";

const dataMap = {
  Hiking: hikingActivities,
  "Mountain Biking": mountainBikingData,
  "White-Water Rafting": whiteWaterRaftingData,
};

function RouteBuilder() {
  const navigate = useNavigate();
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);

  const activityType = ["Mountain Biking", "Hiking", "White-Water Rafting"];
  const handleActivityToggle = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const handleAddToRoute = (activityId) => {
    setSelectedActivityIds((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  const handleGenerateRoute = () => {
    const allActivities = Object.values(dataMap).flat();
    const selected = allActivities.filter((activity) =>
      selectedActivityIds.includes(activity.id)
    );

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
                          <hr className="route-builder__divider" />
                          <p className="route-builder__activity_info-text-trail">
                            <strong>Trail:</strong> {activityCard.trail}
                          </p>
                          <p className="route-builder__activity_info-gear-needed">
                            <strong>Gear Needed:</strong>{" "}
                            {activityCard.gearNeeded}
                          </p>
                          <p className="route-builder__activity_info-camping">
                            <strong>Camping:</strong> {activityCard.camping}
                          </p>
                          <p className="route-builder__activity_info-text-difficulty">
                            {/* <strong>Difficulty:</strong>{" "} */}
                            {activityCard.difficulty}
                          </p>
                        </div>
                        <button
                          className="route-builder__add-to-route-btn"
                          type="button"
                          onClick={() => handleAddToRoute(activityCard.id)}
                        >
                          Add to route
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}

          {selectedActivityIds.length > 0 && (
            <div className="route-builder__selected-preview">
              <h3 className="route-builder__preview-title">
                Your Route Preview
              </h3>
              <div className="route-builder__selected-cards">
                {Object.values(dataMap)
                  .flat()
                  .filter((activity) =>
                    selectedActivityIds.includes(activity.id)
                  )
                  .map((activity) => (
                    <div
                      key={activity.id}
                      className="route-builder__selected-card"
                    >
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="route-builder__selected-image"
                      />
                      <div className="route-builder__selected-info">
                        <p className="route-builder__selected-type">
                          <strong>{activity.type}</strong>
                        </p>
                        <p className="route-builder__selected-name">
                          {activity.name}
                        </p>
                        <p className="route-builder__selected-trail">
                          <strong>Trail:</strong> {activity.trail}
                        </p>
                        <p className="route-builder__selected-difficulty">
                          <strong>Difficulty:</strong> {activity.difficulty}
                        </p>
                        <p className="route-builder__selected-gear-needed">
                          <strong>Gear Needed:</strong> {activity.gearNeeded}
                        </p>
                        <p className="route-builder__selected-camping">
                          <strong>Camping:</strong> {activity.camping}
                        </p>
                      </div>
                      <button
                        className="route-builder__remove-card-btn"
                        onClick={() => handleAddToRoute(activity.id)}
                        aria-label="Remove from route"
                      >
                        <img src={trashIcon} alt="Remove" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
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
