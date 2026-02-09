<script>
  import './Home.css'

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/gulfurs', icon: '⌘' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/', icon: '◉' },
    { name: 'Email', url: 'mailto:simon@example.com', icon: '✉' }
  ]

  const projects = [
    {
      name: 'P7 Project',
      description: 'AI-driven semester project exploring conversational agents with voice synthesis.',
      tech: ['Unity', 'LLM', 'Ollama'],
      image: '/images/p7-project.png',
      github: 'https://github.com/gulfurs/P7_Project'
    },
    {
      name: 'P6 Project',
      description: 'Game development project focused on interactive experiences.',
      tech: ['Unity'],
      image: '/images/p6-project.png',
      github: 'https://github.com/gulfurs/P6-Project'
    },
    {
      name: 'P5 Project',
      description: 'Virtual reality semester project with immersive interactions.',
      tech: ['Unity', 'VR'],
      image: '/images/p5-project.png',
      github: 'https://github.com/gulfurs/P5-Project'
    },
    {
      name: 'VR Jam',
      description: 'VR game jam project built in a limited timeframe.',
      tech: ['Unity', 'VR'],
      image: '/images/vr-jam.png',
      github: 'https://github.com/gulfurs/VRJam'
    },
    {
      name: 'Web Mini-Project',
      description: 'Full-stack web application with React frontend and MongoDB backend.',
      tech: ['React', 'MongoDB'],
      image: '/images/web-mini.png',
      github: 'https://github.com/gulfurs/Sem6_Web_mini-project'
    },
    {
      name: 'Hybrid N-Back',
      description: 'Mobile & wearable computing project combining Flutter and Arduino.',
      tech: ['Flutter', 'Arduino'],
      image: '/images/nback.png',
      github: 'https://github.com/gulfurs/MWC-Hybrid-N-Back'
    },
    {
      name: 'Pentomino Tetris',
      description: 'Tetris variant using pentomino pieces with reinforcement learning AI.',
      tech: ['Python', 'Reinforcement Learning'],
      image: '/images/pentomino.png',
      github: 'https://github.com/gulfurs/pentomino_Tetris'
    },
    {
      name: 'Best Flag Guesser',
      description: 'Interactive flag guessing game built with React.',
      tech: ['React'],
      image: '/images/flag-guesser.png',
      github: 'https://github.com/gulfurs/Best_Flag_Guesser'
    }
  ]
</script>

<section class="hero-section">
  <!-- Side Navigation -->
  <nav class="side-nav">
    <a href="#/contact">Contact</a>
  </nav>

  <!-- Main Hero Content -->
  <div class="hero-content">
    <h1 class="hero__name">Simon Ingemann Axelsen</h1>
    <p class="hero__tagline">Developer | Student</p>
    <p class="hero__bio">
      I build interactive experiences across web and immersive tech, focused on clean UX and thoughtful engineering.
    </p>
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

<!-- Projects Section -->
<section class="projects-section">
  <h2 class="projects-title">Projects</h2>
  <div class="projects-grid">
    {#each projects as project}
      <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="project-image">
          <img src={project.image} alt={project.name} />
        </div>
        <div class="project-info">
          <h3 class="project-name">{project.name}</h3>
          <div class="project-tech">
            {#each project.tech as t}
              <span class="tech-tag">{t}</span>
            {/each}
          </div>
          <p class="project-description">{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>
