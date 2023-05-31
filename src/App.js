import "./App.css";
import AnimCursor from "./Components/AnimCursor";
import ClientTestimony from "./Components/ClientTestimony/ClientTestimony";
import ContactForm from "./Components/Contact/ContactForm";

import EthicalEssence from "./Components/EthicalEssence/EthicalEssence";
import FeaturedImage from "./Components/Featured/FeaturedImage";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/Miscellaneous/NavigationBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import BbqArea from "./Components/Service/BbqArea";
import ServiceGallery from "./Components/Service/ServiceGallery";
import ServiceSlider from "./Components/Service/ServiceSlider";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

function App() {
  return (
    <div className="App">
      {/* <AnimCursor />
      <NavigationBar />
      <FeaturedImage />
      <WorkFlow />
      <Portfolio />
      <ServiceSlider />
      <EthicalEssence />
      <ClientTestimony />
      <ContactForm />
      <Footer /> */}
      {/* <BbqArea /> */}
      <ServiceGallery />
    </div>
  );
}

export default App;
