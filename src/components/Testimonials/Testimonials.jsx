import "./testimonials.css";
import TestimonialPhoto from "../../assets/images/Example-Photo.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-cards">
        <article className="testimonials-card">
          <img
            src={TestimonialPhoto}
            alt="User testimonial"
          />
          <p>“This app made our trip unforgettable!”</p>
          <p>
            <strong>- Alex, Denver</strong>
          </p>
        </article>
        <article className="testimonials-card">
          <img
            src={TestimonialPhoto}
            alt="User testimonial"
          ></img>
          <p>“We hit all the right spots with no stress. Love it!”</p>
          <p>
            <strong>- Morgan, Chicago</strong>
          </p>
        </article>
        <article className="testimonials-card">
          <img
            src={TestimonialPhoto}
            alt="User testimonial"
          ></img>
          <p>“Easy to use and totally accurate. Highly recommend.”</p>
          <p>
            <strong>- Jamie, Austin</strong>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
