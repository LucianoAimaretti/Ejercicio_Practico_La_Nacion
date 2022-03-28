const fizzBuzz = require("./fizzBuzz");

test("6 es divisible por 3, devuelve ['Fizz']", () => {
    expect(fizzBuzz([6])).toStrictEqual(["Fizz"]);
});

test("2131 contiene el numero 3, devuelve ['Fizz']", () => {
    expect(fizzBuzz([2131])).toStrictEqual(["Fizz"]);
});

test("10 es divisible por 5, devuelve ['Buzz']", () => {
    expect(fizzBuzz([10])).toStrictEqual(["Buzz"]);
});

test("151 contiene el numero 5, devuelve ['Buzz']", () => {
    expect(fizzBuzz([151])).toStrictEqual(["Buzz"]);
});

test("45 divisible por 3 y por 5, devuelve ['FizzBuzz']", () => {
    expect(fizzBuzz([45])).toStrictEqual(["FizzBuzz"]);
});

test("Lista [6, 2131, 10, 151, 45] , devuelve ['Fizz', 'Buzz', 'Fizz', 'Buzz', 'FizzBuzz']", () => {
    expect(fizzBuzz([6, 10, 2131, 151, 45])).toStrictEqual(["Fizz", "Buzz", "Fizz", "Buzz", "FizzBuzz"]);
});

test("Lista [6,  1] , devuelve ['Fizz',]", () => {
    expect(fizzBuzz([6, 1])).toStrictEqual(["Fizz"]);
});
