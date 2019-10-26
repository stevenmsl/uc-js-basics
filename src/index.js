import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

/*
//Functions and "this"
const firstCar = { id: 'x8KszK0'};
const secondCar = { id: 'bc90slqa'};
const thirdCar = { id: 'h9sNsa'};

function carPartId(name, quantity) {
    console.log(`${this.id}_${name}_${quantity}`);
}

const boundThirdCar = carPartId.bind(thirdCar); //Context is now thirdCar
boundThirdCar('Windscreen', 99);
boundThirdCar('Exhaust', 9);

//call = c = commas
carPartId.call(firstCar, 'Left Door', 12); //Passing parameters individually
//apply = a = array
carPartId.apply(secondCar, ['Right Door', 21]);

*/


/*
//Functions and Callbacks
function carPartId(name, fn) {
    const theId = `CAR_PART_x8z0sl`;
    return fn(`${theId}_${name}`); //call the callback and return its return value 
}

const carPart = carPartId('Left Door', 
    function(id){
        console.log(`Car Part ID: ${id}`);    
    });
console.log(carPart); //Callback is executed, but it doesn’t return any value. So carPart is undefined.

const anotherCarPart = carPartId('Left Door', 
    function(id){
        return(`Car Part ID: ${id}`);    
    });
console.log(anotherCarPart); //log out the return value from the callback
*/
/*
//Immediately-Invoked Function Expressions (IIFE)

const carPartId = (function(id){
    const theId = `CAR_PRT_${id}`;
    return function(name) {
        return `${theId}_${name}`;
    };
})('x7H8sFf');

console.log(carPartId); //The definition you see in the console is already converted by Babel. 
                        //Use source map (click on index.js:xx) to find the source code.
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));
*/


/*
//Function Closures and Scope
function makeCarPartId(id) {
    const theId = `CAR_PART_${id}`; 
    return function(name) {
        return `${theId}_${name.toUpperCase()}`;
    }    
}

const carPartId = makeCarPartId('x8YdsZ12');
//the following parts should all have the same ID
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));

const anotherCarPartId = makeCarPartId('7hs9zSaq0');
console.log(anotherCarPartId('Left Door'));
console.log(anotherCarPartId('Right Door'));
console.log(anotherCarPartId('Windscreen'));

*/

/*
//Function Return Values
function makeCarPrice(...params) {
    const total = params.reduce((prev, next) => prev + next);
    return total;
}

const makeCarPriceArrow = (...params) => params.reduce((prev, next) => prev + next); //Implicit return 

console.log(`Total: ${makeCarPrice(11, 22, 33, 44, 55, 66)}`);
console.log(`Total: ${makeCarPriceArrow(99, 77, 44)}`);
*/

/*
//Rest Parameters and Arguments
function makeCarPrice() { //old way
    console.log(arguments, Array.isArray(arguments)); //false, arguments is not an array
    const total = Array.from(arguments)
        .reduce((prev, next) => {
            return prev + next;
        }); 
    console.log(`Total: ${total}USD`);
}
makeCarPrice(11, 44, 55, 99, 66);

function makeCarPriceRest(...params) {
    console.log(Array.isArray(params));
    const total = params.reduce((prev, next) => prev + next);
    console.log(`Total: ${total}USD`);
}
makeCarPriceRest(99, 88, 77, 11, 44);
*/

/*
//Function Parameters and Defaults
function makeCar(name = 'Porsche') { // default value: ECMA2015
    //name = name || 'Porsche';
    //if (!name) {
    //    name = 'Porsche'
    //}
    console.log(`Making car: 
    ${name.toUpperCase()}`);
}

makeCar('Porsche');
makeCar('Ferrari');
makeCar();
*/

/*
//Function Declarations and Expressions

//hoisting
console.log(makeCar); //hoisted - function declaration
console.log(makeCarExpression); //undefined - not hoisted
console.log(makeCarArrow); //undefined - not hoisted
console.log(makeCarArrowShorthand); //undefined - not hoisted 


// 1: Function Declaration
function makeCar() {
    console.log('Making car...');
}
makeCar();
//2: Function Expression (anonymous or named)
const makeCarExpression = function myFunction() {};
console.log(makeCarExpression.name); //myFunction (named)
const anotherMakeCarExpression = function () {};
console.log(anotherMakeCarExpression.name); //anotherMakeCarExpression (anonymous)

//3: Arrow Function
const makeCarArrow = () => {
    console.log('Making car inside Arrow...');
};

makeCarArrow();

const makeCarArrowShorthand = () => console.log('Short');
makeCarArrowShorthand();

*/

/*
//Correctly Type-Checking Booleans
console.log(typeof false); //boolean
console.log(true instanceof Boolean); //false
console.log(new Boolean('X') instanceof Boolean);
console.log(Object.prototype.toString.call(true));//[object Boolean]
*/

/*
//Boolean Literal, Function and Constructor Syntax
console.log(true, false);
const arg = 'X';
console.log(Boolean(arg)); //true
console.log(!!arg); //true using double bang
console.log(Boolean([])); //true - empty array
console.log(Boolean({})); //true - empty object
console.log(new Boolean(arg)); //wrapper 
*/
/*
//Exploring String Methods
console.log(String.prototype);
console.log('Pepperoni'.indexOf('P')); //0, case sensitive
console.log('Pepperoni'.includes('P')); //true
console.log('Pepperoni'.replace('oni', 'fire')); //Pepperfire
console.log('Pepperoni'.replace(/oni$/,'fire')); //Pepperfire using regular esxpression 
console.log('Pepperoni'.slice(2, -3)); //pper

console.log('Pepperoni~Plain'.split('~')[1]); //Plain
console.log('Pepperoni~Plain'.split(/~/)[1]); //Plain
console.log('   4444 5555 6666 7777   '.trim()); //4444 5555 6666 7777
*/

/*
//Correctly Type-Checking Strings
console.log(typeof 'Pepperoni'); //string
console.log('Pepperoni' instanceof String); //false
console.log(new String('Pepperoni') instanceof String); //true
console.log(Object.prototype.toString.call('Pepperoni')); //[object String]
*/
/*
//Strings and Immutability 
const immutableString = 'I shall not change!';

//Would simply make a copy of the string and then modify it. The original string remain intact
const uppercaseString = immutableString.toUpperCase();
console.log(immutableString, uppercaseString);
*/
/*
//String Properties and Indexes 
console.log(new String(5599));
console.log('Pepperoni'.length); //9

const pizza = 'P e p p e r o n i';
console.log(pizza[0], pizza[pizza.length - 1], pizza.length); //P i 17
*/

/*
//String Literal, Function, and Constructor Syntax
console.log('Pizza "Hello!"');
const pizza = 'Pepperoni';
console.log('Pizza is: ' + pizza + '!');
console.log(`
Pizza is:
${pizza}!
`);

console.log(String(55 + 11), 55 + '11'); //66, 5511 (55 will be converted to string first and then concatenate with 11)
console.log(String({name: 'Pepperoni'}), {name: 'Pepperoni'}.toString()); //[object Object] [object Object]
console.log(String([1, 2, 3, 4]), [1, 2, 3, 4].toString()); //1,2,3,4 1,2,3,4
console.log(new String(55)); // {"55"}, constructor syntax, creates a wrapper object 
*/

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
