<script>
  import './Contact.css'
</script>

<section class="contact-page">
  <a href="#/" class="back-link">← Back</a>
  
  <h2 class="page-title">Get in Touch</h2>

  <div class="contact-grid">
    <div class="contact-info">
      <p class="location">📍 Copenhagen, Denmark</p>
      <p>Feel free to reach out</p>
      <p class="email"><a href="mailto:simonAxelsen@outlook.dk">simonAxelsen@outlook.dk</a></p>
      <div class="contact-links">
        <a href="https://github.com/gulfurs" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/Simon_Ingemann_Axelsen_CV.pdf" download="Simon_Ingemann_Axelsen_CV.pdf">Download CV</a>
      </div>
    </div>
    
    <form class="contact-form" action="https://formspree.io/f/mjggvywk" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>
