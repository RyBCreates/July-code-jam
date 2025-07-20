import { highlightActivities } from "../../utils/HighlightData";
import HighlightCard from "../HighlightCard/HighlightCard";

import "./highlights.css";

function Highlights() {
  return (
    <section className="highlights">
      <h2 className="highlights__title">Activity Highlights</h2>
      <div className="highlight-cards">
        {highlightActivities.map((activity, index) => (
          <HighlightCard activity={activity} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
