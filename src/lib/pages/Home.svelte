<script>
  import './Home.css'

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/gulfurs', icon: '⌘' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/', icon: '◉' }
  ]
</script>

<section class="hero-fullscreen">
  <!-- Side Navigation -->
  <nav class="side-nav">
    <a href="#/projects">Projects</a>
    <a href="#/contact">Contact</a>
  </nav>

  <!-- Main Hero Content -->
  <div class="hero-content">
    <h1 class="hero__name">Simon Ingemann Axelsen</h1>
    <p class="hero__tagline">Developer | Student</p>
    <p class="hero__location">📍 Copenhagen</p>
    <div class="hero__links">
      {#each socialLinks as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="social-icon">{link.icon}</span>
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</section>
