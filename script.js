// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Dynamic Task Handling
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = document.getElementById("new-task").value.trim();
  if (newTask) {
    const li = document.createElement("li");
    li.textContent = newTask;
    taskList.appendChild(li);
  }
});

// Interactive Particles
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 4000);
}
setInterval(createParticle, 200);
