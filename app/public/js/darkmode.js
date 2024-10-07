const checkbox = document.getElementById("checkbox");
const checkboxSecond = document.getElementById("checkboxSecond");

// update switch
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  checkbox.checked = theme === "dark"; // update switch berdasarkan tema yang dpilih
  // checkboxSecond.checked = theme === "dark";
};

// local storage check
const savedTheme = localStorage.getItem("theme");

// tema yang diganti user
const currentTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// tema default user
setTheme(currentTheme);

// ganti tema
checkbox.addEventListener("change", () => {
  const theme = checkbox.checked ? "dark" : "light";
  setTheme(theme);
});
checkboxSecond.addEventListener("change", () => {
  const theme = checkboxSecond.checked ? "dark" : "light";
  setTheme(theme);
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!savedTheme) {
    const theme = event.matches ? "dark" : "light";
    setTheme(theme);
  }
});
