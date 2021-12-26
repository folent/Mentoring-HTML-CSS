class Vector {
    constructor(dots) {
        this.dots = dots;
    }

    add(vector) {
        let dots = [];
        if(this.dots.length !== vector.dots.length) {
            throw new Error('Different number of dots')
        }
        vector.dots.forEach((dot, i) => {
            dots.push(this.dots[i] + dot);
        })
        return new Vector(dots);
    }

    subtract(vector) {
        let dots = [];
        if(this.dots.length !== vector.dots.length) {
            throw new Error('Different number of dots')
        }
        vector.dots.forEach((dot, i) => {
            dots.push(this.dots[i] - dot);
        })
        return new Vector(dots);
    }

    dot(vector) {
        if(this.dots.length !== vector.dots.length) {
            throw new Error('Different number of dots')
        }
        let res = 0;
        vector.dots.forEach((dot, i) => {
            res += this.dots[i] * dot;
        })
        return res;
    }

    norm() {
        let res = 0;
        this.dots.forEach(dot => {
            res += dot ** 2;
        })
        return res;
    }

    toString() {
        return `(${this.dots})`;
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3,	4, 5]);
const c = new Vector([5, 6, 7, 8]);
console.log(a.add(b));	//	should return	a	new	Vector([4,	6,	8])
console.log(a.subtract(b));	//	should	return	a	new	Vector([-2,	-2,	-2])
console.log(a.dot(b)); //	should	return	1*3	+	2*4	+	3*5	=	26
console.log(a.norm()); //	should	return	sqrt(1^2	+	2^2	+	3^2)	=	sqrt(14)
console.log(a.toString() === '(1,2,3)'); // true
a.add(c);						//	throws	an	error