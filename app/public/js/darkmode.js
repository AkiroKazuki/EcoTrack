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


const checkbox = document.getElementById("checkbox");
const satelliteImage = document.getElementById("satellite-image");

// Function to set the theme and update localStorage
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  checkbox.checked = theme === "dark";

  // Log to check if the image is updating correctly
  console.log(`Setting theme to: ${theme}`);
  
  // Change the image source based on the theme
  if (theme === "dark") {
    satelliteImage.src = "app/public/img/satelit-dark.svg"; // Dark mode image
    console.log("Dark mode image set.");
  } else {
    satelliteImage.src = "app/public/img/satelit-light.svg"; // Light mode image
    console.log("Light mode image set.");
  }
};


// Check for a saved theme in localStorage or fallback to system preference
const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Set the initial theme
setTheme(currentTheme);



// Add an event listener to the switch
checkbox.addEventListener("change", () => {
  const theme = checkbox.checked ? "dark" : "light";
  setTheme(theme);
});

// Update theme based on system preference if no theme is saved
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = event.matches ? "dark" : "light";
    setTheme(newTheme);
  }
});
