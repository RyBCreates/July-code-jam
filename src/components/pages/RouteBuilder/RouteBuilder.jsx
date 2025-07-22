import "./RouteBuilder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { activities as hikingActivities } from "../../../utils/mockData/hikingData";
import { mountainBikingData } from "../../../utils/mockData/mountainBiking";
import { whiteWaterRaftingData } from "../../../utils/mockData/whiteWaterRafting";
import { generateOptimizedRoute } from "../../../utils/api/optimalRoute";
import trashIcon from "../../../assets/icons/trash-can-icon.svg";
import ActivityCard from "../ActivityCard/ActivityCard";

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

  // const handleGenerateRoute = async () => {
  //   if (selectedActivityIds.length < 2) {
  //     alert("Please select at least 2 activities to generate a route.");
  //     return;
  //   }

  //   const allActivities = Object.values(dataMap).flat();
  //   const selected = allActivities.filter((activity) =>
  //     selectedActivityIds.includes(activity.id)
  //   );

  //   try {
  //     console.log("This is the selected:", selected);
  //     const optimizedRoute = await generateOptimizedRoute(selected);
  //     navigate("/optimal-route", { state: { optimizedRoute } });
  //   } catch (error) {
  //     console.error("Error generating route:", error);
  //     alert("There was a problem generating your route. Please try again.");
  //   }
  // };

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
                      <ActivityCard
                        key={`${type}-${level}`}
                        activity={activityCard}
                        onButtonClick={handleAddToRoute}
                        buttonText="Add to Route"
                        showButton={true}
                      />
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
