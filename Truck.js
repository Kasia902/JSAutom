let  Vehicle = require("./Vehicle.js");

class Truck extends Vehicle
{
    constructor(carModel, carYear, maxSpeed)
    {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer()
    {
        console.log(`I'm starting transporting heavy container`);
    }
}

module.exports = Truck;