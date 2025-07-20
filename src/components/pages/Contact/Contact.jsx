import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        If you have questions, feedback, or just want to say hello, feel free to
        reach out!
      </p>
      <form className="contact__form">
        <div className="contact__text-input">
          <label className="contact__label" htmlFor="name"></label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="contact__text-input">
          <label className="contact__label" htmlFor="email"></label>
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="contact__text-input">
          <label className="contact__label" htmlFor="message"></label>
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
        </div>
        <button className="contact__submit-button" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
