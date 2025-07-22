import "./OptimalRoute.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import generateStaticMapUrl from "../../../utils/generateStaticMapUrl";
import trashIcon from "../../../assets/icons/trash-can-icon.svg";

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

  const [savedRoutes, setSavedRoutes] = useState([]);

  useEffect(() => {
    const storedRoutes = JSON.parse(localStorage.getItem("savedRoutes")) || [];
    setSavedRoutes(storedRoutes);
  }, []);

  const handleDeleteRoute = (id) => {
    const updated = savedRoutes.filter((route) => route.id !== id);
    setSavedRoutes(updated);
    localStorage.setItem("savedRoutes", JSON.stringify(updated));
  };

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
              const savedRoutes =
                JSON.parse(localStorage.getItem("savedRoutes")) || [];

              const newRoute = {
                id: Date.now(),
                mapUrl,
                activities: selectedActivities,
              };

              const updatedRoutes = [...savedRoutes, newRoute];
              localStorage.setItem(
                "savedRoutes",
                JSON.stringify(updatedRoutes)
              );

              setSavedRoutes(updatedRoutes); //this line ensures immediate UI update:
              //scroll down to the Save Your Route section of the page
              setTimeout(() => {
                const section = document.getElementById("saved-routes");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }, 100); // slight delay to ensure rendering finishes
            }}
          >
            Save Your Route
          </button>
        </div>

        <div className="activity-cards">
          {selectedActivities.map((activity, index) => (
            <ActivityCard
              key={`${activity.name}-${index}`}
              activity={activity}
              showButton={false}
            />
          ))}
        </div>

        <div className="saved-routes" id="saved-routes">
          <h2 className="saved-routes__title">Your Saved Routes</h2>
          <div className="saved-routes__list">
            {savedRoutes.map((route) => (
              <div key={route.id} className="saved-routes__card">
                <div className="saved-routes__map-wrapper">
                  <iframe
                    title="Static Route Preview"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${
                      route.activities[0].location.lat
                    },${route.activities[0].location.lng}&destination=${
                      route.activities[route.activities.length - 1].location.lat
                    },${
                      route.activities[route.activities.length - 1].location.lng
                    }`}
                    allowFullScreen
                  ></iframe>
                  <h3 className="saved-routes__route-title">
                    Route from {route.activities[0].name} to{" "}
                    {route.activities[route.activities.length - 1].name}
                  </h3>
                  <button
                    type="button"
                    className="saved-routes__delete-btn"
                    onClick={() => handleDeleteRoute(route.id)}
                    aria-label="Delete saved route"
                  >
                    <img src={trashIcon} alt="Trash" />
                  </button>
                </div>
                <ol className="saved-routes__activity-list">
                  {route.activities.map((act, index) => (
                    <li key={index} className="saved-routes__activity-item">
                      {act.name} — <em>{act.type}</em>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OptimalRoute;
