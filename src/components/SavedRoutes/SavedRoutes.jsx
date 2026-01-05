import "./SavedRoutes.css";
import trashIcon from "../../assets/icons/trash-can-icon.svg";
import MapModal from "../modals/MapModal/MapModal";
import { useState } from "react";

function SavedRoutes({ savedRoutes, onDeleteRoute, API_KEY }) {
  const [mapModalUrl, setMapModalUrl] = useState(null);

  return (
    <div className="saved-routes" id="saved-routes">
      <h2 className="saved-routes__title">Your Saved Routes</h2>
      <div className="saved-routes__list">
        {savedRoutes.map((route) => (
          <div key={route.id} className="saved-routes__card">
            <div className="saved-routes__map-wrapper">
              <div
                className="saved-routes__map-clickable"
                onClick={() => {
                  const origin = route.activities[0].location;
                  const destination = route.activities.at(-1).location;
                  const waypoints = route.activities
                    .slice(1, -1)
                    .map((a) => `${a.location.lat},${a.location.lng}`)
                    .join("|");

                  const modalUrl = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${
                    origin.lat
                  },${origin.lng}&destination=${destination.lat},${
                    destination.lng
                  }${waypoints ? `&waypoints=${waypoints}` : ""}`;

                  setMapModalUrl(modalUrl);
                }}
              >
                <iframe
                  title="Static Route Preview"
                  width="100%"
                  height="300"
                  src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${
                    route.activities[0].location.lat
                  },${route.activities[0].location.lng}&destination=${
                    route.activities.at(-1).location.lat
                  },${route.activities.at(-1).location.lng}`}
                  allowFullScreen
                ></iframe>
                <h3 className="saved-routes__route-title">
                  Route from {route.activities[0].name} to{" "}
                  {route.activities.at(-1).name}
                </h3>
              </div>
              <button
                type="button"
                className="saved-routes__delete-btn"
                onClick={() => onDeleteRoute(route.id)}
                aria-label="Delete saved route"
              >
                <img src={trashIcon} alt="Delete" />
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
      <MapModal
        isOpen={!!mapModalUrl}
        onClose={() => setMapModalUrl(null)}
        mapUrl={mapModalUrl}
      />
    </div>
  );
}

export default SavedRoutes;
