let n = 4;
let innerLoop = 1;

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= innerLoop; j++) {

        row += "*";

    }

    innerLoop++;

    console.log(row);

}






// ------------------ for find the sum of odd number

// let number = 5;
// let sum = 0;

// for (let i = 0; i <= 5; i++) {

//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log(sum);

//------------------- for find that a number is prime or not
// let number = 18;
// let isPrime = true

// for(let i = 2; i < number; i++){

//     if(number % i == 0){
//        isPrime = false;
//         break;
//     }

// }

// if(isPrime == true){
//     console.log("it is a prime number");
// }else{
//     console.log("it is not a prime number");
// }

//---------------- to find factorial of a number
// let number = 4;
// let factorial = 1;

// for(let i = 1; i <= number; i++){
//     factorial *= i;
// }

// console.log("the factorial of " + number + " is " + factorial);


//-------- to print patterns 4 X 4 of same numbers
// let number = 4;

// for (let i = 1; i <= number; i++) {

//     let row = "";

//     for (let j = 1; j <= number; j++) {
//         row += j;
//     }

//     console.log(row);
// }

//-------- to print patterns 4 X 4 of ascending numbers by 1
// let number = 3;
// let n = 0;

// for (let i = 1; i <= number; i++) {

//     let row = "";

//     for (let j = 1; j <= number; j++) {
//         n++
//         row += n;
//     }

//     console.log(row);
// }

// // ---------print repeating alphabets
// let n = 4;

// for (let i = 1; i <= n; i++) {

//     let number = 65;
//     let row = "";

//     for (let j = 1; j <= n; j++) {

//         let letter = String.fromCharCode(number);
//         number++;
//         row += letter;

//     }

//     console.log(row);

// }

// --------------- for print differnt charcter in each row
// let n = 4;
// let number = 65;

// for (let i = 1; i <= n; i++) {

//     let row = "";

//     for (let j = 1; j <= n; j++) {

//         let letter = String.fromCharCode(number);
//         number++;
//         row += letter;

//     }

//     console.log(row);

// }

// ----------------- for right angle triangle loop pattern
