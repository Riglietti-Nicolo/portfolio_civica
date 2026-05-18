<script>
    import Nav from "$lib/components/Nav.svelte";
    import Hero from "$lib/components/Hero.svelte";
    // import Projects from "$lib/components/ProjectCard.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import About from "$lib/components/About.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Nicolò Riglietti — Portfolio Educazione Civica</title>
    <meta
        name="description"
        content="Raccolta di progetti scolastici di educazione civica di Nicolò Riglietti: siti web, immagini e presentazioni su diritti, Costituzione e sostenibilità."
    />
</svelte:head>

<main class="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Projects />
     <About />
    <Footer />
</main>
