import "./App.css";
import Header from "./components/Header/Header";
import HowItWorks from "./components/How-It-Works/How-It-Works";
import Activities from "./components/Activities/Activities";
import RoutePreview from "./components/Route-Preview/Route-Preview";
import Form from "./components/Form/Form";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <Activities />
      <RoutePreview />
      <Form />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
