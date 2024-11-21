// Global Variables
let level = 1;
let xp = 0;

let skills = {
  SQL: { level: 1, xp: 0 },
  CloudComputing: { level: 1, xp: 0 },
};

// Function to Add XP
function addXP(amount) {
  xp += amount;
  if (xp >= 100) {
    level++;
    xp = 0;
    updateFeedback(`Level Up! You are now Level ${level}`);
    document.getElementById("character-level").textContent = level;
  }
}

// Function to Add XP to a Skill
function addSkillXP(skill, xpEarned) {
  if (skills[skill]) {
    skills[skill].xp += xpEarned;
    if (skills[skill].xp >= 100) {
      skills[skill].level++;
      skills[skill].xp = 0;
      updateFeedback(`Skill Up! ${skill} is now Level ${skills[skill].level}`);
    }
  }
}

// Function to Handle Skill XP Input
function addSkillXPFromInput() {
  const skillSelect = document.getElementById("skill-select").value;
  const xpEarned = parseInt(document.getElementById("xp-input").value, 10);
  if (!isNaN(xpEarned)) {
    addSkillXP(skillSelect, xpEarned);
  }
}

// Feedback Function
function updateFeedback(message) {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = message;
}

// Quest Management
function addQuest() {
  const questInput = document.getElementById("task-input");
  const taskList = document.getElementById("quests");

  if (questInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = questInput.value;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => {
      li.style.textDecoration = "line-through";
      updateFeedback(`Quest Completed: ${questInput.value}`);
    };
    li.appendChild(completeButton);
    taskList.appendChild(li);
    questInput.value = "";
  }
}

// GDI Feedback
function sendFeedback() {
  const taskLog = document.getElementById("task-log").value;
  const responseElement = document.getElementById("gdi-response");

  if (taskLog.trim() === "") {
    responseElement.textContent = "Please describe your task for evaluation.";
    return;
  }

  const levelUp = Math.random() > 0.5; // Simulated Evaluation
  const message = levelUp
    ? `Great job! You've leveled up based on your progress: "${taskLog}".`
    : `Good effort! Keep working on: "${taskLog}" to level up.`;
  responseElement.textContent = message;

  if (levelUp) addXP(50);
}
