<script>
  import { projects } from "$lib/data/projects";
  import ProjectCard from "./ProjectCard.svelte";

  // Raggruppa per anno scolastico
  const projectsByYear = {
    3: projects.filter(p => p.schoolYear === "3"),
    4: projects.filter(p => p.schoolYear === "4"),
    5: projects.filter(p => p.schoolYear === "5"),
  };

  const years = [3, 4, 5];
  const yearLabels = {
    3: "Terza",
    4: "Quarta",
    5: "Quinta"
  };
</script>

<section id="progetti">
  {#each years as year}
    {#if projectsByYear[year].length > 0}
      <div class="year-section">
        <div class="container">
          <h2 class="year-title">Classe {yearLabels[year]}</h2>
          
          <div class="grid">
            {#each projectsByYear[year] as project, i (project.id)}
              <ProjectCard {project} index={i} />
            {/each}
          </div>
        </div>
      </div>
    {/if}
  {/each}
</section>

<style>
  section {
    padding: 0;
  }

  .year-section {
    padding: 6rem 0;
    border-top: 1px solid #e5e5e5;
  }

  .year-section:first-child {
    border-top: none;
  }

  .container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .year-title {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 3rem 0;
    color: #111;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .year-section {
      padding: 4rem 0;
    }

    .year-title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>