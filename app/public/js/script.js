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

// carousel  
const carousels = document.querySelectorAll('.carousel'); // Ambil semua element carousel  

carousels.forEach(carousel => {  
    let currentIndex = 0;  
    const items = carousel.querySelectorAll('.carousel-item');  
    const totalItems = items.length;  
    const intervalTime = 1300; // waktu dalam milidetik (1.3 detik)  
    let interval;  
    
    function updateCarousel() {  
        items.forEach((item, index) => {  
            item.style.transform = `translateX(${-currentIndex * 100}%)`;  
        });  
    }

    function nextSlide() {  
        currentIndex = (currentIndex + 1) % totalItems;  
        updateCarousel();  
    }  

    function prevSlide() {  
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;  
        updateCarousel();  
    }  

    // Event listeners untuk tombol  
    const nextButton = carousel.querySelector('.next');  
    const prevButton = carousel.querySelector('.prev');  

    if (nextButton) {  
        nextButton.addEventListener('click', () => {  
            nextSlide();  
            resetInterval();  
        });  
    }  

    if (prevButton) {  
        prevButton.addEventListener('click', () => {  
            prevSlide();  
            resetInterval();  
        });  
    }  

    // Fungsi untuk mereset interval  
    function resetInterval() {  
        clearInterval(interval);  
        interval = setInterval(nextSlide, intervalTime);  
    }  

    // Inisialisasi interval saat halaman dimuat  
    interval = setInterval(nextSlide, intervalTime);  
});