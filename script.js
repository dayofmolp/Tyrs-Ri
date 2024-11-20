// RPG Task Management and XP System
let level = 1;
let xp = 0;

const taskList = document.getElementById("task-list");
const completedTasks = document.querySelector("#completed-tasks ul");
const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");

// Add new task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value.trim();
  if (taskName) {
    addTask(taskName);
    newTaskInput.value = "";
  }
});

// Add task to Active Quests
function addTask(taskName) {
  const li = document.createElement("li");
  li.className = "task-item";

  const taskText = document.createElement("span");
  taskText.textContent = taskName;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.className = "button complete-btn";
  completeButton.addEventListener("click", () => completeTask(li));

  li.appendChild(taskText);
  li.appendChild(completeButton);
  taskList.appendChild(li);
}

// Complete a task and earn XP
function completeTask(taskItem) {
  const taskName = taskItem.querySelector("span").textContent;
  taskItem.remove();
  addCompletedTask(taskName);
  gainXP(25); // Add 25 XP per task
}

// Add task to Completed Quests
function addCompletedTask(taskName) {
  const li = document.createElement("li");
  li.textContent = taskName;
  li.className = "completed-task";
  completedTasks.appendChild(li);
}

// Gain XP and Level Up
function gainXP(amount) {
  xp += amount;
  if (xp >= 100) {
    level++;
    xp = xp % 100;
    alert(`🎉 Level up! You are now level ${level}!`);
  }
  updateUI();
}

// Update XP and Level UI
function updateUI() {
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("xp-fill").style.width = (xp / 100) * 100 + "%";
}

// Update UI initially
updateUI();

// Blog Interactivity
const blogCards = document.querySelectorAll(".blog-card .button");

blogCards.forEach((button) => {
  button.addEventListener("click", () => {
    alert("This feature is under development! Stay tuned for more updates.");
  });
});

// Weather API Integration
async function fetchWeather() {
  const apiKey = "your-weather-api-key-here"; // Replace with your API key
  const city = "Cape Town"; // Default city
  const weatherInfo = document.getElementById("weather-info");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    weatherInfo.textContent = `🌤️ ${city}: ${temp}°C, ${weather}`;
  } catch (error) {
    weatherInfo.textContent = "Unable to fetch weather data.";
  }
}
fetchWeather();

// Particle.js Background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
