// array
const personal = [ "Olaniyi", "Toluwase", "Student", 19, "300level", "EAUED", "Coding", "Firstclass", "CGPA",  4.52];
console.log(personal);

// output using es5 syntax
console.log(personal [0]);
console.log(personal [1]);
// output in sentence es5 syntax
console.log( "My Name Is" + " " + personal[0] + " " + personal[1] +", " + "i'm" + " " + personal[3] +" " +"Years old" + " " + "I'm a" + " " +
    personal[2] + " " + "of" + " " + personal[5] + " " + "Oyo" + " " + "I love" + " " + personal[6] + " " + "i'm a" + " " + personal[4] +
    " " + personal[7] + " " + personal[2] + " " + "With a Stunning" + " " + personal[8] + " " + "Of," + " " + personal[9] );
// usimg es6 syntax
console.log(`My Name is ${personal[0]} ${personal[1]}, i'm ${personal[3]} years old I'm a ${personal[2]} of ${personal[5]} Oyo I love ${personal[6]} i'm a ${personal[4]} ${personal[7]} ${personal[2]} With a Stunning ${personal[8]} Of ${personal[9]} `);

// object with a key and value
const info = { "firstName":"Olaniyi",
    "lastName": "Toluwase",
    "job":"Student",
    "age": 19,
    "level": "300level",
    "School": "EAUED",
    "Skill": "Coding",
    "Class": "Firstclass",
    "Grade1" : "CGPA",
    "Grade": 4.52
}
// output
console.log(info);
console.log(info . lastName);
// using es5 syntax
console.log( "My Name is" + " " + info . firstName + " " + info . lastName + "," + " i'm" + " " + info . age + " Years old" + " I'm a" + " " + 
    info . job + " Of " + info . School + " " + "Oyo" + " I love " + info . Skill + " " + "i'm a " + info . level + " " + info . Class + " " + " " +
    info . job + " With a Stunning" + " " + info . Grade1 + " Of" + " " +  info . Grade  );
// using ea6 syntax
console.log(`My Name is ${info . firstName} ${info . lastName}, i'm ${info . age } Years old I'm a ${info .job} of ${info . School} Oyo I love ${info .Skill} i'm a ${info . level} ${info . Class} ${info . job} With a Stunning ${info . Grade1} Of ${info . Grade}`);