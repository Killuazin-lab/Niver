// Carrossel de imagens com transição suave
let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    index = (index + 1) % images.length;
}
setInterval(showSlide, 3000);
showSlide();

// Cronômetro de tempo juntos
const startDate = new Date("2025-01-13T17:35:20"); // Data que começaram a namorar

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    
    document.getElementById("years").textContent = years.toString().padStart(2, '0');
    document.getElementById("months").textContent = months.toString().padStart(2, '0');
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();
