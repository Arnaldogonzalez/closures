// Closures, Scope, and Execution Context

Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
// var function1 = createFunction();
// // now we'll call the function we just created
// function1(); //should console.log('hello');

function createFunction() {
  function function1() {
    console.log("hello");
  }
  return function1;
}

// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called, it should print out the input that was used when the function was created.
// var printSample = createFunctionPrinter('sample');
// var printHello = createFunctionPrinter('hello')
// // now we'll call the functions we just created
// printSample(); //should console.log('sample');
// printHello(); //should console.log('hello');

function createFunctionPrinter(str) {
  function result() {
    console.log(str);
  }
  return result;
}

Challenge 3
/* function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
} */

// var willCounter = outer();
// var jasCounter = outer();
//
// Paste the code above into your IDE. Examine the code for the outer function.
// Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing.

function outer() {
  var counter = 0;

  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}
var willCounter = outer();
counter 1
var jasCounter = outer();
counter 2

Challenge 4
// Now we are going to create a function addByX that returns a function that will add an input by x.
// var addByTwo = addByX(2);
// addByTwo(1); //should return 3
// addByTwo(2); //should return 4
// addByTwo(3); //should return 5
//
// var addByThree = addByX(3);
// addByThree(1); //should return 4
// addByThree(2); //should return 5
//
// var addByFour = addByX(4);
// addByFour(4); //should return 8
// addByFour(10); //should return 14

function addByX(num) {

  function add(yas) {
    return yas + num;
  }
  return add;
}

Extension: Challenge 5
Write a
function once that accepts a callback as input and returns a
function.When the returned
function is called the first time,
it should call the callback and
return that output.If it is called any additional times,
  instead of calling the callback again it will simply
return the output value from the first time it was called.

function oneFunction(func) {
  var result;
  return function() {
    if (func) {
      result = func.apply(null, arguments);
      func = null;
    }
    return result;
  };
}

Extension: Challenge 6
Write a
function after that takes the number of times the callback needs to be called before being
executed as the first parameter and the callback as the second parameter.

function after(num, func) {
  var counter = 1;

  function incrementCounter() {
    if (counter == num) {
      func.apply(null, arguments)
    }
    counter++;
  }
  return incrementCounter;
}
var call = after(5, function() {
  console.log("win");
});

call();


Extension: Challenge 7
// Write a function delay that accepts a callback
// as the first parameter and the wait in milliseconds
// before allowing the callback to be invoked as the second parameter.
//  Any additional arguments after wait are provided to func when it is invoked.
//  HINT: research setTimeout();


function delay(func, num) {
  //var args = Array.prototype.slice.call(arguments,2)
  return setTimeout(func, num, arguments);
}
delay(function() {
  console.log("win");
}, 1000);
