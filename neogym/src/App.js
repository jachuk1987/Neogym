import logo from './logo.svg';
import './App.css';
import HeaderSection from './Components/HeaderSection';
import SliderSection from './Components/SliderSection';
import UsSection from './Components/UsSection';
import HealthySection from './Components/HealthySection';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SliderSection />
      <UsSection />
      <HealthySection />
    </div>
  );
}

export default App;
