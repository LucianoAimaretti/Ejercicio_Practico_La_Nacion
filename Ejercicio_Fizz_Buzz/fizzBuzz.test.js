const fizzBuzz = require("./fizzBuzz");

test("6 es divisible por 3, devuelve ['Fizz']", () => {
    const result = fizzBuzz.isDivisible([6]);
    expect(result).toStrictEqual(["Fizz"]);
});

test("2131 contiene el numero 3, devuelve ['Fizz']", () => {
    const result = fizzBuzz.isDivisible([2131]);
    expect(result).toStrictEqual(["Fizz"]);
});

test("10 es divisible por 5, devuelve ['Buzz']", () => {
    const result = fizzBuzz.isDivisible([10]);
    expect(result).toStrictEqual(["Buzz"]);
});

test("151 contiene el numero 5, devuelve ['Buzz']", () => {
    const result = fizzBuzz.isDivisible([151]);
    expect(result).toStrictEqual(["Buzz"]);
});

test("45 divisible por 3 y por 5, devuelve ['FizzBuzz']", () => {
    const result = fizzBuzz.isDivisible([45]);
    expect(result).toStrictEqual(["FizzBuzz"]);
});

test("Lista [6, 2131, 10, 151, 45] , devuelve ['Fizz', 'Buzz', 'Fizz', 'Buzz', 'FizzBuzz']", () => {
    const result = fizzBuzz.isDivisible([6, 10, 2131, 151, 45]);
    expect(result).toStrictEqual(["Fizz", "Buzz", "Fizz", "Buzz", "FizzBuzz"]);
});
