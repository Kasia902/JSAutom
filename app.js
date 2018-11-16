let  Vehicle = require("./Vehicle.js");
let Truck = require("./Truck.js");
let Car = require("./Car.js");
let Message = require("./Message.js");

Message.showMessage();

let WV = new Truck ("TT100", 2000, 150);
WV.transportContainer();

let Toyota = new Car ("ZX20", 2017, 250);
Toyota.transportPeople();

let Subaru = new Vehicle ("VB21", 1971, 100);
Subaru.displayInfo();