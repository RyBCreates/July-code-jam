import "./RoutePreview.css";
import { useEffect, useState } from "react";

function RoutePreview() {
  const [previewRoute, setPreviewRoute] = useState(null);

  const defaultRoute = {
    activities: [
      {
        name: "Buffalo Creek Mountain Biking",
        type: "Mountain Biking",
        location: { lat: 39.3763, lng: -105.2755 },
      },
      {
        name: "Clear Creek Rafting",
        type: "White-Water Rafting",
        location: { lat: 39.74, lng: -105.2057 },
      },
      {
        name: "Skydiving in Longmont",
        type: "Skydiving",
        location: { lat: 40.1672, lng: -105.1019 },
      },
    ],
  };

  useEffect(() => {
    const savedRoutes = JSON.parse(localStorage.getItem("savedRoutes")) || [];
    if (savedRoutes.length > 0) {
      setPreviewRoute(savedRoutes[savedRoutes.length - 1]);
    } else {
      setPreviewRoute(defaultRoute);
    }
  }, []);

  const API_KEY = "AIzaSyDkPE0UYfDibIgUqLca2vpcQI1IZKOoiHE";

  return (
    <section className="route-preview">
      <h2>Example Route</h2>
      <div className="route-preview__map">
        {previewRoute ? (
          <iframe
            title="Example Route"
            width="100%"
            height="300px"
            src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${
              previewRoute.activities[0].location.lat
            },${previewRoute.activities[0].location.lng}&destination=${
              previewRoute.activities[previewRoute.activities.length - 1]
                .location.lat
            },${
              previewRoute.activities[previewRoute.activities.length - 1]
                .location.lng
            }&waypoints=${previewRoute.activities
              .slice(1, previewRoute.activities.length - 1)
              .map((a) => `${a.location.lat},${a.location.lng}`)
              .join("|")}`}
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </section>
  );
}

export default RoutePreview;
