// ===========================
// Announcement Slider
// ===========================

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentSlide = 0;

function updateAnnouncement() {
    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}

next.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateAnnouncement();
});

prev.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateAnnouncement();
});

// Auto Slide

setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateAnnouncement();
}, 4000);


// ===========================
// Store Product Slider
// ===========================

const storeSlider =
    document.querySelector(".store-product-slider");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    storeSlider.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    storeSlider.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});


// ===========================
// Popular Product Slider
// ===========================

const popularSlider =
    document.querySelector(".popular-product-slider");

const popularLeft =
    document.querySelector(".popular-left");

const popularRight =
    document.querySelector(".popular-right");

popularRight.addEventListener("click", () => {
    popularSlider.scrollBy({
        left: 420,
        behavior: "smooth"
    });
});

popularLeft.addEventListener("click", () => {
    popularSlider.scrollBy({
        left: -420,
        behavior: "smooth"
    });
});


const searchIcon = document.getElementById("searchIcon");
const searchOverlay = document.getElementById("searchOverlay");

searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "block";
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    searchOverlay.style.display = "none";
  }
});