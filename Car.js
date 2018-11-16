let  Vehicle = require("./Vehicle.js");

class Car extends Vehicle
{
    constructor(carModel, carYear, maxSpeed)
    {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

   transportPeople()
    {
        console.log(`I'm starting transporting passengers`);
    }
}

module.exports = Car;