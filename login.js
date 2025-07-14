const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const actionBtn = document.getElementById("actionBtn");
const error = document.getElementById("error");
const switchLink = document.getElementById("switchLink");
const formTitle = document.getElementById("formTitle");
const switchText = document.getElementById("switchText");

let isLogin = false;

window.onload = function () {
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "todo.html";
  }

  if (localStorage.getItem("user")) {
    // If user exists, switch to login mode
    switchToLogin();
  }
};

switchLink.addEventListener("click", () => {
  isLogin = !isLogin;
  isLogin ? switchToLogin() : switchToSignup();
});

actionBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    error.textContent = "Please fill in both fields.";
    return;
  }

  if (isLogin) {
    // LOGIN
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
      error.textContent = "Invalid credentials.";
    } else {
      localStorage.setItem("loggedIn", "true");
      error.textContent = "";
      window.location.href = "todo.html";
    }
  } else {
    // SIGNUP
    if (localStorage.getItem("user")) {
      error.textContent = "Account already exists. Please log in.";
      return;
    }

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");
    error.textContent = "";
    window.location.href = "todo.html";
  }
});

function switchToLogin() {
  isLogin = true;
  formTitle.textContent = "Login";
  actionBtn.textContent = "Login";
  switchText.innerHTML = `Don't have an account? <a href="#" id="switchLink">Sign Up</a>`;
}

function switchToSignup() {
  isLogin = false;
  formTitle.textContent = "Create Account";
  actionBtn.textContent = "Sign Up";
  switchText.innerHTML = `Already have an account? <a href="#" id="switchLink">Login</a>`;
}
