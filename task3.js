// Написать функцию, которая создает пустой объект, но без прототипа.

function createObj() {
    obj = Object.create(null);
    return obj
}