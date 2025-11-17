// grading sysmet

// let score = prompt("Enter your score");
// score = Number(score);
// let grade = "result:";
// condition
// if (score >100){
//     console.log("Invalid Score Number")
// }  else if (score >= 70 && score <=100){
//     console.log( grade + "A")
// }  else if (score >=60){
//     console.log( grade + "B")
// } else if (score >=50){
//     console.log( grade + "c")
// } else if (score >=45){
//     console.log( grade + "D")
// } else if (score >=40){
//     console.log( grade + "E")
// } else {
//     console.log( grade + "F")
// } 



// second

let score = prompt("Enter your Score");
score = Number (score);
let grade = "Result: ";

if (score >100){
    console.log( grade + "E too much")
} else if ( score >=80 && score <=100){
    console.log( grade + "OGO")
} else if ( score >=60){
    console.log( grade + "IDAN")
} else if ( score >40){
    console.log( grade + "AGBA")
} else if ( score >=20){
    console.log( grade + "JACK")
} else {
    console.log( grade + "OLODO")
}

// const user = confirm(" Are you sure you want to delete this item")
// if (user) {
//     console.log("user pressed OK")
// } else {
//     console.log("user pressed cancle")
// }

for (add = 1; add <=20; add++){
    for (add2 = 1; add2 <=12; add2++){
        console.log(`${add} + ${add2} = ${add + add2}`)
    }
}