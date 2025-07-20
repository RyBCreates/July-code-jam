import "./testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">What Our Users Say</h2>
      <div className="testimonial-cards">
        <article className="testimonial">
          <p>“This app made our trip unforgettable!”</p>
          <p>
            <strong>- Alex, Denver</strong>
          </p>
        </article>
        <article className="testimonial">
          <p>“We hit all the right spots with no stress. Love it!”</p>
          <p>
            <strong>- Morgan, Chicago</strong>
          </p>
        </article>
        <article className="testimonial">
          <p>“Beginner to use and totally accurate. Highly recommend.”</p>
          <p>
            <strong>- Jamie, Austin</strong>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
