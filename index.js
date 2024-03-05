var a = 5;
var b = 7;
// console.log(parseFloat(a / b));
// console.log(parseInt(a / b));
// console.log("bismillah");
var c = Math.round(Math.random() * 10);
// First
// console.log(Math.pow(2, 3) + Math.round(4.56) + Math.sqrt(9) + Math.abs(-7));
// Second
// console.log(c);
// console.log(Math.pow(5, 3) - c + Math.sqrt(64) + Math.abs(-20));
// Third
// console.log(Math.pow(Math.abs(-9), 2));
// Fourth
// console.log(
//   Math.pow(11, 3) + Math.round(2.35) + Math.sqrt(324) + Math.abs(-80)
// );
// Fifth
// console.log(
//   Math.pow(2,8) + Math.round(4.56) + Math.sqrt(225) + Math.abs(-65)
// );
// Sixth
// console.log(
//   Math.pow(10, 5) + Math.round(6.78) + Math.sqrt(256) + Math.abs(-70)
// );
// Seventh
// console.log(
//   Math.pow(4,6) + Math.round(9.99) + Math.sqrt(289) + Math.abs(-75)
// );
// Eighth
// console.log(
//   Math.pow(5, 7) + Math.round(7.89) + Math.sqrt(361) + Math.abs(-85)
// );
// Ninth
// console.log(
//   Math.pow(12, 4) + Math.round(5.67) + Math.sqrt(400) + Math.abs(-90)
// );
// Tenth
// console.log(
//   Math.pow(6, 8) + Math.round(8.43) + Math.sqrt(441) + Math.abs(-95)
// );
// Eleventh
// console.log(Math.round(196)-Math.ceil(3.5))
// Twelfth
// console.log(Math.floor(5,5)+Math.max(2,4,6,7))
// Thirteenth
//console.log(Math.abs(22-42)-Math.round(3,3))
// Fourteenth
//console.log(Math.pow(Math.abs(-6),3))
// Fifteenth
//console.log(Math.cbrt(512)-Math.pow(2,3))
// Sixteenth
//console.log(c-Math.min(2,3,4,5,6,9))
// Seventeenth
// console.log(Math.round(2.347584754847))
// Nineteenth
//console.log(Math.round(Math.sqrt(3)))
// Twentieth
//console.log(Math.sqrt(64)-c+ Math.round(4.55633))
// console.log(Math.round(12.512));
// console.log(Math.ceil(12.512));
// console.log(Math.floor(12.512));
// console.log(Math.pow(5, 2));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.max(2, 3, 4, 5, 6, 7));
// console.log(Math.abs(-190));
// console.log(Math.floor(12.233244454));

// function StudentList() {
//   console.log(`Sarvar Eshmirzaev`);
// }
// StudentList();

//First
// function evalNumbers(num1, num2, operation) {
//     if (operation === "add") {
//         console.log(num1 + num2);
//     } else if (operation === "subtract") {
//         console.log(num1 - num2);
//     } else if (operation === "multiply") {
//         console.log(num1 * num2);
//     } else if (operation === "divide") {
//         console.log(num1 / num2);
//     } else if (operation === "modulus") {
//         console.log(num1 % num2);
//     } else {
//         console.log("Invalid operation");
//     }
// }
// evalNumbers(5, 3, "add");

// // Second
// var c = Math.round(Math.random() * 10);
// if (c % 2 == 0) {
//   console.log(c);
//   console.log(`Number is even`);
// } else {
//   console.log(c);
//   console.log(`Number is odd`);
// }

// //Third
// function findTriangleType(side1, side2, side3) {
//   if (side1 == side2 && side2 == side3) {
//     console.log("Equilateral triangle.");
//   } else if (side1 == side2 || side2 == side3 || side1 == side3) {
//     console.log("Isosceles triangle.");
//   } else {
//     console.log("Scalene triangle.");
//   }
// }

// findTriangleType(4, 9, 15);

// Fourth
// function checkLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Leap year");
//   } else {
//     console.log("Not a leap year");
//   }
// }
// checkLeapYear(2000);

//Fifth
// function findGrade(marks) {
//   if (marks >= 90 && marks <= 100) {
//     console.log("A+ grade");
//   } else if (marks >= 80 && marks < 90) {
//     console.log("A grade");
//   } else if (marks >= 70 && marks < 80) {
//     console.log("B grade");
//   } else if (marks >= 60 && marks < 70) {
//     console.log("C grade");
//   } else if (marks >= 50 && marks < 60) {
//     console.log("D grade");
//   } else if (marks >= 40 && marks < 50) {
//     console.log("E grade");
//   } else if (marks >= 0 && marks < 40) {
//     console.log("Student has failed");
//   } else {
//     console.log("Invalid marks");
//   }
// }

// findGrade(50);

// var country = "Buyuk Britaniya";

// switch (country) {
//   case "Korea":
//     console.log("Korea poytaxti Seoul");
//     break;
//   case "Uzbekistan":
//     console.log("Uzbekistan poytaxti Toshkent");
//     break;
//   case "Amerika":
//     console.log("Amerika poytaxti WashingtonDC");
//     break;
//   case "Buyuk Britaniya":
//     console.log("Buyuk Britaniya poytaxti London");
//     break;
// }
function step() {
  console.log("Hello!");
}
for (let i = 1; i < 10; i++) {
  step();
}
