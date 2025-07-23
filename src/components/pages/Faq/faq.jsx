import { useState } from "react";
import "./faq.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {question}
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function Questions() {
  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <section className="faq-section">
        <h2>General Usage Questions</h2>
        <FAQItem
          question="What is Colo Rush?"
          answer="Colo Rush is a web app that helps you plan an adventure-filled trip to Colorado by selecting your favorite outdoor sports and activities."
        />
        <FAQItem
          question="Do I need an account to use Colo Rush?"
          answer="No account is required to build your route. However, if you'd like to save your itinerary or download it for later, you'll need to create a free account."
        />
      </section>

      <section className="faq-section">
        <h2>Building Your Adventure</h2>
        <FAQItem
          question="How do I choose activities?"
          answer="Start by selecting the sports or activities you're interested in, like hiking, mountain biking, or white-water rafting. Then choose from different difficulty levels to customize your trip."
        />
        <FAQItem
          question="Can I edit my activity selections?"
          answer="Yes! You can add or remove activities at any time before clicking the 'Generate Route' button."
        />
      </section>

      <section className="faq-section">
        <h2>Map and Route Information</h2>
        <FAQItem
          question="How does Colo Rush generate my route?"
          answer="Colo Rush uses location data and route optimization algorithms to calculate the most efficient path to complete your selected activities during your Colorado trip."
        />
        <FAQItem
          question="Will I see my route on a map?"
          answer="Yes, after generating your route, you'll see a detailed map with markers showing each stop along your journey."
        />
      </section>

      <section className="faq-section">
        <h2>Saving and Downloading Your Route</h2>
        <FAQItem
          question="Can I save my route for later?"
          answer="Yes. Once you generate a route, you can save it to your account and come back to it anytime."
        />
        <FAQItem
          question="Is it possible to download the route?"
          answer="Definitely! Saved routes can be exported as a downloadable PDF that includes directions, activities, and estimated travel times."
        />
      </section>

      <section className="faq-section">
        <h2>Technical Questions</h2>
        <FAQItem
          question="Why can't I generate a route?"
          answer="You need to select at least three activities before generating a route. This ensures we can optimize your journey effectively."
        />
        <FAQItem
          question="Does Colo Rush work on mobile devices?"
          answer="Yes, Colo Rush is fully responsive and works great on mobile phones, tablets, and desktops."
        />
      </section>
    </div>
  );
}

export default Questions;
