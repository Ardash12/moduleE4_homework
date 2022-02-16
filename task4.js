function Device(name) {
    this.name = name
    this.voltage = 220
    this.state = false
    this.getName = function (name) {
        console.log(this.name)
    }
}
function HomeDevice(name, power) {
    this.name = name
    this.power = power
    this.getPower = function (name) {
        console.log(this.power)
    }
}
HomeDevice.prototype = new Device()

// Выносим методы класса Device за пределы объекта
// Метод включения в розетку
Device.prototype.onDevice = function() {
    this.state = true
}
// Метод выключения из розетки
Device.prototype.offDevice = function() {
    this.state = false
}
// Подсчет мощности включенных в розетку приборов
calculatePower = function(...args) {
    let powerIncludedDevices = 0;
    for (let key in args) {
        if (args[key].state === true) {
            powerIncludedDevices += args[key].power
        }
    }
    console.log(powerIncludedDevices)
    return powerIncludedDevices
}

HomeDevice.prototype = new Device()

let tv = new HomeDevice('tv',550);
let refrigerator = new Device('refrigerator');
let iron = new HomeDevice('iron', 1500);

tv.onDevice()
iron.onDevice()

// console.log(refrigerator.state);
// console.log(tv.state);

// tv.offDevice()

// console.log(refrigerator.state);
// console.log(tv);

calculatePower(tv, iron)
tv.getName()   // показать название
tv.getPower()   // показать мощность