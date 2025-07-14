import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';
import RollDice from './components/RollDice';

import './App.css';

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
