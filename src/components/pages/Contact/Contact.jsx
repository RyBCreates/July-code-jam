import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-page">
      <div className="contact__card">
        <h2 className="contact__title">Contact Us</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#033258" }}>
          If you have questions, feedback, or just want to say hello, feel free to reach out!
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__input-group">
            <label className="contact__label">
              Name *
              <input
                required
                className="contact__input"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </label>

            <label className="contact__label">
              Email *
              <input
                required
                className="contact__input"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </label>

            <label className="contact__label">
              Message *
              <textarea
                required
                className="contact__input"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                style={{ resize: "vertical" }}
              />
            </label>
          </div>

          <div className="contact__buttons">
            <button type="submit" className="contact__submit-button">
              Send Message
            </button>
            <button type="reset" className="contact__button_alternate">
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
