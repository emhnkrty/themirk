import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
import CategoryShowcase from './components/CategoryShowcase';
import './App.css';
import ComingSoonSlider from './components/ComingSoonSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CategoryShowcase />
      <ComingSoonSlider />
   
      <Footer />
    </div>
  );
}

export default App;
