// dom manupulation
// function changeText(){
//     document.getElementById("title").innerText = "Good morning Dev"
// }

// function changeColor(){
//     const text = document.getElementById("message");
//     text.style.color = "blue";
//     text.style.fontStyle = "20px";
//     text.style.fontWeight = "bold";
// }

// function showName(){
//     const name = document.getElementById("name").value;
//     document.getElementById("output").innerText = "Hello, " + name;
// }
// the value represent the in the input html tag

// event listners in javascript

// const hoverText = document.getElementById("hoverText");

// hoverText.addEventListener("mouseover", () => {
//     hoverText.style.color = "blue";
// });

// hoverText.addEventListener("mouseout", () => {
// hoverText.style.color = "black";
// })
// // () => function symbol

const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", function() {
    hoverText.style.background = "blue";
});

hoverText.addEventListener("mouseout", function() {
    hoverText.style.background = "red"
});

// function to count number of times cliced

let count = 0;

function increase() {
  count = count + 1;
  document.getElementById("output").innerText = `${count}`;
}
function decrease() {
  count = count - 1;
  document.getElementById("output").innerText = `${count}`;
  if (count < 0) {
    document.getElementById("output").innerText = 0;
    count = 0;
  }
}

// to display out put

function generate() {
  const get = document.getElementById("input").value;
  document.getElementById("outputt").innerText = `${get}`;
}

// bulb

function turnOn() {
  const onn = document.getElementById("on");
  onn.style.background = "yellow";
}
function turnOff() {
  const onn = document.getElementById("on");
  onn.style.background = "grey";
}

// function gene(){
//   let numm =+ document.getElementById("table");
//   numm =Number(numm)
//   for(mul2 =1; mul2 <= 12; mul2++){

//   }
//     console.log(`${ numm * mul2}`)
//   // document.getElementById("print").innerText = `${mul * mul2}`
// }

// funtion to show password
const showpassword = document.getElementById("showpassword");
const pass = document.getElementById("pass");

showpassword.addEventListener("click", () => {
  // pass.type = pass.type === 'password' ? 'text' : 'password'
  if (pass.type === 'password'){
    pass.type = 'text';
    showpassword.textContent = "hide"
  } else {
    pass.type = 'password'
    showpassword.textContent = "show"
  }
})


// dropdown function

function drop() {
  const list = document.getElementById("list");
  list.style.display = "block";
}

const tolu = document.getElementById("tolu");
tolu.addEventListener("mouseover", () => {
  tolu.style.color = "red"
})
tolu.addEventListener("mouseout", () =>{
  tolu.style.color = "yellow"
})

const click = document.getElementById("click");
click.addEventListener("click", () =>{
  click.style.color = "gold"
})



const list1 = document.getElementById("list1");
const drop1 = document.getElementById("drop1")

drop1.addEventListener("click",(e) =>  {
  e.stopPropagation();
  // list1.style.display = list1.style.display === 'block' ? 'none' : 'block'
  if(list1.style.display === 'none'){
    list1.style.display = 'block'
  } else {
    list1.style.display = 'none'
  }
});
drop1.addEventListener('click', (e) => {
  if(e.target !== drop1 &&  !list1.contains(e.target)){
    list1.style.display = 'none';
  }
});

// drop1.addEventListener("click", ()=> (
//   list1.style.display = "block"
// ))
// drop1.addEventListener("dblclick", () => (
//   list1.style.display = "none"
// ))

const mybtn = document.getElementById("mybtn");
const mypara = document.getElementById("mypara");
let ramdonnum;
mybtn.onclick = function(){
  ramdonnum = Math.floor(Math.random() * 5) + 1;
  mypara.textContent = ramdonnum;
}


const myparagraph = document.getElementById("myparagraph");
let ramdonnum1;
function guess(){
  ramdonnum1 = Math.floor(Math.random() * 100) + 1;
  myparagraph.textContent = ramdonnum1; 
}


const mytext = document.getElementById("mytext");
const myout = document.getElementById("myout");
let grade;

function myresult(){
  mytextt = mytext.value 
 mytextt = Number(mytextt);
 

  if(mytextt >= 70 && mytextt  <= 100){
    grade = "A";
  } else if (mytextt >= 60 && mytextt <= 69 ){
    grade = "B";
  } else if (mytextt >= 50 && mytextt <= 59){
    grade = "C";
  } else if (mytextt >= 45 && mytextt <= 49){
    grade = "D";
  } else if(mytextt >=40 && mytextt <= 44){
    grade = "E";
  } else if (mytextt >= 0 && mytextt <= 39){
    grade = "F";
  } else {
    grade = "invalid score pls enter between 0 to 100!!!"
  }
  myout.textContent = ` Grade: ${grade}`;
} 

