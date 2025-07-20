import "./Home.css";
import Hero from "../../Hero/Hero";
import HowItWorks from "../../HowItWorks/HowItWorks";
import Activities from "../../Highlights/Highlights";
import RoutePreview from "../../RoutePreview/RoutePreview";
import Testimonials from "../../Testimonials/Testimonials";

function Home() {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      <Activities />
      <RoutePreview />
      <Testimonials />
    </div>
  );
}

export default Home;
