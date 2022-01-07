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
        this.stack.push(callback);
        return this;
    }

    myReverse() {
        while (this.stack.length) {
            new Promise((resolve) => {
                resolve();
            }).then(this.stack.pop())
        }
        return this;
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
    .myReverse()
//1, 4,	3,	2
