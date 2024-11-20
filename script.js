<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tyrs R - Task & Resource Hub</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdn.jsdelivr.net/npm/particles.js"></script> <!-- Particles.js -->
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
  <div id="particles-js"></div> <!-- Moving Background -->

  <header>
    <div id="branding">
      <h1><span>Tyrs</span> R</h1>
      <p>Your Task & Resource Hub</p>
    </div>
    <button id="theme-toggle">🌙</button>
    <nav>
      <ul>
        <li><a href="#tasks">Tasks</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- RPG Tasks Section -->
    <section id="tasks" class="glass">
      <h2>Quest Log</h2>
      <div id="character-card">
        <h3>Adventurer Stats</h3>
        <p>Level: <span id="level">1</span></p>
        <p>XP: <span id="xp">0</span>/100</p>
        <div id="xp-bar"><div id="xp-fill"></div></div>
      </div>
      <ul id="task-list"></ul>
      <form id="task-form">
        <input type="text" id="new-task" placeholder="Add a quest..." required>
        <button type="submit">Add Quest</button>
      </form>
      <h3>Completed Quests</h3>
      <ul id="completed-tasks"></ul>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="glass">
      <h2>Portfolio</h2>
      <div class="grid">
        <!-- Example Project -->
        <div class="card">
          <h3>E-commerce Platform for Artisans</h3>
          <p>A custom platform with seamless payment integration.</p>
          <button onclick="openModal('ecommerce-project')">View Details</button>
        </div>
        <!-- Modal Popup -->
        <div id="ecommerce-project" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <h3>E-commerce Platform for Artisans</h3>
            <p>Built with React, Node.js, and Stripe API.</p>
            <img src="project-screenshot.jpg" alt="Project Screenshot">
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="glass">
      <h2>Blog</h2>
      <div class="blog-grid">
        <article class="blog-card">
          <h3>How AI is Changing Our World</h3>
          <p>Discover how AI is transforming industries and our lives.</p>
          <button>Read More</button>
        </article>
        <article class="blog-card">
          <h3>10 Tips to Stay Productive</h3>
          <p>Level up your productivity with these proven tips!</p>
          <button>Read More</button>
        </article>
        <article class="blog-card">
          <h3>The Ultimate Beginner’s Guide to Web Development</h3>
          <p>Step-by-step guide to kickstart your web development journey.</p>
          <button>Read More</button>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2024 Tyrs R. Crafted with focus and passion.</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
