import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-socials">
      <a href="https://www.linkedin.com/in/rajkumar-ahirwar-9a8653316/" target="_blank" title="LinkedIn">in</a>
      <a href="https://github.com/Raj675592" target="_blank" title="GitHub">gh</a>
      
    </div>
    <p>&copy; {new Date().getFullYear()} Rajkumar Ahirwar. All rights reserved.</p>
  </footer>
);

export default Footer; 