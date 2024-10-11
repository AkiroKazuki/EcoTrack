// const checkbox = document.getElementById("checkbox");
// const checkboxSecond = document.getElementById("checkboxSecond");

// // update switch
// const setTheme = (theme) => {
//   document.documentElement.setAttribute("data-theme", theme);
//   localStorage.setItem("theme", theme);
//   checkbox.checked = theme === "dark"; // update switch berdasarkan tema yang dpilih
//   checkboxSecond.checked = theme === "dark";
// };

// // local storage check
// const savedTheme = localStorage.getItem("theme");

// // tema yang diganti user
// const currentTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// // tema default user
// setTheme(currentTheme);

// // ganti tema
// checkbox.addEventListener("change", () => {
//   const theme = checkbox.checked ? "dark" : "light";
//   setTheme(theme);
// });
// checkboxSecond.addEventListener("change", () => {
//   const theme = checkboxSecond.checked ? "dark" : "light";
//   setTheme(theme);
// });

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
//   if (!savedTheme) {
//     const theme = event.matches ? "dark" : "light";
//     setTheme(theme);
//   }
// });


const checkbox = document.getElementById("checkbox") || document.getElementById("checkboxSecond");
const checkboxSecond = document.getElementById("checkboxSecond");
const satelliteImage = document.getElementById("satellite-image"); // Only on main.html

// Function to set the theme and update localStorage
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Update both checkboxes' states
  const isDarkMode = theme === "dark";
  if (checkbox) {
    checkbox.checked = isDarkMode; // For mobile
  }
  if (checkboxSecond) {
    checkboxSecond.checked = isDarkMode; // For desktop
  }

  // Update the satellite image source if it exists
  if (satelliteImage) {
    satelliteImage.src = isDarkMode ? "app/public/img/satelit-dark.svg" : "app/public/img/satelit-light.svg";
  }
};

// Check for a saved theme in localStorage or fallback to system preference
const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Set the initial theme
setTheme(currentTheme);

// Add event listeners for both checkboxes
if (checkbox) {
  checkbox.addEventListener("change", () => {
    const theme = checkbox.checked ? "dark" : "light";
    setTheme(theme);
  });
}

if (checkboxSecond) {
  checkboxSecond.addEventListener("change", () => {
    const theme = checkboxSecond.checked ? "dark" : "light";
    setTheme(theme);
  });
}

// Update theme based on system preference if no theme is saved
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = event.matches ? "dark" : "light";
    setTheme(newTheme);
  }
});

