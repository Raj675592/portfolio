
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import Footer from './components/Footer';
import RollDice from './components/RollDice';



function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <RollDice />
      <Footer />
    </div>
  );
}

export default App;
