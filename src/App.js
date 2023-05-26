import "./App.css";
import ContactForm from "./Components/Contact/ContactForm";

import EthicalEssence from "./Components/EthicalEssence/EthicalEssence";
import NavigationBar from "./Components/Miscellaneous/NavigationBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import ServiceSlider from "./Components/Service/ServiceSlider";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      {/* <WorkFlow /> */}
      {/* <EthicalEssence /> */}
      {/* <ServiceSlider /> */}
      {/* <ContactForm /> */}

      <Portfolio />
    </div>
  );
}

export default App;
