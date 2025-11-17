// const form = document.getElementById("myForm");
// const output = document.getElementById("output");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const name = document.getElementById("username").value;
//     output.textContent = `Hello, ${name} Welcome to javascript`;
// })

// countdown timer
// let time = 10;
// const countdown = document.getElementById("countdown");

// const interval = setInterval(() => {
//     countdown.textContent = time;
//     time --;

//     if (time < 0){
//         clearInterval(interval);
//         countdown.textContent = "Time is Up";
//         countdown.style.color = "red";
//     }
// }, 1000);

let time = 15;
const countdown = document.getElementById("countdown");
let whole = document.getElementById("whole");
let count = document.getElementById("count");

count.addEventListener("click", () => {
  const interval = setInterval(() => {
    countdown.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(interval);
      countdown.textContent = "Time is Up";
      countdown.style.color = "green";
      whole.style.background = "red";
      whole.style.scale = "1.2";
    }
  }, 1000);
});
