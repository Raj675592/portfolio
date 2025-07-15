import './Hero.css';

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero-avatar">
      <img src="profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
    </div>
    <h1>Rajkumar Ahirwar</h1>
    {/* <h2>Software Developer (Aspiring)</h2> */}
    <p>Welcome to my personal portfolio website! I love building things with code and am currently studying at IIT Kanpur.</p>
  </section>
);

export default Hero; 