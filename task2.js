/* Написать функцию, которая принимает в качестве аргументов строку и 
объект, а затем проверяет есть ли у переданного объекта свойство с данным 
именем. Функция должна возвращать true или false. */

function foo(str, obj) {
    if (obj.hasOwnProperty(str)) {
        return true
    } else {
        return false
    }
}

const obj = {
    a: 1000,
    b: 1500,
    c: 2000,
    d: 2500,
  };
const str = 'c';

console.log(foo(str, obj));