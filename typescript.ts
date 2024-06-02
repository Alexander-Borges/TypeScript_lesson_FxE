// any works as a 'catch-all' useful for when converting a non-TS database to TypeScript
// reverts to standard JS rules
let test: any = 123;
test = '456'
console.log(test);

// Variable test for number and a string use the union type
// Generally not recommended as TypeScript is designed to not use this to prevent bugs generally
let test2: number | string = 'Alex';
console.log(test2);

type State = 'off' | 'on';
let test3: State = 'off';
test3 = 'on';
console.log(test3);
console.log();

enum State2 {
    On = 'on',
    Off = 'off'
}

let testing: State2 = State2.Off;
testing = State2.On;
console.log(testing);
console.log();

//
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10,200));


interface Instructor {
    name: String;
    course: String;
    age?: number;
}

const Alexander: Instructor = {
    name: 'Alexander',
    course: 'FrontendExpert',
    age: 24
};

const Biscuit: Instructor = {
    name: 'Biscuit',
    course: 'AlgoExpert'
};

class AlgoExpertInstructor implements Instructor {
    name: String;
    course: String;

    constructor(name) {
        this.name = name;
        this.course = "BlockchainExpert";
    }
}

const triscuit = new AlgoExpertInstructor('Triscuit');
console.log(triscuit);