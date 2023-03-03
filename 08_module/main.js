var Hello = require("./hello");
var data = require("./data.json");
var fn = require("./fn");

const hello = new Hello();
hello.setName("huangmi");
hello.sayHello(); //Hello huangmi

console.log(data); // { name: 'tom', age: 18, gender: 'man' }

fn.printName(); //jack
fn.printAge(); //18
console.log(fn.printPerson); //{ name: 'jack', age: 18 }
