import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

/*
//Exploring Number Methods
console.log(Number.prototype);
console.log(99..toFixed(4)); //returns a string of value 99.0000  Note: 99.toFixed(4) won't work 
console.log((99).toFixed(4)); //returns a string of value 99.0000
console.log(parseFloat(99.12345678.toFixed(4))); //99.1235
console.log(99.12345678.toPrecision(5)); //99.123
console.log((99.12345678).toPrecision(5)); //99.123 Add parentheses, (99.12345678), to avoid confusion.
console.log(new Number(99).valueOf()); //99
*/

/*
//Correctly Type-Checking Number
console.log(typeof 99.66); //number
console.log(99 instanceof Number); //false - literal is not an instance of Number 
console.log(Number('99') instanceof Number); //false - Number('99') gives you a literal 99
//constructor syntax, creates a wrapper object - avoid using it
console.log(new Number('99') instanceof Number); //true   
//odd way to accurately determine the type
console.log(Object.prototype.toString.call(99)); // [object Number]
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number');
*/

/*
//Numbers and Immutability
//const just means immutableNumber can not be re-assigned any more. 
//Has nothing to do with immutability 
const immutableNumber = 99;
let referencedNumber = immutableNumber;
referencedNumber = 55;
console.log(immutableNumber);
console.log(referencedNumber);
*/

/*
//understanding Not-a-Number
const result = Number('55px');
console.log(isNaN(result)); //true
//true as well. Reasoning - a string is not a number. 
//But its value is not actually NaN. 
//Avoid using this method. 
console.log(isNaN('I am a string!'));
//use Number.IsNaN() instead
console.log(Number.NaN);
console.log(Number.isNaN(result)); //true
// a string is not of value NaN 
console.log(Number.isNaN('I am another String!')); //false
console.log(Number.isInteger(66)); //true
*/


/*
// parsing strings to numbers
console.log(parseInt('55px', 10)); // 55 (base 10)
console.log(parseFloat('55.9999px') * 10); //559.999
console.log(Number('55e10')); 
console.log(Number('55.9999'));
console.log(+'99.5555'); //convert a string to a number
console.log(9 + +'99.5555'); //108.5555 
*/


/*
console.log(0.1 + 0.2); //won't be just 0.3 - has way more decimal places than just one  

const price = 9.33;
const quality = 3;
console.log(price * quality); //won't be just 27.99

//trick to get just 27.99
const anotherPrice = 9.33 * 100;
const anotherQuality = 3;
console.log((anotherPrice * anotherQuality) / 100);
*/


/*
//literal
const literalNumber = '99';
console.log(literalNumber);

//function syntax
//peform a type-conversion in a non-constructor context
console.log(Number); //Number is a function 
console.log(Number(55));
console.log(Number('33')); //type-conversion
console.log(Number('44px')); //Nan
//constructor syntax, creates a wrapper object
//avoid using it
console.log(new Number(66));

*/

/*
console.log(navigator.userAgent.match(/MSIE 8.0/));
console.log(!navigator.userAgent.match(/MSIE 8.0/));

console.log(Boolean(true));
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!'');
*/
