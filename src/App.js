import "./App.css";
import ClientTestimony from "./Components/ClientTestimony/ClientTestimony";
import ContactForm from "./Components/Contact/ContactForm";

import EthicalEssence from "./Components/EthicalEssence/EthicalEssence";
import FeaturedImage from "./Components/Featured/FeaturedImage";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/Miscellaneous/NavigationBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioSlider from "./Components/Portfolio/PortfolioSlider";
import ServiceSlider from "./Components/Service/ServiceSlider";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FeaturedImage />
      <WorkFlow />
      <Portfolio />
      <ServiceSlider />
      <EthicalEssence />
      <ClientTestimony />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;