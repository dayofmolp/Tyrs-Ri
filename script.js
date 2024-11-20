// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Task Manager
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("new-task").value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    document.getElementById("new-task").value = "";
    showToast("Task added successfully!");
  }
});

// Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Falling Star Game
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let score = 0;
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let stars = [];
function createStar() {
  stars.push({ x: Math.random() * canvas.width, y: 0, radius: 5 + Math.random() * 10 });
}

function updateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, index) => {
    star.y += 2;
    if (star.y > canvas.height) stars.splice(index, 1);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();
  });
}

function checkClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  stars.forEach((star, index) => {
    const distance = Math.hypot(star.x - clickX, star.y - clickY);
    if (distance < star.radius) {
      score++;
      stars.splice(index, 1);
      document.getElementById("score").textContent = score;
    }
  });
}

canvas.addEventListener("click", checkClick);
setInterval(createStar, 1000);
setInterval(updateStars, 20);
