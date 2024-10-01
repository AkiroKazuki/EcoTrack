// indicator
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

// contact form
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
