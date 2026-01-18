<script>
  import { onMount } from 'svelte'
  import Home from './lib/pages/Home.svelte'
  import Projects from './lib/pages/Projects.svelte'
  import Contact from './lib/pages/Contact.svelte'

  const ROUTES = {
    home: Home,
    projects: Projects,
    contact: Contact
  }

  const parseHash = () => {
    if (typeof window === 'undefined') return 'home'
    const raw = window.location.hash.replace(/^#\/?/, '')
    return Object.keys(ROUTES).includes(raw) ? raw : 'home'
  }

  let activeRoute = 'home'

  const updateRoute = () => {
    activeRoute = parseHash()
  }

  onMount(() => {
    updateRoute()
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  })

  $: ActiveComponent = ROUTES[activeRoute]
</script>

<div class="layout">
  <svelte:component this={ActiveComponent} />
</div>
