/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding -  for objects, uses the this keyword to bind onjects and methods.

* 2. Explicit Binding - more control, used for functions, tells us where we want to go

* 3. New Binding - use with constructor functions, method has this keyword set for value when called.

* 4. Window Binding - when the keyword this is referencing to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet(par) {
  return `Greetings from ${this.par}`;
}
console.log(greet('Earth!!'));

// Principle 2

// code example for Implicit Binding
const transformers = {
  name: 'Optimus',
  built: 1500,
  weapon: 'Fire Axe',
  defense: function() {
    return `${this.name} uses a ${this.weapon}`;
  },
};

console.log(transformers.defense());

// Principle 3

// code example for New Binding

function gijoes(soldier) {
  this.greeting = 'Hello ';
  this.soldier = soldier;
  this.talk = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const flynt = new gijoes('Duke');
const shipwreck = new gijoes('Snake Eyes');

flynt.talk();
shipwreck.talk();

// Principle 4

// code example for Explicit Binding

const player = {
  name: 'Newbie1',
};

function gamer(cod, pacman, eve) {
  return `Hello, my name is 
  ${this.name} and my favorite video games are: ${cod}, ${pacman}, ${eve}`;
}

console.log(gamer.call(player, 'COD', 'PACMAN', 'EVE'));
