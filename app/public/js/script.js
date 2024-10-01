// carousel
const carousels = document.querySelectorAll(".carousel .carousel1");

carousels.forEach((carousel) => {
  let currentIndex = 0;
  const items = carousel.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  const intervalTime = 1000; // 1 detik
  let interval;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
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

  const nextButton = carousel.querySelector(".next");
  const prevButton = carousel.querySelector(".prev");

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, intervalTime);
  }

  // Inisialisasi interval saat halaman dimuat
  interval = setInterval(nextSlide, intervalTime);

  // Hentikan interval saat hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  // Mulai kembali interval saat mouse keluar
  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, intervalTime);
  });

  // Menambahkan efek upscale pada gambar saat hover
  const images = carousel.querySelectorAll("img"); // Ambil semua gambar dalam carousel
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.2)"; // Upscale saat hover
      img.style.transition = "transform 0.3s ease"; // Transisi untuk efek upscale
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = ""; // Reset saat mouse keluar
    });
  });
});
