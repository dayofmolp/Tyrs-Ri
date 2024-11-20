// RPG Leveling
let xp = 0;
let level = 1;

function gainXP(amount) {
  xp += amount;
  if (xp >= 100) {
    levelUp();
  }
  document.getElementById("xp").textContent = xp % 100;
}

function levelUp() {
  level++;
  xp = xp % 100;
  document.getElementById("level").textContent = level;
  alert("Level Up! You're now level " + level + "!");
}

// Add Tasks as Quests
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("new-task").value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("task-list").appendChild(li);
    gainXP(20);
    document.getElementById("new-task").value = "";
  }
});
