<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aniruddh Wildlife Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <!-- GSAP + ScrollTrigger CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="home">
    <h1 class="animate">Welcome to My Cinematic Wildlife Portfolio</h1>
    <p class="animate">Immersive 3D experiences with nature</p>
    <iframe src="https://my.spline.design/kingfisherinmotion" frameborder="0" width="100%" height="600"></iframe>
  </section>

  <section id="about">
    <h1 class="animate">About Me</h1>
    <p class="animate">I am Aniruddh, a wildlife photographer and filmmaker with 8+ years of experience.</p>
  </section>

  <section id="portfolio">
    <h1 class="animate">My Work</h1>
    <div class="gallery">
      <img src="wildlife1.jpg" class="animate">
      <img src="wildlife2.jpg" class="animate">
      <img src="wildlife3.jpg" class="animate">
    </div>
    <iframe src="https://my.spline.design/fireflies" frameborder="0" width="100%" height="600"></iframe>
  </section>

  <section id="contact">
    <h1 class="animate">Contact Me</h1>
    <form class="animate">
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Your Email">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <script src="script.js"></script>
</body>
</html>
