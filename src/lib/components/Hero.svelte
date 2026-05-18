<section id="top" class="hero">

  <!-- Decorative grid -->
  <div class="grid-bg" aria-hidden="true"></div>

  <div class="container">

    <div class="kicker">
      <span class="line"></span>
      <span>Portfolio · Educazione civica</span>
    </div>

    <h1 class="title">
      Cittadinanza,<br />
      <span class="accent">in pratica.</span>
    </h1>

    <p class="subtitle">
      Una raccolta dei miei lavori scolastici di educazione civica:
      siti web, immagini e presentazioni per esplorare diritti, doveri
      e responsabilità del vivere insieme.
    </p>

    <div class="actions">
      <a href="#progetti" class="btn-primary">
        Vedi i progetti <span>→</span>
      </a>

      <a href="#about" class="btn-secondary">
        Conoscimi
      </a>
    </div>

  </div>
</section>

<style>
.hero {
  position: relative;
  overflow: hidden;
  padding-top: 140px;
  padding-bottom: 100px;
}

.grid-bg {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(#000 1px, transparent 1px),
    linear-gradient(90deg, #000 1px, transparent 1px);
  background-size: 48px 48px;
}

.container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #666;
}

.line {
  width: 48px;
  height: 1px;
  background: #111;
}

.title {
  font-size: 64px;
  line-height: 0.95;
  letter-spacing: -0.03em;
  max-width: 800px;
  margin: 0;
}

.accent {
  font-style: italic;
  color: #3b82f6;
}

.subtitle {
  margin-top: 32px;
  max-width: 520px;
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}

.actions {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}

/* primary button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #111;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;
}

.btn-primary:hover {
  background: #3b82f6;
}

/* secondary link */
.btn-secondary {
  font-size: 14px;
  color: #666;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: 0.2s;
}

.btn-secondary:hover {
  color: #111;
}

/* responsive */
@media (max-width: 768px) {
  .title {
    font-size: 42px;
  }
}
</style>