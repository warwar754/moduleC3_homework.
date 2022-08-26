class PC_devices {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.condition = false;
    }

    included() {
        console.log(this.name + ` included!`);
        this.condition = true;
    }

    turned_off() {
        console.log(this.name + ` turned off!!`);
        this.condition = false;
    }

}

class Laptop extends PC_devices {
    constructor(type, size, brand, name, purpose, ) {
        super(type, name);
        this.size = size;
        this.brand = brand;
        this.purpose = purpose;
        this.condition = false;
    }

}

class Computer extends PC_devices {
    constructor(type, size, brand, name, purpose,) {
        super(type, name);
        this.size = size;
        this.brand = brand;
        this.purpose = purpose;
        this.condition = false;
    }
        
}


const ultrabook = new Laptop(`portable`, `mini`, `Asus`, `VivoBook`, `worker`);
const home_PC = new Computer(`stationary`, `big`, `HP`, `HP home PC`, `rest`);

ultrabook.included();
home_PC.included();

console.log(ultrabook);
console.log(home_PC);