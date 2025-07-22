import "./testimonials.css";
import ExamplePhoto from "../../assets/images/Example-Photo.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-cards">
        <article className="testimonials-card">
          <img src={ExamplePhoto} alt="User testimonial" />
          <p>“This app made our trip unforgettable!”</p>
          <p>
            <strong>- Alex, Boston</strong>
          </p>
        </article>
        <article className="testimonials-card">
          <img src={ExamplePhoto} alt="User testimonial" />
          <p>“We hit all the right spots with no stress. Love it!”</p>
          <p>
            <strong>- Morgan, Chicago</strong>
          </p>
        </article>
        <article className="testimonials-card">
          <img src={ExamplePhoto} alt="User testimonial" />
          <p>
            “Beginner-friendly to use and totally accurate. Highly recommend.”
          </p>
          <p>
            <strong>- Jamie, Austin</strong>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
