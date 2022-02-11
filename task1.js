/* Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

const obj = {a: 1000};
const objProto = Object.create(obj);
objProto.b = 2000;
objProto.c = 2500;


function foo(obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

foo(objProto);