let currentSlide = 0;
const images = document.getElementsByClassName("slide-img");

function playSlideshow() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    currentSlide++;
    if (currentSlide > images.length) {
        currentSlide = 1;
    }

    images[currentSlide - 1].style.display = "block";
    setTimeout(playSlideshow, 2500);
}
playSlideshow();

let progress = 0;
const loadingBar = document.getElementById("loading-bar");

setInterval(() => {
    if (progress <= 100) {
        loadingBar.style.width = progress + "%";
        progress++;
    }
}, 60);

function toggleInfo() {
    document.getElementById("info").classList.toggle("hidden");
}
