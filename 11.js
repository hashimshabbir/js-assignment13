// 1 Write a js program to find cube of any number using function.
console.log('Exercise no 1');


function cube(a) {
  var cube = a * a * a;

  console.log(cube);

}

cube(9);

// 2 Write a js program to find diameter, circumference and area of circle using functions.

console.log('Exercise no 2');

function getdiameter(radius) {

  

    var diameter = radius * 2;
    var circumference = 2 * 3.14 * radius;
    var Area = 3.14 * radius ^ 2;

    console.log(`the diameter of circle is ${diameter} , circumference is ${circumference} & The Area of circle is ${Area}`);


}

getdiameter(3);




// 3. Write a js program to find maximum and minimum between two numbers using functions.
console.log('Exercise no 3');

function FindMaxMin(num1, num2){
  

  if (num1 > num2) {
    console.log(`the maxinmum number is ${num1} and minimum number is ${num2}`);
  } else if (num1 === num2) {

    console.log(` ${num2}  =  ${num1}`);
    
  }
  else{
    
    console.log(`the maxinmum number is ${num2} and minimum number is ${num1}`);
    
  }

}

FindMaxMin(2,4);


// 4. Write a js program to check whether a number is even or odd using functions.
console.log('Exercise no 4');

function EvenOdd(number){
  if (number % 2 == 0) {

    console.log(`${number} is Even number`)
    
  }
  else{
    console.log(`${number} is Odd number`)
  }
}

EvenOdd(9);
// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
console.log('Exercise no 5');


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}


function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  const numDigits = num.toString().length;
  while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, numDigits);
      temp = Math.floor(temp / 10);
  }
  return sum === num;
}


function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
          sum += i;
      }
  }
  return sum === num;
}


const number = 6;

console.log(`${number} is prime: ${isPrime(number)}`);
console.log(`${number} is an Armstrong number: ${isArmstrong(number)}`);
console.log(`${number} is a perfect number: ${isPerfect(number)}`);





// 6. Write a js program to find all prime numbers between given interval using functions.
console.log('Exercise no 6');

function findPrimes(start,end){
  for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
          console.log(i);
      }
  }
  return;
  }
  findPrimes(1,100);


// 7. Write a js program to print all strong numbers between given interval using functions.
console.log('Exercise no 7');

function findStrong(start,end){
  for (let i = start; i <= end; i++) {
      if (isArmstrong(i)) {
          console.log(i);
      }
  }
  return;
  }
  findStrong(1,100);


// 8. Write a js program to print all Armstrong numbers between given interval using functions.
console.log('Exercise no 8');

function findStrong(start,end){
  for (let i = start; i <= end; i++) {
      if (isArmstrong(i)) {
          console.log(i);
      }
  }
  return;
  }
  findStrong(1,100);

// 9. Write a js program to print all perfect numbers between given interval using functions.
console.log('Exercise no 9');

function pirntallPerfects(start, end){
  for (let i = start; i <= end; i++) {
      if (isPerfect(i)) {
          console.log(i);
      }
  }
  return;
  }
  pirntallPerfects(1,100);





// 10. Write a js program to find power of any number using function.
console.log('Exercise no 10');

function CheckPower(base, exponent=1){
 var power = base**exponent;
 console.log(`${base} to the power of ${exponent} is ${power}`);
  
  
}

CheckPower(3,9)
// 11. Write a js program to print all natural numbers between 1 to n using function.
console.log('Exercise no 11');

function printnaturalNumbers(n){
  for(i=1; i<=n; i++){

    console.log(i);
    

  }
}

printnaturalNumbers(69)
// 12. Write a js program to print all even or odd numbers in given range using function.
console.log('Exercise no 12');

function printEven (range){
  for(i=2; i<=range; i = i+2){
    console.log(i);
    
  }

}

printEven(369)
function printodd (Oddrange){
  for(i=1; i<=Oddrange; i = i+2){
    console.log(i);
    
  }

}

printodd(369)

// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
console.log('Exercise no 13');

function sumnaturalnumbers(n){
  var sum = 0;
  for(i = 1; i<=n ; i++){

    sum = sum + i;



  }
  console.log(sum);
  
}

sumnaturalnumbers(9);
// 14. Write a js program to find sum of all even or odd numbers in given range using function.
console.log('Exercise no 14');

function sumEven(Evenrage){

  var sum = 0;
  for(i = 2; i<=Evenrage; i= i+2){

    sum = sum + i;
  }

  console.log(sum);
  
  
}

sumEven(9)
function sumOdd(OddRange){

  var sum = 0;
  for(i = 1; i<=OddRange; i= i+2){

    sum = sum + i;
  }

  console.log(sum);
  
  
}

sumOdd(9)


// 15. Write a js program to find reverse of any number using function.
console.log('Exercise no 15');

function reverseNumber(number){
  var reverse = 0;
  while(number > 0){
    var remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  console.log(reverse);
  
}

reverseNumber(369)
// 16. Write a js program to check whether a number is palindrome or not using function.
console.log('Exercise no 16');


function isPalindrome(number) {
  let originalNumber = number; 
  let reversedNumber = 0;

  
  while (number > 0) {
      let digit = number % 10; 
      reversedNumber = reversedNumber * 10 + digit; 
      number = Math.floor(number / 10);
  }

 
  return originalNumber === reversedNumber;
}


 var checknumber = 369;
if (isPalindrome(checknumber)) {
  console.log(`${checknumber} is a palindrome.`);
} else {
  console.log(`${checknumber} is not a palindrome.`);
}









// 17. Write a js program to find sum of digits of a given number using function.
console.log('Exercise no 17');

function sumofdigits(digitNumber){
  var sum = 0 ;
  while(digitNumber > 0){
   sum += digitNumber % 10;
   digitNumber = Math.floor(digitNumber/10)
    
  }

  console.log(sum);
  
}

sumofdigits(369)
// 18. Write a js program to find factorial of any number using function.

console.log('Exercise no 18');

function factorial(number){
  var factorial = 1;
  for(i = 1; i<=number; i++){
    factorial = factorial * i;
    
  }
  console.log(factorial);
  
}

factorial(5);
// 19. Write a js program to generate nth Fibonacci term using function.

console.log('Exercise no 19');

function fibonacci(n) {
  if (n <= 0) {
    return "Please enter positive intiger";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let fib = 1;

  for (let i = 3; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return fib;
}


let n = 10; 
console.log(`The ${n}th Fibonacci term is: ${fibonacci(n)}`);



// 20. Write a js program to find GCD (HCF) of two numbers using function.

console.log('Exercise no 20');

function gcd(a, b) {
  
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}


let num1 = 56;  
let num2 = 98;  
console.log(`The GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);



// 21. Write a js program to find LCM of two numbers using function.

console.log('Exercise no 21');

function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}


function lcm(a, b) {
  if (a === 0 || b === 0) {
      return 0;
  }
  return Math.abs(a * b) / gcd(a, b);
}


let number1 = 15;
let number2 = 20;
let result = lcm(num1, num2);

console.log(`The LCM of ${num1} and ${num2} is ${result}`);



// 22. Write a js program to display all array elements using function.

console.log('Exercise no 22');
// Function to display all elements of an array
function displayArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
  }
}

// Example usage
let array = [1, 2, 3, 4, 5];
displayArrayElements(array);



// 23. Write a js program to find sum of elements of array using function.

console.log('Exercise no 23');

function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}



let arraysum = [1, 2, 3, 4, 5];
let sum = sumOfArrayElements(arraysum);
console.log(`The sum of the elements of the array is: ${sum}`);
// 24. Write a js program to find maximum and minimum elements in array using function.

console.log('Exercise no 24');

function findMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

let arraymaxmin = [1, 2, 3, 4, 5];

let [max, min] = findMaxAndMin(maxmin);

console.log(`The maximum element of the array is: ${max}`);

console.log(`The minimum element of the array is: ${min}`);
