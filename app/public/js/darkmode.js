const checkbox = document.getElementById("checkbox") || document.getElementById("checkboxSecond");
const checkboxSecond = document.getElementById("checkboxSecond");
const satelliteImage = document.getElementById("satellite-image");

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

  if (satelliteImage) {
    satelliteImage.src = isDarkMode ? "app/public/img/satelit-dark.svg" : "app/public/img/satelit-light.svg";
  }
};

const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

setTheme(currentTheme);

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

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = event.matches ? "dark" : "light";
    setTheme(newTheme);
  }
});

