import "./OptimalRoute.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";

import SavedRoutes from "../../../components/SavedRoutes/SavedRoutes";
import { API_KEY } from "../../../constants/config";

function OptimalRoute() {
  //scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation(); // get the passed state from navigate()
  const navigate = useNavigate();
  const selectedActivities = state?.optimizedRoute || []; // fallback to empty array if none
  const totalDistance = state?.totalDistanceKm || 0;

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
        <button
          className="optimal-route__back-button"
          type="button"
          onClick={() => navigate("/create-your-adventure")}
        >
          Try Again
        </button>
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

  const normalizedActivities = selectedActivities.map((act) => ({
    ...act,
    name: act.trail_name || act.name,
    location: {
      lat: parseFloat(act.latitude ?? act.location?.lat),
      lng: parseFloat(act.longitude ?? act.location?.lng),
    },
  }));

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
              const origin = normalizedActivities[0]?.location;
              const destination = normalizedActivities.at(-1)?.location;

              const waypoints = normalizedActivities
                .slice(1, -1)
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

        <SavedRoutes
          savedRoutes={savedRoutes}
          onDeleteRoute={handleDeleteRoute}
          API_KEY={API_KEY}
        />
      </main>
    </div>
  );
}

export default OptimalRoute;
