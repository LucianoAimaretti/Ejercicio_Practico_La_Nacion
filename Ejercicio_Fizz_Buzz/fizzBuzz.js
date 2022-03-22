function includeNumber(number, compareNumber) {
    let str = number.toString();
    return str.includes(compareNumber);
}

function isDivisible(list) {
    let stringList = [];
    for (let i = 0; i < list.length; i++) {
        list[i] % 3 == 0 && list[i] % 5 == 0
            ? stringList.push("FizzBuzz")
            : list[i] % 3 == 0 || includeNumber(list[i], 3)
            ? stringList.push("Fizz")
            : list[i] % 5 == 0 || includeNumber(list[i], 5)
            ? stringList.push("Buzz")
            : stringList.push("");
    }
    return stringList;
}

module.exports = {
    isDivisible,
};
