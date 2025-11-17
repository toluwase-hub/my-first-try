// oparation under array

// add of array and removing of array

let dev = ["wahab", "tolu", "prosper", "mubarak"];

// dev.push("korede");
// console.log(dev);

// this will remove the value at the end

// dev.pop();
// console.log(dev);

// assesing element in an array by index

let cars = ["toyota", "camry", "corolla", "hellcat", "dodge"];

// console.log( cars[0]);

let vehicle = cars.slice(1, 3);
console.log(cars);
console.log(vehicle);

// conditional statement in js

// let age = 25;
// if (age >= 18 && age <= 30 ){
//     console.log( "you are young")
// }

// let age = prompt("Enter Your Age:");
// age = Number(age);

// if (age >= 18 && age <= 30){
//     console.log("You are young");
// } else if (age > 30 ){
//     console.log("You are an adult");
// } else {
//     console.log("You are Under age");
// }

// creating a js login

// let username = prompt("Enter your Username:");
// let password = prompt("Enter your Password:");

// if (username === "toluwase"){
//     if (password === "12345"){
//         console.log("Login Successful")
//     } else {
//         console.log("wrong password")
//     }
// } else{
//     console.log("User not found")
// }

// loop in js

// loop function to count from 1 to 5

// for ( let i = 1; i <= 5; i++){
//     console.log(i);
// }

// while loop

// let count = 5;
// while (count > 0){
//     console.log(count);
//     count --;
// }

// forEach loop
// => symbol of function

// let colors = [ "red", "blue", "green"];

// colors . forEach( color => {
//     console.log( "color:", color )
// })

// let latecomers = [ "Quayum", "israel", "peace", "wahab"];

// for ( let i = 0; i < latecomers . length; i++){
//     console.log(`Do not welcomme ${latecomers[i]} to the class`)
// }

// summing up numbers in an array

// let price = [50, 50, 75, 25];
// let total = 0;
// for (let i = 0; i < price.length; i++) {
//   total += price[i];
// }
// console.log("Total amount:", +total);

// const students = [
//   { name: "Toluwase", score: 76 },
//   { name: "Moses", score: 60 },
//   { name: "Korede", score: 50 },
//   { name: "Peace", score: 40 },
//   { name: "Jack", score: 30 },
// ];

// students.forEach((student) => {
//   let grade;
//   if (student.score >= 70 ) {
//     grade = "Passed";
//   } else if (student.score >= 60) {
//     grade = "Good";
//   } else if (student.score >= 50) {
//     grade = "Average";
//   } else if (student.score >= 40) {
//     grade = "Fair";
//   } else {
//     grade = "Fall";
//   }

//   console.log(` ${student.name} : ${grade}`);
// });

// function in js

// function greet() {
//   console.log("Welcome to javascript");
// }
// greet();

// the name is a parameter

// function badBoy(name) {
//   console.log("Hello, " + name + " is a Badboy");
// }
// badBoy("Toyeeb");

// functions that return a value

// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 9);
// console.log(result);

// function with multiple oparations

// function calculate(width, height) {
//   const area = width * height;
//   const perimeter = 2 * (width + height);
//   console.log(`Area = ${area}, Perimeter = ${perimeter}`);
// }
// calculate(5, 3);

// const exchange =1500;
// function convert( naira ) {
//   return naira/ exchange;
//   let doc = convert(1500);
//   console.log(doc);
// }


// funtion to convert celsius to fahrenheit

  // let celsius = prompt("Enter Temperation in  celsius:");
  // celsius= Number(celsius);
  // const fahrenheit = (celsius *  9/5) + 32;
  // console.log( ` ${celsius} celsius= ${fahrenheit} fahrenheit` );
  // if (celsius > 100){
  //   console.log( "Invalid Celsius Number!!! Try again")
  // }


  // 20% discount of each 5 product and there initial price

   const products = [
    { "name": "iphone 13", "price": 500},
    {"name": "jeans", "price": 200 },
    { "name": "laptop", "price": 600},
    { "name": "car", "price": 2000},
    { "name": "bag", "price": 100},
   ];
   products.forEach((product) => {
    let discount = product.price * 20/ 100;
    let discountprice = product.price - discount;
  console.log( ` ${product.name}: Original Price ${product.price} discount Price: ${discountprice} `);
   })


  //  array under function
//   const numbers = [ 2, 5, 8, 10, 15];
//   const double = numbers.map( n => n * 2);
//   const even = numbers.filter(n => n % 2 === 0);
//   const total = numbers.reduce((sum, n) => sum + n, 0);
//   console.log(double);
//   console.log(even);
//   console.log(total)

// let manu = 10;
// let chelsea = 7;
// function score( manu, chelsea){
// if (manu === chelsea){
//   console.log( `none wins!!!`);
// } else if( manu > chelsea){
//   console.log(`manu Wins`)
// } else{
//   console.log(`chelsea wins`)
// }
// };
// score( manu, chelsea)


// for ( let i = 1; i <= 5; i++){
//     console.log(i);
// }

// while loop

// let count = 5;
// while (count > 0){
//     console.log(count);
//     count --;
// }


// for (mul = 1; mul <= 20; mul++ ){
//   for (mul2 = 1; mul2 <=12; mul2++){
//     console.log(`${mul} * ${mul2} = ${mul * mul2}`)
//   }
// };

let surs = [ "toluwase", "Moses", "Precious", "korede"];
surs.forEach((sur) =>{
  console.log(sur)
} )
const show = document.getElementById("show")
show.innerHTML = surs

 


