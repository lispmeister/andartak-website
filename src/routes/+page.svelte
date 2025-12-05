<script>
  // Smooth scroll function for navigation
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<main>
  <!-- Slide 1: A luxury product for hermetic environments -->
  <section id="slide1" class="slide">
    <div class="slide-content">
      <h1>A luxury product for hermetic environments</h1>
    </div>
  </section>

  <!-- Slide 2: On Earth, in Space or on Mars. Anywhere. -->
  <section id="slide2" class="slide">
    <div class="slide-content">
      <h1>On Earth, in Space or on Mars.</h1>
      <p>Anywhere.</p>
    </div>
  </section>

  <!-- Slide 3: Exquisite, reliable and maintainable over decades -->
  <section id="slide3" class="slide">
    <div class="slide-content">
      <h1>Exquisite, reliable and maintainable over decades</h1>
    </div>
  </section>

  <!-- Slide 4: Built from first principles without regard to cost -->
  <section id="slide4" class="slide">
    <div class="slide-content">
      <h1>Built from first principles without regard to cost</h1>
    </div>
  </section>

  <!-- Slide 5: Enjoy the fresh air of mountain ranges. Anywhere. -->
  <section id="slide5" class="slide">
    <div class="slide-content">
      <h1>Enjoy the fresh air of mountain ranges.</h1>
      <p>Anywhere.</p>
    </div>
  </section>

  <!-- Slide 6: Norð air revitalization systems -->
  <section id="slide6" class="slide">
    <div class="slide-content">
      <h1>Norð</h1>
      <p>air revitalization systems</p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Norð. All rights reserved.</p>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Montserrat', Arial, sans-serif;
    color: #4a4a4a;
    overflow-x: hidden;
  }

  main {
    position: relative;
    min-height: 100vh;
    background: #f8f1e9; /* A light ivory shade with a subtle warmth, perfect for a refined, elegant look. */
    background-attachment: fixed;
  }

  .slide {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    scroll-snap-align: start;
    background: transparent; /* Ensures the fixed background shows through */
  }

  .slide-content {
    max-width: 800px;
    padding: 2rem;
    z-index: 1;
  }

  .slide h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: #4a4a4a;
  }

  .slide p {
    font-size: 2rem;
    font-weight: 500;
    color: #4a4a4a;
  }

  footer {
    background: #f3f4f6;
    text-align: center;
    padding: 1.5rem;
    font-size: 0.9rem;
    color: #1e3a8a;
  }

  /* Enable smooth scrolling behavior */
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .slide h1 {
      font-size: 2.5rem;
    }

    .slide p {
      font-size: 1.5rem;
    }
  }
</style>
