import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
    <div className="contact-socials">
      <a href="#" title="LinkedIn">in</a>
      <a href="#" title="GitHub">gh</a>
      <a href="#" title="Twitter">tw</a>
    </div>
  </section>
);

export default Contact; 