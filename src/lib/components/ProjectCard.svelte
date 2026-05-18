<script>
  let { project, index } = $props();

  const typeLabel = {
    website: "Sito web",
    image: "Immagine",
    slides: "Slides",
    PDF: "PDF",
    code: "code",
    book: "Libro"
  };

  const typeIcon = {
    website: "", //◐
    image: "", // ▣
    slides: "", //▤
  };

  const tag = $derived(project.url ? "a" : "div");
  const isExternalLink = $derived(project.url?.startsWith("http") ?? false);
  const coverStyle = $derived(project.cover ? `background-image: url('${project.cover}'); background-size: cover; background-position: center;` : '');
</script>

<svelte:element
  this={tag}
  href={project.url || undefined}
  target={isExternalLink ? "_blank" : undefined}
  rel={isExternalLink ? "noopener noreferrer" : undefined}
  class="card"
>
  <!-- Cover area -->
  <div class="cover" style={coverStyle}>
    {#if !project.cover}
      <div class="gradient" aria-hidden="true"></div>
    {/if}
    <div class="icon-container">
      <span class="icon">{typeIcon[project.type]}</span>
    </div>
    <div class="header">
      <span class="type-label">{typeLabel[project.type]}</span>
      <span class="index">{String(index + 1).padStart(2, "0")}</span>
    </div>
  </div>

  <!-- Content -->
  <div class="content">
    <div class="title-section">
      <h3>{project.title}</h3>
      <span class="year">{project.year}</span>
    </div>
    <p class="description">{project.description}</p>
    <div class="footer">
      <span class="topic">{project.topic}</span>
      {#if project.url}
        <span class="link">Apri →</span>
      {/if}
    </div>
  </div>
</svelte:element>

<style>
  :global(a.card, div.card) {
    display: block;
    position: relative;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
    transition: all 500ms ease;
    cursor: pointer;
    text-decoration: none;
  }

  :global(a.card:hover, a.card:focus) {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  .cover {
    aspect-ratio: 4/3;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
  }

  .gradient {
    position: absolute;
    inset: 0;
    opacity: 0.2;
    background-image: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.5) 0%,
      transparent 50%
    );
  }

  .icon-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .icon {
    font-size: 4.5rem;
    color: rgba(255, 255, 255, 0.3);
    transition: color 500ms ease;
  }

  :global(a.card:hover .icon) {
    color: rgba(255, 255, 255, 0.5);
  }

  .header {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 3;
  }

  .type-label {
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  .index {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
  }

  .content {
    padding: 1.5rem;
  }

  .title-section {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    margin: 0;
    flex: 1;
  }

  .year {
    font-size: 0.75rem;
    color: #999;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .description {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
    
  }

  .footer {
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .topic {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #999;
  }

  .link {
    font-size: 0.875rem;
    color: #667eea;
    transition: transform 500ms ease;
  }

  :global(a.card:hover .link) {
    transform: translateX(4px);
  }
</style>