module.exports = function () {
  var name;
  this.setName = function (thyName) {
    name = thyName;
  };
  this.sayHello = function () {
    console.log("Hello " + name);
  };
};
// 同
// function Hello() {
//   var name;
//   this.setName = function (thyName) {
//     name = thyName;
//   };
//   this.sayHello = function () {
//     console.log("Hello " + name);
//   };
// }
// module.exports = Hello;
