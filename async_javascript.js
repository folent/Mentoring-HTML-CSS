class MyPromise {
    constructor(callback) {
        callback(resolved => resolved);
    }

    synchThen(callback) {
        return new Promise(resolve => {
            resolve();
            callback()
        })
    }
}

class ReversePromise {
    constructor(callback) {
        callback(resolved => resolved);
        this.stack = [];
    }

    then(callback) {
        this.stack.unshift(callback);
        return this;
    }

    reverse() {
        return this.stack
            .reduce((prev, current) => prev.then(current), new Promise(resolve => resolve()));
    }
}

// let	promise	= new MyPromise((resolve) => {
//     console.log(1);
//     resolve();
// }).synchThen(()	=>	{
//     console.log(2);
// }).then(()	=>	{
//     console.log(3);
// })
// console.log(4);
// //1, 2,	4,	3


let reversePromise = new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))
    .reverse()
//1, 4,	3,	2
