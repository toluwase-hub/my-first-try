const slider = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;
const cardWidth = 89; 
const visibleCards = -4;
const totalCards = document.querySelectorAll(".digital").length;

nextBtn.addEventListener("click", () => {
  if (counter < totalCards - visibleCards) {
    counter++;
    updateSliderPosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${counter * cardWidth}px)`;
}




//to  Show spinner
function showSpinner() {
  document.getElementById('spinner').style.display = 'flex';
}

// to Hide spinner
function hideSpinner() {
  document.getElementById('spinner').style.display = 'none';
}

showSpinner();

setTimeout(() => {
  hideSpinner();
}, 2000);