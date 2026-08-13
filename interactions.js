//let myVar ="This is an alert message: Promise"
//alert("This is an alert message:  " + myVar);
// let firstName = prompt("please enter your first name:");
// let lastName = prompt("please enter your last name:");
// console.log(firstName);
// console.log(lastName);
// console.log(square(2))    // Will print: 4 
// let princ = Number(prompt("Enter Pricipal :").toLowerCase());
// let rate = Number(prompt("Enter Annual Interest Rate in percent: ").toLowerCase());
// let n = Number(prompt("Enter no of years: ").toLowerCase());
// interest = princ * rate * n;
// console.log("Interest =: ", interest);
// var msg = interest + princ;
// console.log("Amount =: ", msg);
//prompt("Total Anount =: ", msg);
// 
// function analyzeQuadratic(a, b, c) {
//     // A quadratic equation must have a non-zero 'a' coefficient
//     if (a === 0) {
//         throw new Error("Coefficient 'a' cannot be zero.");
//     }

//     // Calculate discriminant
//     const discriminant = (b * b) - (4 * a * c);

//     // Determine the nature of the roots
//     let rootType = "";
//     let r1 = "";
//     let r2 = "";
//     if (discriminant > 0) {
//         rootType = "Two distinct real roots";
//         r1 = (-b + Math.sqrt(discriminant)/(2*a));
//         r2 = (-b - Math.sqrt(discriminant)/(2*a));
//     } else if (discriminant === 0) {
//         rootType = "One real root (repeated)";
//         r1=r2 = -b/(2*a);
//     } else {
//         rootType = "Two complex (imaginary) roots";
//     }

//     return {
//         discriminant: discriminant,
//         rootType: rootType,
//         root1:  r1,
//         r2:  r2

//     };
// }

// // Example Usage:

// let a2 = prompt("Enter value for the coefficent of xsquared: a: ");
// let b2 = prompt("Enter value for the the term in x, b: ");
// let c2 = prompt("Enter value for the constant term, c: ");
// console.log(analyzeQuadratic(a2, b2, c2)); 
 
// Output: { discriminant: 1, rootType: 'Two distinct real roots' }

// Concatenation
// let firstName = prompt("Pls enter your first name: Promise");
// let lastName = prompt("Pls enter your last name: Nlerum");;
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName); // Output: 'John Doe'
// let fullNamex = firstName.concat(" ", lastName, " is your name");
// // console.log(fullNamex); // Output: 'John Doe you'

// // built-in Math object (Properties)
// console.log("PROPERTIES");

// //  Math.E: The mathematical constant e (Euler's number).
// console.log(Math.E); // Output: 2.718281828459045
// //  Math.PI: The mathematical constant pi (π).
// console.log(Math.PI); // Output: 3.141592653589793
// //  Math.LN2: The natural logarithm of 2.
// console.log(Math.LN2); // Output: 0.6931471805599453
// //  Math.LN10: The natural logarithm of 10.
// console.log(Math.LN10); // Output: 2.302585092994046
// //  Math.LOG2E: The base 2 logarithm of E.
// console.log(Math.LOG2E); // Output: 1.4426950408889634
// //  Math.LOG10E: The base 10 logarithm of E.
// console.log(Math.LOG10E); // Output: 0.4342944819032518
// //  Math.SQRT2: The square root of 2.
// console.log(Math.SQRT2); // Output: 1.4142135623730951
// //  Math.SQRT1_2: The square root of 1/2.
// //console.log(Math.SQRT1_2); // Output: 0.7071067811865476
// console.log(Math.sqrt(9)); // Output: 0.7071067811865476

// // built-in Math object (Methods)
// console.log("METHODS")

// // Math.round(x):
// // Returns the value of a number rounded to the nearest integer.
// console.log("Math.round");
// console.log(Math.round(3.14));
// console.log(Math.round(3.49));
// console.log(Math.round(3.5));
// console.log(Math.round(3.94));

// // Math.floor(x):
// // Returns the largest integer less than or equal to a given number
// // rounds down
// console.log("Math.floor");
// console.log(Math.floor(3.14));
// console.log(Math.floor(3.49));
// console.log(Math.floor(3.5));
// console.log(Math.floor(3.94));
// console.log(Math.floor(3.99));

// // Math.ceil(x):
// // Returns the smallest integer greater than or equal to a given number.
// // rounds up
// console.log("Math.ceil");
// console.log(Math.ceil(3.0000001));
// console.log(Math.ceil(3.14));
// console.log(Math.ceil(3.49));
// console.log(Math.ceil(3.5));
// console.log(Math.ceil(3.94));
// console.log(Math.ceil(3.01)); 
// console.log(Math.ceil(3.91)); 

// Math.abs(x):
// Returns the absolute value of a number.
// Removes the negative sign (Returns only positive numbers)
// console.log("Math.abs");
// console.log(Math.abs(-5)); 
// console.log(Math.abs(5)); 
// console.log(Math.abs(5.33)); 
// console.log(Math.abs(-5.33)); 

// // Math.sqrt(x):
// // Returns the square root of a number.
// console.log("Math.sqrt");
// console.log(Math.sqrt(9)); 

// // Math.pow(x, y):
// // Returns the result of raising x to the power of y.
// console.log("Math.pow");
// console.log(Math.pow(2, 3)); 


// Math.random():
// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log("Math.random");
//console.log(Math.random());  

// Generating random number for OTP
// const min = 1000;
// const max = 9999;
const min = 1;
const max = 10;
// const min = 10000000;
// const max = 99999999;
const randomInteger0 = Math.random() * (max - min ) 

console.log(randomInteger0);

// const randomInteger = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomInteger);

// // randomGen = 5419424 +
// // min = 10000000
// // 5419424 + 10000000 = 15419424

// // Math.min(x), Math.max(x):
// // functions are used to find the minimum and maximum values among a set of numbers, respectively.
// // •	Math.min(): This function returns the smallest of zero or more numbers.
// // let minResult = Math.min(5, 3, 9, 1, 7);
// // console.log(minResult); // Output: 1
// // // •  Math.max(): This function returns the largest of zero or more numbers.
// // let maxResult = Math.max(5, 3, 9, 1, 7);
// // console.log(maxResult); // Output: 9


// // Math.sin(x), Math.cos(x), Math.tan(x):
// // console.log("Math.sin");
// // console.log(Math.sin(Math.PI / 2)); 
// // console.log(Math.sin(20)); 

// // Math.asin(x), Math.acos(x), and Math.atan(x)
// // console.log("Math.asin");
// // let a = 0.5;
// // let arcsineResult = Math.asin(a);
// // console.log(arcsineResult); // Output: 0.5235987755982989

// // Math.atan2(x) or Math.atan2(y, x) :
// /*
// returns the arctangent of the quotient of its arguments y and x. This 
// function is particularly useful when you want to find the angle (in 
// radians) between the positive x-axis and a point (x, y) in a Cartesian 
// coordinate system
// */

// let x = 3;
// let y = 4;

// let angle = Math.atan2(y, x);

// console.log(angle); // Output: 0.93 radians (approximately), which is approximately 53.13 degrees

// // Math.log(x):
// // the Math.log() function is used to calculate the natural logarithm (base e) of a number. 
// // let num = 10;
// // let naturalLog = Math.log(num);

// // console.log(naturalLog); // Output: 2.302585092994046


// // let num1 = 5;
// // let naturalLog1 = Math.log(num1);

// // console.log(naturalLog1); // Output: 1.6094379124341003