<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <p class="copyright">© {year} Nicolò Riglietti</p>
    <p class="tagline">Portfolio · Educazione civica</p>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid #e5e5e5;
    padding: 3rem 0;
  }

  .container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.875rem;
    color: #666;
  }

  .copyright {
    margin: 0;
  }

  .tagline {
    margin: 0;
    font-style: italic;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    .container {
      flex-direction: column;
      gap: 0.5rem;
    }

    .copyright,
    .tagline {
      width: 100%;
      text-align: center;
    }
  }
</style>