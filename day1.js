// console.log(`hello world`);
// console.log(`i like pizza`);

// window.alert(`this is an alart`);

// document.getElementById("myH1").innerHTML = `hello`;
// document.getElementById("myP").textContent = `i like pizza`

// declaration of variaable let x;
// assignment x = 100;

// let x = 123;
// console.log(x)

// let fullName = "tolu";
// let age = 20;
// let student = true

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent =age;

// let student = 30;

// student *= 6;
// console.log(student);

// how to accept user input
// window prompt
// html textbox

// let username;

// username = window.prompt("what is your name");
// console.log(username)
// let username;

// document.getElementById("mysubmit").onclick = function(){
//  username = document.getElementById("mytext").value;
//  document.getElementById("myh1").textContent = ` hello ${username}`
// }

// type conversion

// let PI = 3.14159;
// let radius;
// let circumference;

// // radius = window.prompt("enter radius")
// radius = Number(radius);

// document.getElementById("mysubmit").onclick = function(){
// radius = document.getElementById("mytext").value;
// radius = Number(radius);
// circumference = 2 * PI * radius;
// document.getElementById("myH3").innerText = circumference;

// }

// counter

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countlabel");

// let count = 0;
// increaseBtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countlabel.textContent = count;
// }

// let x = 3.31;
// let y = 2;
// let z;
// z = Math.round(x);
// z = Math.floor(x)
// console.log(z)

// const min = 50;
// const max = 100;

// let randonnum =Math.floor(Math.random() *( max -min)) +min;
// console.log(randonnum);

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("Label1");
// const myLabel2= document.getElementById("Label2");
// const myLabel3 = document.getElementById("Label3");
// const min = 1;
// const max = 100;
// let randomnum1;
// let randomnum2;
// let randomnum3;

// myButton.onclick = function(){
//     randomnum1= Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = randomnum1;
//      randomnum2= Math.floor(Math.random() * max) + min;
//     myLabel2.textContent = randomnum2;
//      randomnum3= Math.floor(Math.random() * max) + min;
//     myLabel3.textContent = randomnum3;
// }

// if statement

// let age = 13;

// if( age >= 18){
//     console.log("you are old enough to enter this site");
// }else {
//     console.log("you are too young");
// }

// let time = 14;

// if( time < 12){
//     console.log("good morning");
// } else{
//     console.log("good afternoon");
// }

// let isStudent = false;

// if(isStudent){
//     console.log("you are a student")
// }else{
//     console.log("you are not a student")
// }
// let haslicense = false;

// if( age >= 16){
//     console.log("you are old enogh to drive")

//     if(haslicense){
//         console.log("you have your license")
//     }else{
//         console.log("you do not have your license")
//     }
// }else{
//     console.log("you are not old enough to have a license")
// }

// const mytext = document.getElementById("mytext");
// // const  mysubmit = document.getElementById("mysubmit");
// const result = document.getElementById("result");
// let age;

// function mysubmit(){

// age = mytext.value;
// age = Number(age);

// if(age >=70){
//   result.textContent = `you are old` ;
// } else if(age >=50){
//     result.textContent = `you are a mid range adult` ;
// } else if(age >= 30){
//      result.textContent = `you are still a young adult` ;
// } else if(age >= 18){
//      result.textContent = `you are a youth` ;
// } else if(age >18) {
//      result.textContent = `you are too young` ;
// } else{
//    result.textContent = `enter a corrent age` ;
// }
// }

// const mycheckbox = document.getElementById("mycheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
//  const mySubmit = document.getElementById("mySubmit");
//  const subResult = document.getElementById("subResult");
//  const paymentResult = document.getElementById("paymentResult");

//  mySubmit.onclick = function(){

//     if(mycheckbox.checked){
//         subResult.textContent = `you are subscribed`
//     } else{
//          subResult.textContent = `you are not subscribed`
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = `you are paying with visa`
//     } else if( masterCardBtn.checked){
//        paymentResult.textContent = `you are paying with mastercard`
//     } else if (paypalBtn.checked){
//        paymentResult.textContent = `you are paying with Paypal`
//     } else(
//         paymentResult.textContent = `you must must select a payment type`
//     )
//  }

//  let age = 13;
// let massage = age >= 18 ? `you are an adult` :` you are a minor`;
// console.log(massage)

// let time = 7;
// let greeting = time < 12 ? `good morning` : ` good afternoon`;
// console.log(greeting)

// let isStudent = false;
// let message = isStudent ? `you are a student` : `you are not a student`;
// console.log(message);

// let purchaseamout = 125;
// let discount = purchaseamout >= 100 ? 10 : 0;
// console.log(`you total is $${ purchaseamout - purchaseamout * (discount/100) }`);

// switch statement

// let day = 20;

// switch(day){
//     case 1:
//         console.log(`it is monday`);
//         break;
//     case 2:
//         console.log(`it is tuesdat`);
//         break;
//     case 3:
//         console.log(`it is wednesday`);
//         break;
//     case 4:
//         console.log(`it is thursday`);
//         break;
//     case 5:
//         console.log(`it is friday`);
//         break;
//     case 6:
//         console.log(`it is saturday`);
//         break;
//     case 7:
//         console.log(`it is sunday`);
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

// let textScore = 90;
// let letterGrade;

// switch (true) {
//   case textScore >= 90:
//     letterGrade = "A";
//     break;
//   case textScore >= 980:
//     letterGrade = "B";
//     break;
//   case textScore >= 70:
//     letterGrade = "C";
//     break;
//   case textScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
// }
// console.log(letterGrade);


// String method in javascript

// let userName = " toluwase";

// console.log(userName.charAt(3));

// console.log(userName.indexOf("e"));

// console.log(userName.lastIndexOf("e"));

// let result = userName.startsWith(" ");

// console.log(result);

// if(result){
//     console.log("your username cant begin with an empty space")
// } else{
//     console.log(userName)
// }

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Normal Calculator</title>
// <style>
//   * {
//     box-sizing: border-box;
//     font-family: Arial, sans-serif;
//   }
//   body {
//     background-color: #eef2f3;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//   }
//   .calculator {
//     background: #222;
//     padding: 20px;
//     border-radius: 15px;
//     box-shadow: 0 4px 10px rgba(0,0,0,0.4);
//     width: 300px;
//   }
//   .display {
//     width: 100%;
//     height: 60px;
//     font-size: 24px;
//     text-align: right;
//     padding: 10px;
//     border: none;
//     border-radius: 8px;
//     margin-bottom: 10px;
//     background: #fff;
//   }
//   .buttons {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 10px;
//   }
//   button {
//     padding: 15px;
//     font-size: 18px;
//     border: none;
//     border-radius: 8px;
//     background-color: #444;
//     color: #fff;
//     cursor: pointer;
//     transition: background 0.2s;
//   }
//   button:hover {
//     background-color: #666;
//   }
//   .operator {
//     background-color: #007bff;
//   }
//   .equal {
//     background-color: #28a745;
//   }
//   .clear {
//     background-color: #dc3545;
//   }
// </style>
// </head>
// <body>

// <div class="calculator">
//   <input type="text" id="display" class="display" disabled>
//   <div class="buttons">
//     <button onclick="clearDisplay()" class="clear">C</button>
//     <button onclick="appendValue('(')">(</button>
//     <button onclick="appendValue(')')">)</button>
//     <button onclick="backspace()">←</button>

//     <button onclick="appendValue('7')">7</button>
//     <button onclick="appendValue('8')">8</button>
//     <button onclick="appendValue('9')">9</button>
//     <button onclick="appendValue('/')">÷</button>

//     <button onclick="appendValue('4')">4</button>
//     <button onclick="appendValue('5')">5</button>
//     <button onclick="appendValue('6')">6</button>
//     <button onclick="appendValue('*')">×</button>

//     <button onclick="appendValue('1')">1</button>
//     <button onclick="appendValue('2')">2</button>
//     <button onclick="appendValue('3')">3</button>
//     <button onclick="appendValue('-')">−</button>

//     <button onclick="appendValue('0')">0</button>
//     <button onclick="appendValue('.')">.</button>
//     <button onclick="appendValue('+')">+</button>
//     <button onclick="calculate()" class="equal">=</button>

//     <button onclick="sin()">sin</button>
//     <button onclick="cos()">cos</button>
//     <button onclick="tan()">tan</button>
//     <button onclick="square()">x²</button>

//     <button onclick="sqrt()">√</button>
//   </div>
// </div>

/* calculator */
  /* let display = document.getElementById('display');

  function appendValue(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function backspace() {
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  function sin() {
    try {
      display.value = Math.sin(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function cos() {
    try {
      display.value = Math.cos(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function tan() {
    try {
      display.value = Math.tan(eval(display.value) * Math.PI / 180);
    } catch {
      display.value = 'Error';
    }
  }

  function square() {
    try {
      display.value = Math.pow(eval(display.value), 2);
    } catch {
      display.value = 'Error';
    }
  }

  function sqrt() {
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch {
      display.value = 'Error';
    }
  }
</script>

</body>
</html> */

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "/" )
// console.log(phoneNumber)


// let username = "";
// username = prompt("enter your user name")

// while( username === ""){
//   alert("you did not enter your username");
// }
// console.log(`hello ${username}`)

// let username = "";
// while(username === "" || username === null ){
//   username = prompt("enter username");
// }
// console.log(`hello ${username}`)

// let userName;
// let password;
// loggedin = false;

// while(!loggedin){
//   userName = prompt("enter username");
//   password = prompt("enter password");

//   if(userName === "tolu" && password === "toluwase"){
//   loggedin = true;
//   console.log("you are loggin");
// } else(
//   console.log("enter correct detail")
// )
// }

// for(let i = 1; i <= 10000000; i++)
//   if(i === 15){
//     continue;
//   } else{
//     console.log(i)
//   }
  

const message = document.getElementById("message");
const guessinput = document.getElementById("guessinput");
const guess = document.getElementById("guess");
const result = document.getElementById("result");

const minnum = 1;
const maxnum = 100;

 const anwser = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum );
  // console.log(anwser)
  let attempt = 0;
  running = true;

guess.addEventListener("click", () => {
     guessinputt = guessinput.value;
     guessinputt = Number(guessinputt)
    
 if(isNaN (guessinputt)){
    message.textContent = "Enter a valid number";
  } 
  else if ( guessinputt < minnum || guessinputt > maxnum ){
    message.textContent = `enter number between ${minnum}-${maxnum}`
  } 
  else{
    attempt++;

    if( anwser < guessinputt){
      message.textContent = "Almost there TOO High";
    } 
    else if(anwser > guessinputt){
      message.textContent = "Almost there TOO low";
    } 
    else{
      result.textContent = `congratulation you have got it right ${anwser} in ${attempt} attempt`;
      running = false;
      if(attempt > 5 ){
        message.textContent = `YOU LOSE ${attempt}`
      }
      else(
        message.textContent = `YOU WIN ${attempt}`
      )
    }
  }


})
