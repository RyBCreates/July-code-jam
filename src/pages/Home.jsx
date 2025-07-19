import Header from "../components/Header/Header";
import HowItWorks from "../components/How-It-Works/How-It-Works";
import Activities from "../components/Activities/Activities";
import RoutePreview from "../components/Route-Preview/Route-Preview";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="page">
      <Header />
      <HowItWorks />
      <Activities />
      <RoutePreview />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
