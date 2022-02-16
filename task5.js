class Device {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.state = false;
    }
    getName() {
        console.log(this.name);
    }
}
class HomeDevice extends Device {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
    getPower() {
        console.log(this.power);
    }
    onDevice() {
        this.state = true;
        console.log(`Прибор ${this.name} включен: ${this.state}`)
    }
    offDevice() {
        this.state = false;
        console.log(`Прибор ${this.name} выключен: ${this.state}`)
    }
}

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