document.addEventListener("DOMContentLoaded", () => {
    const usernameField = document.getElementById("username");
    if (usernameField) {
        usernameField.focus();
    }
});

const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

// Manejo del modo oscuro
darkModeBtn.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark");
    darkModeBtn.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Cargar el tema desde localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    darkModeBtn.innerText = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}

// Lógica de inicio de sesión
// const loginForm = document.getElementById("login-form");
// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();

//     if (username === "admin" && password === "password") {
//         window.location.href = "coming.html";
//     } else {
//         alert("Invalid username or password.");
//     }
// });
