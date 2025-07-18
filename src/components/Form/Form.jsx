import "./form.css";

function Form() {
  return (
    <section id="form-section" className="form">
      <h2>Choose Your Sports</h2>
      <form>
        <fieldset>
          <legend>Select Sports</legend>
          <label htmlFor="sports">Choose sports:</label>
          <select id="sports" multiple>
            <option>Mountain Biking</option>
            <option>Hiking</option>
            <option>Rafting</option>
            <option>Rock Climbing</option>
            <option>Horseback Riding</option>
            <option>Kayaking</option>
            <option>Jet-skiing</option>
            <option>Skydiving</option>
            <option>Summer Skiing</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Trip Details</legend>
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" />
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty">
            <option>Any</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <label htmlFor="duration">Duration:</label>
          <select id="duration">
            <option>Any</option>
            <option>1 Day</option>
            <option>2 Days</option>
            <option>3 Days</option>
          </select>
        </fieldset>
        <button type="submit" className="btn-primary">
          Generate My Route
        </button>
      </form>
    </section>
  );
}

export default Form;
