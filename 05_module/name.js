let name = 'name'
// console.log('name.js');
if(true){
  exports.name = name;
  exports.changeName = function () {
    name = "name1";
    console.log('function内部的name',name);
  };
}


console.log('name.js中的name变量',name);

