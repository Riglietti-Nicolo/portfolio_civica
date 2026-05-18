<section id="about">
  <div class="container">
    <div class="grid">
      <div class="left-col">
        <div class="kicker">
          <span class="line"></span>
          <span class="text">Chi sono</span>
        </div>
        <h2>
          Nicolò
          <br />
          Riglietti
        </h2>
      </div>

      <div class="right-col">
        <p class="main-text">
          Questo portfolio raccoglie i progetti che ho realizzato nel
          percorso scolastico di educazione civica. Ogni lavoro è un
          modo per esplorare temi che ritengo importanti: i diritti,
          la sostenibilità, la responsabilità collettiva.
        </p>
        <p class="secondary-text">
          Uso strumenti diversi a seconda di cosa voglio comunicare:
          un sito web per esperienze interattive, un'immagine quando
          serve impatto visivo, una presentazione per approfondimenti
          strutturati.
        </p>

        <dl class="stats">
          <div class="stat">
            <dt>Formati</dt>
            <dd>Web · Img · Slides</dd>
          </div>
          <div class="stat">
            <dt>Materia</dt>
            <dd>Ed. civica</dd>
          </div>
          <div class="stat">
            <dt>Anno</dt>
            <dd>2024–25</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 0;
    border-top: 1px solid #e5e5e5;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(12, 1fr);
      gap: 3rem;
    }
  }

  .left-col {
    grid-column: 1;
  }

  @media (min-width: 1024px) {
    .left-col {
      grid-column: 1 / 5;
    }
  }

  .kicker {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .line {
    width: 2rem;
    height: 1px;
    background-color: #111;
    display: block;
  }

  .text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #666;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
    line-height: 1.2;
  }

  @media (min-width: 640px) {
    h2 {
      font-size: 3rem;
    }
  }

  .right-col {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    .right-col {
      grid-column: 6 / 13;
    }
  }

  .main-text {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
    color: #111;
  }

  .secondary-text {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    color: #666;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e5e5;
    margin: 0;
  }

  @media (min-width: 640px) {
    .stats {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #666;
    margin-bottom: 0.25rem;
  }

  dd {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }
</style>