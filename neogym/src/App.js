import logo from './logo.svg';
import './App.css';
import HeaderSection from './Components/HeaderSection';
import SliderSection from './Components/SliderSection';
import UsSection from './Components/UsSection';
import HealthySection from './Components/HealthySection';
import TrainerSection from './Components/TrainerSection';
import ContactSection from './Components/ContactSection';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SliderSection />
      <UsSection />
      <HealthySection />
      <TrainerSection />
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
