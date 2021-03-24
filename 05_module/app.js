// console.log('app.js');
// exports.name = 1
//  可以写在判断里面  es6 module 不可以只能在顶部
if (true) {
  const { name,changeName } = require('./name.js')
  console.log(name); // name
  changeName()
  console.log(name) //name
}


// this 指向当前模块
console.log(this);

