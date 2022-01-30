function myNew(constructor, ...args) {
    const obj = {};
    obj.__proto__ = constructor.prototype;
    obj.name = args[0];
    obj.age = args[1];
    return obj;
}

function Person	(name, age)	{
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return	'My	name is	' + this.name +	' and I am ' + this.age;
};
const john1	= new Person('John',	30);
const jack	= new Person('Jack',	40);
console.log(john1.introduce());	//	My name is	John and	I am 30
console.log(jack.introduce());	//	My name is	Jack and	I am 40

const john = myNew(Person,'Sasha', 99);
console.log(john)
console.log(john.introduce())
const j = new Person('John',	30);
console.log(j)