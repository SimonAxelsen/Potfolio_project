<script>
  import './Projects.css'

  const semesterProjects = [
    {
      name: 'P7 Project',
      description: 'Semester 7 project',
      tech: ['Unity', 'Ollama', 'TTS'],
      github: 'https://github.com/gulfurs/P7_Project',
      hasReport: true
    },
    {
      name: 'P6 Project',
      description: 'Semester 6 project',
      tech: ['Unity'],
      github: 'https://github.com/gulfurs/P6-Project',
      hasReport: true
    },
    {
      name: 'P5 Project',
      description: 'Semester 5 project',
      tech: ['Unity', 'VR'],
      github: 'https://github.com/gulfurs/P5-Project',
      hasReport: true
    }
  ]

  const miniProjects = [
    {
      name: 'VR Jam',
      description: 'VR game jam project',
      tech: ['Unity', 'VR'],
      github: 'https://github.com/gulfurs/VRJam',
      hasReport: true
    },
    {
      name: 'Web Mini-Project',
      description: 'Semester 6 web development mini-project',
      tech: ['React', 'MongoDB'],
      github: 'https://github.com/gulfurs/Sem6_Web_mini-project',
      hasReport: true
    },
    {
      name: 'Hybrid N-Back',
      description: 'Mobile & Wearable Computing project',
      tech: ['Flutter', 'Arduino'],
      github: 'https://github.com/gulfurs/MWC-Hybrid-N-Back',
      hasReport: true
    },
    {
      name: 'Pentomino Tetris',
      description: 'Tetris variant with pentomino pieces',
      tech: ['Python', 'Reinforcement Learning'],
      github: 'https://github.com/gulfurs/pentomino_Tetris',
      hasReport: true
    }
  ]

  const personalProjects = [
    {
      name: 'Best Flag Guesser',
      description: 'Flag guessing game',
      tech: ['React'],
      github: 'https://github.com/gulfurs/Best_Flag_Guesser',
      hasReport: false
    }
  ]
</script>

<section class="projects-page">
  <a href="#/" class="back-link">← Back</a>
  
  <h2 class="page-title">Projects</h2>

  <!-- Semester Projects -->
  <div class="projects-section">
    <h3 class="section-title">Semester Projects</h3>
    <div class="projects-grid">
      {#each semesterProjects as project}
        <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-card project-card--large">
          <div class="project-card__header">
            <h4>{project.name}</h4>
            {#if project.hasReport}
              <span class="badge">+ Report</span>
            {/if}
          </div>
          <p>{project.description}</p>
          <div class="project-card__tech">
            {#each project.tech as t}
              <span class="tech-tag">{t}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Mini Projects -->
  <div class="projects-section">
    <h3 class="section-title">Mini Projects</h3>
    <div class="projects-grid">
      {#each miniProjects as project}
        <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-card__header">
            <h4>{project.name}</h4>
            {#if project.hasReport}
              <span class="badge">+ Report</span>
            {/if}
          </div>
          <p>{project.description}</p>
          <div class="project-card__tech">
            {#each project.tech as t}
              <span class="tech-tag">{t}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Personal Projects -->
  <div class="projects-section">
    <h3 class="section-title">Personal Projects</h3>
    <div class="projects-grid">
      {#each personalProjects as project}
        <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-card__header">
            <h4>{project.name}</h4>
          </div>
          <p>{project.description}</p>
          <div class="project-card__tech">
            {#each project.tech as t}
              <span class="tech-tag">{t}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
