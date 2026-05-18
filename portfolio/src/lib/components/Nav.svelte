<nav class="nav">
  <div class="container">
    
    <a href="#top" class="logo">
      <span class="logo-box">NR</span>
      <span class="name">Nicolò Riglietti</span>
    </a>

    <div class="links">
      <a href="#progetti">Progetti</a>
      <a href="#about">Chi sono</a>
    </div>

  </div>
</nav>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e5e5e5;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.logo-box {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}

.name {
  font-size: 16px;
  letter-spacing: -0.02em;
}

.links {
  display: flex;
  gap: 32px;
  font-size: 14px;
}

.links a {
  text-decoration: none;
  color: #666;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #111;
}

/* responsive */
@media (max-width: 640px) {
  .links {
    display: none;
  }
}
</style>