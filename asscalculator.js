const display = document.getElementById("display");
const showsci = document.getElementById("showsci");
const show = document.getElementById("show");

show.addEventListener("click", () => {
  //  showsci.style.display = showsci.style.display === 'none' ? 'grid' : 'none'; 
  if (showsci.style.display === "none"){
    showsci.style.display = "grid"
  } else {
    showsci.style.display = "none"
  }
})
function appendtoDisplay(value){
    display.value += value;
};





function clearDisplay(){
    display.value = " ";
}

function deleteLast(){
    display.value = display.value.slice(0 ,-1)
}

function calculateResult(){
    try{
        display.value = eval(display.value)
    } catch{
        display.value = "error";
    }
}
function calsin() {
    try {
      display.value = Math.sin(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function calpi() {
    try {
      display.value = Math.PI(eval(display.value) * Math.PI / 100)
    } catch {
      display.value = 'Error'
    }
  }

  function calcos() {
    try {
      display.value = Math.cos(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function caltan() {
    try {
      display.value = Math.tan(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function calsquare() {
    try {
      display.value = Math.pow(eval(display.value), 2);
    } catch {
      display.value = 'Error';
    }
  }

  function calsquareroot() {
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch {
      display.value = 'Error';
    }
}