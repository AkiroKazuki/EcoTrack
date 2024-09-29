const checkbox = document.getElementById('checkbox');

// update switch
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    checkbox.checked = (theme === 'dark'); // update switch berdasarkan tema yang dpilih
};

// local storage check
const savedTheme = localStorage.getItem('theme');

// tema yang diganti user
const currentTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// tema default user
setTheme(currentTheme);

// ganti tema
checkbox.addEventListener('change', () => {
    const theme = checkbox.checked ? 'dark' : 'light';
    setTheme(theme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!savedTheme) {
        const theme = event.matches ? 'dark' : 'light';
        setTheme(theme);
    }
});

function changeColor(element) {
    const buttons = document.querySelectorAll(".indicator-button button");
    const group = document.querySelectorAll(".indicator-button");
  
    buttons.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    group.forEach((grp) => {
      grp.classList.remove("clicked");
      grp.classList.remove("active");
    });
  
    element.classList.add("clicked");
    element.parentElement.classList.add("clicked");
    element.parentElement.classList.add("active");
  }
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbyD_xi757IjUEU_t-v42Mzl4CrJcqMHzI2InAkPbp9zp7Xg_DFxvVJ_Gyqx2Jr7Zm4/exec";
  const form = document.forms["dode-contact-form"];
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
  const myAlert = document.querySelector(".alert");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // saat tombol submit di klik
    // tampilkan tombol loading dan hilangkan tombol kirim
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // saat tombol submit di klik
        // tampilkan tombol kirim dan hilangkan tombol loading
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        // tampilkan alert
        myAlert.classList.toggle("d-none");
        // reset form
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });