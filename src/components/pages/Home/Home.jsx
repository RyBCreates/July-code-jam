import Hero from "../../Hero/Hero";
import HowItWorks from "../../How-It-Works/How-It-Works";
import Activities from "../../Highlights/Highlights";
import RoutePreview from "../../Route-Preview/Route-Preview";
import Testimonials from "../../Testimonials/Testimonials";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      <Activities />
      <RoutePreview />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
