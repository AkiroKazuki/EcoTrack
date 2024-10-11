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

  interval = setInterval(nextSlide, intervalTime);

  carousel.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, intervalTime);
  });

  const images = carousel.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.2)";
      img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
    });
  });
});
