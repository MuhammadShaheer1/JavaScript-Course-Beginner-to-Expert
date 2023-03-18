/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Shaheer";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let isJavascriptFun = true;
console.log(isJavascriptFun);

console.log(typeof (true));

isJavascriptFun = "YES!";
console.log(typeof (isJavascriptFun));

let year;
console.log(year);
console.log(typeof (year));

year = 2023;
console.log(typeof (year));

console.log(typeof (null));


let age = 20;
age = 21;

const birthYear = 2002;

var job = "programmer";
job = "teacher";

lastName = "Yasir";
console.log(lastName);


const now = 2037;
const ageShaheer = now - 2002;
const ageRida = now - 2006;
console.log(ageShaheer);

console.log(ageShaheer * 2, ageShaheer / 10, 2 ** 3);

const firstName = "Muhammad";
const lastName = "Shaheer";
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageShaheer > ageRida);
console.log(ageRida >= 18);


const now = 2037;
const ageShaheer = now - 2002;
const ageRida = now - 2006;

console.log(now - 2002 > now - 2006);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageShaheer + ageRida) / 2;
console.log(ageShaheer, ageRida, averageAge);


//Coding Challenge 1

let massMark, massJohn, heightMark, heightJohn;

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = (BMIMark > BMIJohn);

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = "Shaheer";
const job = "student";
const birthYear = 2002;
const year = 2023;

const shaheer = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(shaheer);

const shaheerNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(shaheerNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('You can start driving license 🚗')
}
else {
    yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2002;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);


// Coding Challenge 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


//type conversion
const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Shaheer'));
console.log(typeof (NaN));

console.log(String(18), 18);

//type coercion
console.log("I'm " + 21 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Shaheer'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all :)");
}
else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
}
else {
    console.log("Height is UNDEFINED");
}


const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 3) {
    console.log("Cool! 3 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number")
}
else {
    console.log("The number is neither 3 nor 7 or 9");
}

if (favourite !== 3) {
    console.log("Why not 3?");
}


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive");
// }
// else{
//     console.log("Someone else should drive....");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive");
}
else{
    console.log("Someone else should drive....");
}


// //Coding Exercise 3
// const dolphinTeam1Score = 96;
// const dolphinTeam2Score = 108;
// const dolphinteam3Score = 89;

// const koalasTeam1Score = 88;
// const koalasTeam2Score = 91;
// const koalasTeam3Score = 110;

// const dolphinTeamAvgScore = (dolphinTeam1Score + dolphinTeam2Score + dolphinteam3Score) / 3;
// const koalasTeamAvgScore = (koalasTeam1Score + koalasTeam2Score + koalasTeam3Score) / 3;

// if (dolphinTeamAvgScore > koalasTeamAvgScore){
//     console.log("Dolphin Team Won!");
// }
// else if (dolphinTeamAvgScore < koalasTeamAvgScore){
//     console.log("Koalas Team Won!");
// }
// else{
//     console.log("Both Teams have tied!")
// }

// //Bonus Question 1
// const dolphinTeam1Score = 97;
// const dolphinTeam2Score = 112;
// const dolphinteam3Score = 101;

// const koalasTeam1Score = 109;
// const koalasTeam2Score = 95;
// const koalasTeam3Score = 123;

// const dolphinTeamAvgScore = (dolphinTeam1Score + dolphinTeam2Score + dolphinteam3Score) / 3;
// const koalasTeamAvgScore = (koalasTeam1Score + koalasTeam2Score + koalasTeam3Score) / 3;

// if ((dolphinTeamAvgScore > koalasTeamAvgScore) && (dolphinTeamAvgScore >= 100)){
//     console.log("Dolphin Team Won!");
// }
// else if ((dolphinTeamAvgScore < koalasTeamAvgScore) && (koalasTeamAvgScore >= 100)){
//     console.log("Koalas Team Won!");
// }
// else if (dolphinTeamAvgScore === koalasTeamAvgScore) {
//     console.log("Both Teams have tied!");
// }
// else{
//     console.log("No Team wins the trophy!");
// }


//Bonus Question 2
const dolphinTeam1Score = 97;
const dolphinTeam2Score = 112;
const dolphinteam3Score = 101;

const koalasTeam1Score = 109;
const koalasTeam2Score = 95;
const koalasTeam3Score = 106;

const dolphinTeamAvgScore = (dolphinTeam1Score + dolphinTeam2Score + dolphinteam3Score) / 3;
const koalasTeamAvgScore = (koalasTeam1Score + koalasTeam2Score + koalasTeam3Score) / 3;

if ((dolphinTeamAvgScore > koalasTeamAvgScore) && (dolphinTeamAvgScore >= 100)){
    console.log("Dolphin Team Won!");
}
else if ((dolphinTeamAvgScore < koalasTeamAvgScore) && (koalasTeamAvgScore >= 100)){
    console.log("Koalas Team Won!");
}
else if ((dolphinTeamAvgScore === koalasTeamAvgScore) && (dolphinTeamAvgScore >= 100)) {
    console.log("Both Teams have tied!");
}
else{
    console.log("No Team wins the trophy!");
}


const day = "monday";

// switch(day){
//     case 'monday':
//         console.log("IPC Class");
//         console.log("IPC Lab");
//         break;
//     case 'tuesday':
//         console.log("Entrepreneurship and HRM");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Community Service Learning");
//         break;
//     case 'friday':
//         console.log("Professional Ethics");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

if (day === 'monday'){
    console.log("IPC Lab");
    console.log("IPC Class");
}
else if (day === 'tuesday'){
    console.log("Entrepreneurship and HRM");
}
else if (day === 'wednesday' || day === 'thursday'){
    console.log("Community Service Learning");
}
else if (day === 'friday'){
    console.log("Professinal Ethics");
}
else if (day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend :D");
}
else{
    console.log("Not a valid day!")
}


const age = 21;
age >= 18 ? console.log("You are allowed to marry!💌") : console.log("You need to wait 🖤");

const status = age >= 18 ? "adult" : "teenager";
console.log(status);

let status2;
if (age >= 18){
    status2 = "adult";
}
else {
    status2 = "teenager";
}

console.log(status2);

console.log(`I am ${age >= 18 ? "an adult" : "a teenager"}`);


const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.2 * bill);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/