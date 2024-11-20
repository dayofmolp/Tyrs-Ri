// Particles.js Background
particlesJS.load('particles-js', 'particles-config.json');

// XP Progress Bar
let xp = 0;
let level = 1;

function gainXP(amount) {
  xp += amount;
  if (xp >= 100) {
    levelUp();
  }
  updateStats();
}

function levelUp() {
  level++;
  xp %= 100;
  alert("Level Up! You're now level " + level + "!");
}

function updateStats() {
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;
  document.getElementById("xp-fill").style.width = `${(xp / 100) * 100}%`;
}

// Task Management
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const completedTasks = document.getElementById("completed-tasks");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("new-task").value.trim();
  if (task) {
    addTask(task);
    document.getElementById("new-task").value = "";
  }
});

function addTask(task) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => completeTask(task, li));
  li.textContent = task;
  li.prepend(checkbox);
  taskList.appendChild(li);
}

function completeTask(task, li) {
  taskList.removeChild(li);
  completedTasks.appendChild(li);
  li.querySelector("input").remove();
  gainXP(20);
}
