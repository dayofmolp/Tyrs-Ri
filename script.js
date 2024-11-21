// Task and XP System
let level = 1;
let xp = 0;

function addXP(amount) {
  xp += amount;
  if (xp >= 100) {
    level++;
    xp = 0;
    updateFeedback(`Level Up! You are now Level ${level}`);
  }
}

// Skill-Specific Tracking
let skills = {
  SQL: { level: 1, xp: 0 },
  CloudComputing: { level: 1, xp: 0 },
};

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

// Feedback System
function updateFeedback(message) {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = message;
}

// Example Usage
addXP(50); // Add 50 XP to the overall level
addSkillXP("SQL", 60); // Add 60 XP to the SQL skill
