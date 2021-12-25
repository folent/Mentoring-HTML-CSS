function NamedOne (firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = `${this._firstName} ${this._lastName}`;
}

Object.defineProperty(NamedOne.prototype, 'firstName', {
    get: function() {
        return this._firstName;
    },
    set: function(value) {
        this._firstName = value;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }
});

Object.defineProperty(NamedOne.prototype, 'lastName', {
    get: function() {
        return this._lastName;
    },
    set: function(value) {
        this._lastName = value;
        this._fullName = `${this.firstName} ${this.lastName}`;
    }
});

Object.defineProperty(NamedOne.prototype, 'fullName', {
    get: function() {
        return this._fullName;
    },
    set: function(value) {
        const [firstName, lastName] = value.split(' ');
        if(!firstName || !lastName) return;

        if(firstName !== this.firstName) {
            this.firstName = firstName;
        }

        if(lastName !== this.lastName) {
            this.lastName = lastName;
        }

        this._fullName = `${this.firstName} ${this.lastName}`;
    }
});


let	namedOne = new NamedOne("Naomi","Wang");
console.log(namedOne.firstName);	//	->	"Naomi"
console.log(namedOne.lastName);		//	->	"Wang"
console.log(namedOne.fullName);		//	->	"Naomi	Wang

namedOne.firstName = "John";
console.log(namedOne.firstName);	//	->	"John"
namedOne.lastName =	"Doe";
console.log(namedOne.lastName);	//	->	"Doe"
console.log(namedOne.fullName)
//	-- But	:
namedOne.fullName =	"Tom";	//	->	no	:	lastName	missing
namedOne.fullName =	"TomDonnovan";
console.log(namedOne.fullName)