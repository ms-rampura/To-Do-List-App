

// Check if user is logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// Logout button logic
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "index.html";
});

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const themeToggle = document.getElementById("themeToggle");

window.onload = () => {
  loadTasks();
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
};

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", mode);
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  createTaskElement(text);
  taskInput.value = "";
  saveTasks();
}

function createTaskElement(text, completed = false) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = text;
  span.onclick = () => {
    li.classList.toggle("completed");
    saveTasks();
  };

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
      saveTasks();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  actions.append(editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach((task) => createTaskElement(task.text, task.completed));
}
