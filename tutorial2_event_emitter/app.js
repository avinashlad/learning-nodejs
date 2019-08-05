const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log("Event occurred!");
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 3, 5);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let avinash = new Person('Avinash');

let christina = new Person("Christina");
christina.on("name", () => {
  console.log("My name is " + christina._name);
});
avinash.on('name', () => {
    console.log('My name is ' + avinash._name);
});

avinash.emit('name');
christina.emit("name");