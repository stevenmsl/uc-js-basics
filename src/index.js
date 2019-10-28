import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

//Declarative Iteration with Array.reduce

//Declarative Iteration with Array.filter
const drinks = [
    { id: 1, name: 'Pepsi'},
    { id: 2, name: 'Lemonade'},
    { id: 3, name: 'Cola'}
];

const drink = [];
for (let i = 0; i < drinks.length; i++) { //using ‘let’ as i mutates (i++)
    if(drinks[i].id === 2 || drinks[i].id === 3) {
        drink.push(drinks[i]);
    }   
}
console.log(drink);

const theId = 3;
const selectedDrink = drinks.filter(value => value.id === theId);
console.log(selectedDrink);

/*
//Declarative Iteration with Array.map 
const drinks = ['Pepsi', 'Lemonade', 'Cola'];
const drinkLengths = [];
for (let i = 0; i < drinks.length; i++) { //using ‘let’ as i mutates (i++)
    drinkLengths.push(drinks[i].length);   
}
console.log(drinkLengths);

const mappedDrink = drinks.map(value => value.length);
console.log(mappedDrink);
*/

/*
//Declarative Iteration with Array.forEach
const drinks = ['Pepsi', 'Lemonade', 'Cola'];

for (let i = 0; i < drinks.length; i++) { //using ‘let’ as i mutates (i++)
    console.log(drinks[i]);   
}

drinks.forEach((value, index, array) => {
    if (value === 'Cola') {
        console.log(value, index);
    }
    console.log(array[index]);
});
*/

/*
//Iteration with for...of
const drinks = ['Pepsi', 'Lemonade', 'Cola'];

for (let i = 0; i < drinks.length; i++) { //using ‘let’ as i mutates (i++)
    const drink = drinks[i];
    console.log(drink);   
}

for (const drink of drinks) {
    console.log(drink);
}

console.log([1, 2, 3]); //iterable
*/

/*
//Iteration with Break and Continue
const drinks = ['Pepsi', 'Lemonade', 'Cola'];
let count = 0;
for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if (drink === 'Lemonade') {
        console.log('Pour me a class!');
        continue; 
        //break;
    } 
    count++;   
}
console.log(count); //continue: 2, break: 1
*/

/*
//Imperative Array Iteration
const drinks = ['Pepsi', 'Lemonade', 'Cola'];

for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if (drink === 'Lemonade') {
        console.log('Pour me a class!');
    }    
}
*/
/*
//Correctly Type-Checking Arrays
console.log(typeof []) //object, so this can’t be used to type-checking arrays 
console.log([] instanceof Array); //true
console.log(new Array() instanceof Array); //true
console.log(Array.isArray([1, 2, 3, 4])); //true
console.log(Object.prototype.toString.call([])); //[object Array]
*/

/*
//Reversing and Sorting Arrays
const drinks1 = [
    { name: 'Lemonade', price: 79},
    { name: 'Peach', price: 99},
    { name: 'Lime', price: 89}
];
console.log(drinks1.reverse()); //mutable
console.log(drinks1);

const drinks2 = [
    { name: 'Lemonade', price: 79},
    { name: 'Peach', price: 99},
    { name: 'Lime', price: 89}
];
console.log(drinks2.sort((a,b) => b.price - a.price)); //mutable
console.log(drinks2);
*/

/*
//Merging Arrays
const drinks1 =[['Lemonade', 99], ['Lime', 99]]; //2-D
const newDrinks1 = [['Peach', 89]]; //2-D
const merged1 = drinks1.concat(newDrinks1); 
merged1[0][1] = 1000; //by reference
merged1[2][1] = 1000; //by reference
console.log(drinks1, newDrinks1, merged1);

const drinks2 =[['Lemonade', 99], ['Lime', 99]]; //2-D
const newDrinks2 = ['Peach', 89]; //1-D
const merged2 = [newDrinks2, ...drinks2];
merged2[0][1] = 1000; //by reference
merged2[2][1] = 1000; //by reference
console.log(drinks2, newDrinks2, merged2);
*/

/*
//Shallow and Deep Array Cloning 

//shallow
const drinks1 =[['Lemonade', 99], ['Lime', 99], ['Peach', 89]];
const drinksClone1 = [...drinks1];
drinksClone1[0][1] = 1000;
console.log(drinks1, drinksClone1); //by reference, so both drinks1[0][1] and drinksClone1[0][1] are 1000 now
const drinksClone2 = drinks1.slice();
drinksClone2[1][1] = 1000;
console.log(drinks1, drinksClone1, drinksClone2);
const drinksClone3 = Array.from(drinks1);
drinksClone3[2][1] = 1000;
console.log(drinks1, drinksClone1, drinksClone2, drinksClone3);
//deep
const drinks2 =[['Lemonade', 99], ['Lime', 99], ['Peach', 89]];
const drinksClone5 = JSON.parse(JSON.stringify(drinks2));
drinksClone5[0][1] = 1000;
console.log(drinks2, drinksClone5);
*/

/*
//Finding Array Elements
const drinks = ['Lemonade', 'Lime', 'Peach'];
const index = drinks.indexOf('Lime');//case sensitive 
console.log(index);
if (index !== -1) {
    console.log(drinks[index]);
}

const included = drinks.includes('Peach');
console.log(included);

const drinksWithId = [
    { id: 1, name: 'Lemonade'},
    { id: 2, name: 'Lime'},
    { id: 3, name: 'Peach'},
];

//deal with more complex structure 
const idIndex = drinksWithId.findIndex(
    value => value.name === 'Peach');
console.log(drinksWithId[idIndex]);

const foundItem = drinksWithId.find(
    value => value.name === 'Peach');
console.log(foundItem);
*/

/*
//Removing Array Elements
const drinks = ['Lemonade', 'Lime', 'Peach'];
console.log(drinks);

//Immutable
const index = drinks.length - 1;
const newDrinks = [...drinks.slice(0, index), ...drinks.slice(index + 1)];
console.log(newDrinks);
console.log(drinks);

//mutable 
//end
const removed = drinks.pop();
console.log(removed);
//beginning
const removed2 = drinks.shift();
console.log(removed2);
console.log(drinks);
*/
/*
//Adding Array Elements
const drinks1 = ['Lemonade', 'Lime', 'Peach'];
console.log(drinks1); //This is super weird as the length is 2 not 3; 
                      //if you copy the code to somewhere else the length is 3.
//immutable 
console.log(['Water', ...drinks1]); //Add an element to the beginning. Drinks array remains unchanged.
console.log([...drinks1, 'Beer']); //end

//middle - should be immutable

console.log(drinks1);

const index = 1;
console.log([
    //return the deleted element ‘Lemonade’.
    
    ...drinks1.splice(0, index), 
    'Mojito',
    //return the deleted elements 'Lime' and 'Peach'
   ...drinks1.splice(index - 1),
]);

console.log(drinks1);

//mutable
const drinks2 = ['Lemonade', 'Lime', 'Peach'];
//middle 
drinks2.splice(index, 0, 'Mojito'); 
console.log(drinks2);
//begin
drinks2.unshift('Water');
console.log(drinks2);
//end
drinks2.push('Cola');
console.log(drinks2);
*/


/*
//Destructuring Arrays
const drinks =[['Lemonade', 99], ['Lime', 99], ['Peach', 89]];
//[,b] -Ignores the first element ‘Lime’; just pick up the second element 99
const [one, [,b], ...rest] = drinks; 
console.log(one, b, rest);
*/
/*
//Multi-dimensional Arrays
const drinks =[['Lemonade', 99], ['Lime', 99], ['Peach', 89]];
console.log(`Drink: ${drinks[0][0]}, Price ${drinks[0][1]}`);
*/

/*
//Properties, Indexes and Elements
const drinks = ['Lemonade', 'Lime', 'Peach'];
drinks[0] = 'Diet Lemonade'; //by reference
drinks['favourite'] = 'Cola'; //This has no difference with adding a new property to an object. 
                              //The array length remains at 3 however.

console.log(drinks);
console.log(drinks[0]); //First element; 0-based
console.log(drinks[drinks.length-1]); //the very last element 

drinks.length = 0; //Wipe out an array
//same thing
//drinks.splice(0, drinks.length);

console.log(drinks); //Length is now 0. However, ‘favourite’ property is still there.
*/

/*
//Array Literal, Function and Constructor Syntax
const drinks = ['Lemonade', 'Lime', 'Peach'];
const drinksReference = drinks;

console.log(drinks);
console.log(drinksReference === drinks); //true, by reference

console.log(new Array('Lemonade', 'Lime', 'Peach'));
console.log(Array('Lemonade', 'Lime', 'Peach')); //This internally will call new Array().
*/


/*
//Declarative Object Iteration
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};
//doesn’t not iterate over inherited properties 
Object.keys(drink).forEach(function (prop) {
    console.log(drink[prop], prop);
});
//Object.entries() returns an array whose elements are arrays corresponding 
//to the enumerable string-keyed property [key, value] pairs found directly upon object. 
console.log(Object.entries(drink));
*/

/*
//Imperative Object Iteration
const drink = {
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

const drinkWithId = Object.create(drink); //inherit from drink
drinkWithId.id = 'xhs8Pla';
console.log(drinkWithId); //check __proto__ and you will find name and price properties 

for (const prop in drinkWithId) {
    if(drinkWithId.hasOwnProperty(prop)) {
        console.log(prop, drinkWithId[prop]);
    }
}

console.log('-----')

//for..in
//sale, full
for(const prop in drink) {
    const value = drink[prop];
    if( Object.prototype.toString.call(value) === '[object Object]' ) {
        for (const key in value) {
            console.log(key);
        }
    }
}

*/

/*
//Correctly Type-Checking Objects
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

function getType(obj) {
    return Object.prototype.toString
        .call(obj).slice(8, -1).toLowerCase();
}

//not very useful in distinguish object from array and null in type-checking.
console.log(typeof drink); //object
console.log(typeof []); //object
console.log(typeof null); //object

console.log({} instanceof Object); //true
console.log([] instanceof Object); //true

console.log(getType(drink)); //object 
console.log(getType(null)); //null
console.log(getType([])); //array
*/

/*
//Merging Objects
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
};
const price = {
    sale: 99,
    full: 129,
}

const mergedDrink1 = Object.assign({}, drink, price);
//the strucutre is not quite exactly what we expected 
//as the ‘full’ and ‘sale’ properties are not scoped to the price property
console.log(mergedDrink1);

const mergedDrink2 = Object.assign({}, drink, { price });
console.log(mergedDrink2); 

const mergedDrink3 = { ...drink, ...{ price } };
console.log(mergedDrink3);
*/

/*
//Shallow and Deep Object Cloning
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};
//deep copy. completely detached from the original object
const drinkStringified = JSON.stringify(drink);
const drinkDeepClone = JSON.parse(drinkStringified);
drinkDeepClone.id = 'abcd';
drinkDeepClone.price.sale = 79;
console.log(drink, drinkDeepClone); //drink remains intact

//shallow copies, only the top level properties are copied

const drinkClone1 = Object.assign({}, drink);
const drinkClone2 = {...drink};

drinkClone1.id = 'abcd';
drinkClone2.id = 'efgh';
drinkClone1.price.sale = 50;
drinkClone2.price.full = 120;
//All three are going to have the same sale price and full price 
//as their price property is pointing to the same object (by reference).
console.log(drink, drinkClone1, drinkClone2); 
*/

/*
//Removing Object Properties
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};
//does not mutate the original object
const { price, ...rest } = drink;
console.log(price, rest, drink); //drink still has the price property as it has not been mutated.

//quicker way to ‘delete’ a property
drink.id = undefined;

if (drink.id) { // value existence Checking
    console.log('has ID...'); //this won’t be printed 
}
console.log(drink.hasOwnProperty('id')); //true

//Physically delete the property, slow
delete drink.id;
console.log(drink.hasOwnProperty('id')); //false

*/


/*
//Adding and Updating Object Properties
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
}

function propUpdate(prop, value) {
    drink[prop] = value; //property will be added if it has not existed yet    
}

propUpdate('brand', 'My Drinks Co.');
propUpdate('name', 'Lime');

console.log(drink);
*/


/*
//Property and Value Existence Checking
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
    //Very unlikely you would do this (override the hasOwnProperty method), 
    //but this is just to show that calling hasOwnProperty on an object is not 
    //the safest way to determine if an object has a certain property
    hasOwnProperty() {
        return false;
    }
};

//value exists

if(drink.id) {
    console.log(drink.id);
}

for (const prop in drink) {
    if(drink[prop] === 'Lemonade') {
        console.log(drink[prop]);
    }
}

console.log(Object.values(drink));
const hasLemonade = Object.values(drink).includes('Lemonade'); 
console.log(hasLemonade); //true

//Property exists
console.log(drink.hasOwnProperty('name')); //Return false as the hasOwnProperty has been mistakenly overrode
console.log(Object.prototype.hasOwnProperty.call(drink,'name')); //return true as expected 
console.log(Object.keys(drink).includes('name')); //true
*/

/*
//Destructuring Object Properties
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129,
    },
};

//old way of destructuring
const myDrinkId = drink.id;
const myDrinkName = drink.name;
const myDrinkSalePrice = drink.price.sale;
console.log(myDrinkId, myDrinkName, myDrinkSalePrice);

//new way of destructuring
const {
    id: myId, //rename id to myId
    price: { full },
    ...rest //remaining properties
} = drink;

const { sale, full: fullPrice } = drink.price;
console.log(sale, fullPrice);
console.log(myId, full, rest);
console.log(rest.name);
*/

/*
//Shorthand Properties and Methods
const id = 'xhs8Pla'; //use variable as the property name
const name = 'Lemonade';
const price = 99;
const someKey = 'name'; //use value as the property name
const drink = {
    id, // id: "xhs8Pla"
    [someKey]: name, //name: "Lemonade"
    price,
    getDrinkDetails() {
        return `Drink ${this.name} (${this.price})`;
    }
};

console.log(drink);
*/

/*
//Properties, Methods, and Values
const drink = {
    id: 'xhs8Pla',
    name: 'Lemondae',
    price: 99,
    getDrinkDetails() {
        return `Drink ${this.name} (${this.price})`;
    },
    'abc 123': 'I am the value',
    100: 'I am a number'
};

const myId = 'id';

console.log(drink[myId]);
console.log(drink.name);
console.log(drink.price);
console.log(drink['abc 123']);
console.log(drink[100]); //same as drink['100']
*/

/*
//Object Literal, Function and Constructor Syntax
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129    
    },
};

const drinkReference = drink;
drinkReference.name = 'Peach'; //by reference

console.log(drink === drinkReference); //true, pointing to the same object

console.log({} instanceof Object); //true
console.log(new Object() instanceof Object); //true
console.log(Object() instanceof Object); //true, internally it will call new Object() 
*/

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