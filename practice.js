let sampleArray = [1,2,3,4,5,6];
let reducer = (a, b) => {
    return a * b;
}

console.log(sampleArray.reduce(reducer, 1));

class Traveler {
    constructor(name, age, location) {
        this.name = name,
        this.age = age,
        this.location = location
    }

    getDescription() {
        return `${this.name} is ${this.age} and is currently in ${this.location}`;
    }
}

let Greg = new Traveler('Greg', 28, 'Minnesota');

console.log(Greg.getDescription());

class NewTraveler extends Traveler {
    constructor(name, age, location, start) {
        super(name, age, location);
        this.start = start
    }

    getDescription() {
        return `${this.name} is ${this.age} and is currently in ${this.location}. They started travelling ${this.start}`;
    }
}

let Linda = new NewTraveler('Linda', 22, 'California', 'Two years ago');

console.log(Linda.getDescription());