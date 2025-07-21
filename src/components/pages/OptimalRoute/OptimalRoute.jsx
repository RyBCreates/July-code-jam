import "./OptimalRoute.css";
import { useLocation, useNavigate } from "react-router-dom";

function OptimalRoute() {
  const { state } = useLocation(); // get the passed state from navigate()
  const navigate = useNavigate();
  const selectedActivities = state?.selected || []; // fallback to empty array if none
  const API_KEY = "AIzaSyDkPE0UYfDibIgUqLca2vpcQI1IZKOoiHE";

  if (selectedActivities.length < 2) {
    return (
      <div className="optimal-route">
        <h2 className="optimal-route__title">
          YOUR CUSTOM COLORADO ADRENALINE ROUTE
        </h2>
        <p className="optimal-route__error">
          Not enough activities selected to generate a route. Please go back and
          choose at least 2.
        </p>
      </div>
    );
  }

  const origin = selectedActivities[0]?.location;
  const destination =
    selectedActivities[selectedActivities.length - 1]?.location;

  const waypoints = selectedActivities
    .slice(1, selectedActivities.length - 1)
    .map((act) => `${act.location.lat},${act.location.lng}`)
    .join("|");

  const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${
    origin.lat
  },${origin.lng}&destination=${destination.lat},${destination.lng}${
    waypoints ? `&waypoints=${waypoints}` : ""
  }`;

  return (
    <div>
      <main className="optimal-route">
        <h2 className="optimal-route__title">
          YOUR CUSTOM COLORADO ADRENALINE ROUTE
        </h2>

        <div className="route-map">
          <iframe
            title="Adventure Route Map"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          ></iframe>
        </div>

        <div className="route-controls">
          <button
            className="btn-reset"
            onClick={() => {
              navigate("/create-your-adventure");
            }}
          >
            Reset
          </button>

          <button
            className="btn-download"
            onClick={() => {
              const origin = selectedActivities[0]?.location;
              const destination =
                selectedActivities[selectedActivities.length - 1]?.location;

              const waypoints = selectedActivities
                .slice(1, selectedActivities.length - 1)
                .map((act) => `${act.location.lat},${act.location.lng}`)
                .join("|");

              const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${
                origin.lat
              },${origin.lng}&destination=${destination.lat},${
                destination.lng
              }${
                waypoints ? `&waypoints=${waypoints}` : ""
              }&travelmode=driving`;

              window.open(mapsUrl, "_blank");
            }}
          >
            Download map for use offline
          </button>

          <button
            className="btn-save"
            onClick={() => {
              // Replace with actual save logic
              alert("Route saved!");
            }}
          >
            Save Your Route
          </button>
        </div>

        <div className="activity-cards">
          {selectedActivities.map((activity, index) => (
            <div className="activity-card" key={`${activity.name}-${index}`}>
              <img
                src={activity.image}
                alt={activity.name}
                className="activity-card__image"
              />
              <div className="activity-card__details">
                <h3>{activity.name}</h3>
                <p>
                  <strong>Sport:</strong> {activity.type}
                </p>
                <p>
                  <strong>Coordinates:</strong> {activity.location.lat},{" "}
                  {activity.location.lng}
                </p>
                <p className="route-builder__activity_info-text-trail">
                  <strong>Trail:</strong> {activity.trail}
                </p>
                <p className="route-builder__activity_info-gear-needed">
                  <strong>Gear Needed:</strong> {activity.gearNeeded}
                </p>
                <p className="route-builder__activity_info-camping">
                  <strong>Camping:</strong> {activity.camping}
                </p>
                <p className="route-builder__activity_info-text-difficulty">
                  {/* <strong>Difficulty:</strong>{" "} */}
                  {activity.difficulty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default OptimalRoute;
