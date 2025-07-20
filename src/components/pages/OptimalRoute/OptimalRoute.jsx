import "./OptimalRoute.css";

//this is a mock array of activities
const activities = [
  {
    name: "Red Rocks Amphitheatre",
    trail: "Red Rocks Trail",
    type: "Hiking",
    location: { lat: 39.6654, lng: -105.2057 },
    difficulty: "Easy",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://www.thewanderingqueen.com/wp-content/uploads/2022/04/Best-Hikes-In-Red-Rock-Canyon-1-of-4.jpg",
  },
  {
    name: "Garden of the Gods",
    trail: "Garden Trail",
    type: "Hiking",
    location: { lat: 38.8784, lng: -104.8694 },
    difficulty: "Medium",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://images.squarespace-cdn.com/content/v1/5bad2c26d74562245b63d094/1ebb4786-2ed9-43be-a105-0fbce71e7b6b/perkins+central+garden+loop+in+garden+of+the+gods",
  },
  {
    name: "Chautauqua Park",
    trail: "Chautauqua Trail",
    type: "Hiking",
    location: { lat: 40.0005, lng: -105.2817 },
    difficulty: "Easy",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://images.squarespace-cdn.com/content/v1/534b1517e4b0b2883888bafe/709dc962-9528-481c-9869-557b4a8d1d64/Green+Mountain+Loop+Trail+Personal+Trainer.jpeg",
  },
  {
    name: "Rocky Mountain NP",
    trail: "Emerald Lake Trail",
    type: "Hiking",
    location: { lat: 40.3105, lng: -105.648 },
    difficulty: "Easy",
    elevationGain: null,
    entrancePass: "Yes",
    gearNeeded: "No",
    camping: "Yes",
    image:
      "https://theworldtravelguy.com/wp-content/uploads/2022/10/DSCF0146_900-2.jpg",
  },
  {
    name: "Rocky Mountain NP",
    trail: "Sky Pond Trail",
    type: "Hiking",
    location: { lat: 40.3109, lng: -105.6627 },
    difficulty: "Hard",
    elevationGain: null,
    entrancePass: "Yes",
    gearNeeded: "Yes",
    camping: "Yes",
    image:
      "https://www.litaofthepack.com/wp-content/uploads/2022/06/sky-pond-views-too.jpg",
  },
  {
    name: "Manitou Springs",
    trail: "The Incline",
    type: "Hiking",
    location: { lat: 38.8577, lng: -104.9334 },
    difficulty: "Hard",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://outdoorbeginner.com/wp-content/uploads/2019/11/beginners-guide-hiking-the-incline-safe-dangerous-img_2327.jpg?w=625",
  },
  {
    name: "Flatirons",
    trail: "Flatirons Loop Trail",
    type: "Hiking",
    location: { lat: 39.9999, lng: -105.2834 },
    difficulty: "Medium",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://www.litaofthepack.com/wp-content/uploads/2022/06/Flatirons-Boulder-768x1024.jpg",
  },
  {
    name: "Boulder",
    trail: "Bear Peak Trail",
    type: "Hiking",
    location: { lat: 39.9787, lng: -105.2954 },
    difficulty: "Hard",
    elevationGain: null,
    entrancePass: "No",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://i.redd.it/hike-up-to-bear-peak-in-boulder-co-v0-cl6kw1n549td1.jpg?width=3024&format=pjpg&auto=webp&s=c3269ac8ee179dbec292b0957b8ca4502193da3a",
  },
  {
    name: "Eldorado Canyon",
    trail: "Rattlesnake Gulch Trail",
    type: "Hiking",
    location: { lat: 39.9332, lng: -105.2933 },
    difficulty: "Medium",
    elevationGain: null,
    entrancePass: "Yes",
    gearNeeded: "No",
    camping: "No",
    image:
      "https://outdoorbeginner.com/wp-content/uploads/2014/12/fccc9-img_4681-e1598820282278.jpg?w=750",
  },
  {
    name: "Glenwood Canyon",
    trail: "Hanging Lake Trail",
    type: "Hiking",
    location: { lat: 39.5981, lng: -107.1917 },
    difficulty: "Medium",
    elevationGain: null,
    entrancePass: "Yes",
    gearNeeded: "Yes",
    camping: "No",
  },
  {
    name: "Mount Evans Wilderness",
    trail: "Mount Bierstadt Trail",
    type: "Hiking",
    location: { lat: 39.582, lng: -105.6438 },
    difficulty: "Hard",
    elevationGain: null,
    entrancePass: "Yes",
    gearNeeded: "Yes",
    camping: "Yes",
  },
  {
    name: "Maroon Bells",
    trail: "Maroon Bells Scenic Loop Trail",
    type: "Hiking",
    location: { lat: 39.0986, lng: -106.9414 },
    difficulty: "Easy",
    elevationGain: "160 ft",
    entrancePass: "Yes",
    gearNeeded: "No",
    camping: "Yes",
  },
  {
    name: "Rocky Mountain NP",
    trail: "Bear Lake Loop",
    type: "Hiking",
    location: { lat: 40.31196, lng: -105.64581 },
    difficulty: "Beginner",
    elevationGain: "45 ft",
    entrancePass: "Yes",
    gearNeeded: "No",
    camping: "Yes",
  },
  {
    name: "Maroon Bells",
    trail: "Maroon Lake Scenic Loop Trail",
    type: "Hiking",
    location: { lat: 39.09991, lng: -106.94192 },
    difficulty: "Beginner",
    elevationGain: "160 ft",
    entrancePass: "Yes",
    gearNeeded: "No",
    camping: "Yes",
  },
  {
    name: "Bangor City Forest",
    trail: "East-West and Deer Trail Loop",
    type: "Hiking",
    location: { lat: 29.951722, lng: -95.237709 },
    difficulty: "Beginner",
    elevationGain: "39 ft",
    entrancePass: "No",
    gearNeeded: "No",
    camping: "Yes",
  },
];

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
