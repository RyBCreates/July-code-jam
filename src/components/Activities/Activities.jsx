import "./activities.css";

function Activities() {
  return (
    <section className="activities">
      <h2>Activity Highlights</h2>
      <div className="activity-cards">
        <article className="activity-card">
          <h3>Mountain Biking</h3>
          <ul>
            <li>Crested Butte</li>
            <li>Winter Park</li>
            <li>Durango</li>
          </ul>
          <p>
            <strong>Difficulty:</strong> Intermediate
          </p>
        </article>
        <article className="activity-card">
          <h3>Hiking</h3>
          <ul>
            <li>Rocky Mountain NP</li>
            <li>Maroon Bells</li>
            <li>Burangor</li>
          </ul>
          <p>
            <strong>Difficulty:</strong> Beginner
          </p>
        </article>
        <article className="activity-card">
          <h3>White-water Rafting</h3>
          <ul>
            <li>Royal Gorge</li>
            <li>Browns Canyon</li>
            <li>Glenwood Canyon</li>
          </ul>
          <p>
            <strong>Difficulty:</strong> Beginner
          </p>
        </article>
      </div>
    </section>
  );
}

export default Activities;
