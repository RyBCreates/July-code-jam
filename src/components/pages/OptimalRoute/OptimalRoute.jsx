import { activities } from "../../../utils/mockData/hikingData.js";
import "./OptimalRoute.css";

function OptimalRoute() {
  const API_KEY = "AIzaSyDkPE0UYfDibIgUqLca2vpcQI1IZKOoiHE";

  return (
    <div>
      <main className="optimal-route">
        <h2 className="optimal-route__title">
          YOUR CUSTOM COLORADO ADRENALINE ROUTE
        </h2>
        <div className="activity-cards">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
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
                <p>
                  <strong>Difficulty:</strong> {activity.difficulty}
                </p>
                <p>
                  <strong>Permit/Fees:</strong> {activity.fees}
                </p>
                <p>
                  <strong>Access:</strong> {activity.access}
                </p>
                <p>
                  <strong>Gear:</strong> {activity.gear}
                </p>
                <p>
                  <strong>Camping/Lodging:</strong> {activity.lodging}
                </p>
                <p>
                  <strong>Emergency:</strong> {activity.emergency}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="route-map">
          {/* Replace this with actual Map rendering logic */}
          <iframe
            title="Adventure Route Map"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${activities[0]?.location.lat},${activities[0]?.location.lng}&destination=${activities[2]?.location.lat},${activities[2]?.location.lng}&waypoints=${activities[1]?.location.lat},${activities[1]?.location.lng}`}
          ></iframe>
        </div>

        <div className="offline-download">
          <button className="btn-download">Download map for use offline</button>
        </div>
      </main>
    </div>
  );
}

export default OptimalRoute;
