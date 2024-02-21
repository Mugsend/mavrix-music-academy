let slideIndex = 0;
const intervalTime = 3000; // Change slide every 3 seconds

function showSlide() {
  const slides = document.querySelectorAll('.carousel-slide img');
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });
}

function prevSlide() {
  slideIndex--;
  showSlide();
}

function nextSlide() {
  slideIndex++;
  showSlide();
}

// Automatically advance slide every intervalTime milliseconds
setInterval(nextSlide, intervalTime);

showSlide();
``