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

// AOS
document.getElementById("triggerBtnAosTeam").addEventListener("click", function () {
  var dode = document.querySelector(".profilDode");
  var gungwah = document.querySelector(".profilGungwah");

  dode.classList.remove("aos-animate");
  gungwah.classList.remove("aos-animate");

  setTimeout(function () {
    dode.classList.add("aos-animate");
    gungwah.classList.add("aos-animate");
    AOS.refresh();
  }, 500);
});

// AOS di contact
document.getElementById("triggerBtnAosContact").addEventListener("click", function () {
  var message = document.querySelector(".SendMessage");
  var wa = document.querySelector(".SendWa");
  var email = document.querySelector(".SendEmail");

  message.classList.remove("aos-animate");
  wa.classList.remove("aos-animate");
  email.classList.remove("aos-animate");

  setTimeout(function () {
    message.classList.add("aos-animate");
    wa.classList.add("aos-animate");
    email.classList.add("aos-animate");
    AOS.refresh();
  }, 500);
});
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
