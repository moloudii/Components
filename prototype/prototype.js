let text = "salal";
function testFunc() {
  alert(1);
}
let obj1 = {};

// console.dir(text.__proto__);
// console.dir(testFunc);
// console.dir(obj1.__proto__);
let animal = {
  eats: true,
  walk() {
    console.log("walking");
  },
};
let rabbit = {
  jump: true,
  __proto__: animal,
  walk() {
    console.log("rabbit walking ...");
  },
};

console.log(rabbit);

console.log(rabbit.eats);
rabbit.walk();

function Cat() {
  //   public
  this.eats = false;
  //   private
  let status = true;
  this.printStatus = () => {
    console.log("Your status is: " + status);
  };
}
Cat.prototype = animal;
Cat.prototype.testFunc = testFunc;
let cat1 = new Cat();
console.log(cat1);
cat1.printStatus();
