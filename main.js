function runningAverage() {
    let valuesArr = [];
    return function (value) {
        valuesArr.push(value);
        let average = valuesArr.reduce((prev, current) => {
            return prev + current;
        }) / valuesArr.length
        return average.toFixed(1);
    }
}

function sum() {
    const add = function (a, b) { return a + b; };

    let value = Array.prototype.reduce.call(arguments, add, 0);

    function f() {

        value = Array.prototype.reduce.call(arguments, add, value);

        return f;
    }

    f.toString = function () {
        return value;
    };
    return f;
}

let rAvg = runningAverage();

console.log(rAvg(10))
console.log(rAvg(11))
console.log(rAvg(12))

console.log(+sum(2, 3));
console.log(+sum(2)(3));
console.log(+sum(1)(2)(3)(4));