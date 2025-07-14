# 📝 To-Do List Web App

A clean, modern, and interactive **To-Do List Web Application** built using **HTML, CSS, and JavaScript**.  
This project is currently **in development** and will continue to be improved over time.

---

## 📌 Overview

This app allows users to manage their daily tasks efficiently through a responsive, user-friendly interface. It includes essential features like task creation, completion toggling, deletion, dark/light mode, and basic user authentication using `localStorage`.

---

## ✨ Features (Completed)

### 🔐 User Authentication
- First-time users can **sign up** (username & password).
- Returning users can **log in**.
- Users stay logged in even after closing the browser.
- Logout functionality included.

### 🗂️ Task Management
- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- All task data saved in `localStorage`

### 🌗 Interface
- Responsive design for mobile & desktop
- Light and Dark mode toggle
- Intuitive UI for better UX

---

## 🚧 Upcoming Features

| Feature                     | Status     |
|----------------------------|------------|
| Password visibility toggle | 🔜 Planned |
| Forgot password option     | 🔜 Planned |
| Task due dates             | 🔜 Planned |
| Task filtering/sorting     | 🔜 Planned |
| Categories or tags         | 🔜 Planned |
| Drag-and-drop reordering   | 🔜 Planned |
| Cloud storage (optional)   | 🔜 Planned |
| Better error handling      | 🔜 Planned |

---

## 📁 Project Structure

todo-list-app/
├── index.html # Signup/Login page
├── todo.html # Main to-do app interface
├── login.css # Styling for login/signup page
├── style.css # Styling for main to-do app
├── login.js # Logic for signup/login/logout
├── script.js # Task management logic
└── README.md # Project documentation


---

## 💻 Technologies Used

| Tech         | Purpose                  |
|--------------|--------------------------|
| HTML5        | Structure & layout       |
| CSS3         | Styling & responsiveness |
| JavaScript   | Logic & interactivity    |
| localStorage | Data persistence         |

---

## 🔒 Authentication Flow

1. On first visit, the user **creates an account** (signup).
2. Their credentials are securely saved in `localStorage`.
3. If they revisit the site, they remain **logged in**.
4. The user is redirected to the main To-Do App.
5. Clicking the logout button clears the session and redirects back to login.

---

## 🖼️ Screenshots

*Coming Soon...*

---

## 🌐 Getting Started

You can download or clone the repository:

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
