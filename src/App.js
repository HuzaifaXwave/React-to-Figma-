
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero-section/HeroSection';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      
    </div>
  );
}

export default App;
