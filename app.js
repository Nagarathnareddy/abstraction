var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("<<<<<<<<<<<<<<<<----Abstract is animal-------------->>>>>>>>>>>>>>>");
var Animal = /** @class */ (function () {
    function Animal() {
        this.Playing = function () {
            console.log("Animal playing in the ground");
        };
    }
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Lion breathes 42 to 76 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Lion eats only meat ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Lion sleeps 16-20 hrs each day");
        };
        return _this;
    }
    return Lion;
}(Animal));
var animal1 = new Lion();
animal1.nameOfTheAnimal = "Lion";
animal1.noOfEyes = 2;
animal1.noOfLegs = 4;
animal1.noOfTails = 1;
animal1.noofHearts = 1;
animal1.breathing();
animal1.eatingBehaviour();
animal1.sleepingBehaviour();
animal1.Playing();
console.log("------------------>>>>>>>>>>>>>>>");
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Tiger breathes 56 to 97 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Tiger eats pigs,cows,goats.  ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Tiger sleeps 18-20 hrs each day");
        };
        return _this;
    }
    return Tiger;
}(Animal));
var animal2 = new Tiger();
animal2.nameOfTheAnimal = "Tiger";
animal2.noOfEyes = 2;
animal2.noOfLegs = 4;
animal2.noOfTails = 1;
animal2.noofHearts = 1;
animal2.breathing();
animal2.eatingBehaviour();
animal2.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");
var Cheetah = /** @class */ (function (_super) {
    __extends(Cheetah, _super);
    function Cheetah() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Cheetah breathes 120 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Cheetah eats fresh meat ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Cheetah sleeps 12hrs each day");
        };
        return _this;
    }
    return Cheetah;
}(Animal));
var animal3 = new Cheetah();
animal3.nameOfTheAnimal = "Cheetah";
animal3.noOfEyes = 2;
animal3.noOfLegs = 4;
animal3.noOfTails = 1;
animal3.noofHearts = 1;
animal3.breathing();
animal3.eatingBehaviour();
animal3.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Elephant breathes 30 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Elephant eats variety of plants  ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Elephant sleeps 2-4 hrs each day");
        };
        return _this;
    }
    return Elephant;
}(Animal));
var animal4 = new Elephant();
animal4.nameOfTheAnimal = "Elephant";
animal4.noOfEyes = 2;
animal4.noOfLegs = 4;
animal4.noOfTails = 1;
animal4.noofHearts = 1;
animal4.breathing();
animal4.eatingBehaviour();
animal4.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");
var Zebra = /** @class */ (function (_super) {
    __extends(Zebra, _super);
    function Zebra() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Zebra breathes 120 to 180 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Zebra eats grass,leaves ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Zebra sleeps 7hrs each day");
        };
        return _this;
    }
    return Zebra;
}(Animal));
var animal5 = new Zebra();
animal5.nameOfTheAnimal = "Zebra";
animal5.noOfEyes = 2;
animal5.noOfLegs = 4;
animal5.noOfTails = 1;
animal5.noofHearts = 1;
animal5.breathing();
animal5.eatingBehaviour();
animal5.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");
var Crocodile = /** @class */ (function (_super) {
    __extends(Crocodile, _super);
    function Crocodile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breathing = function () {
            console.log("Crocodile breathes 2 to 3 times per minute");
        };
        _this.eatingBehaviour = function () {
            console.log("Crocodile eats insects,fishes,small frogs,lizards  ");
        };
        _this.sleepingBehaviour = function () {
            console.log("Crocodile sleeps 17 hrs each day");
        };
        return _this;
    }
    return Crocodile;
}(Animal));
var animal6 = new Crocodile();
animal6.nameOfTheAnimal = "Crocodile";
animal6.noOfEyes = 2;
animal6.noOfLegs = 4;
animal6.noOfTails = 1;
animal6.noofHearts = 1;
animal6.breathing();
animal6.eatingBehaviour();
animal6.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");
console.log("<<<<<<<<<<<<<<<<----vehicle is animal-------------->>>>>>>>>>>>>>>");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.noOfWheels = 2;
        this.noOfMirrors = 2;
        this.noOfBrakes = 2;
    }
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = function () {
            console.log("Bike has " + vehicle1.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("Bike has " + vehicle1.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("Bike has " + vehicle1.noOfBrakes + " brakes");
        };
        return _this;
    }
    return Bike;
}(Vehicle));
var vehicle1 = new Bike;
vehicle1.nameOfTheVehicle = "Bike";
vehicle1.wheels();
vehicle1.mirrors();
vehicle1.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOfWheels = 4;
        _this.noOfMirrors = 2;
        _this.noOfBrakes = 1;
        _this.wheels = function () {
            console.log("car has " + vehicle2.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("car has " + vehicle2.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("Bicarke has " + vehicle2.noOfBrakes + " brakes");
        };
        return _this;
    }
    return car;
}(Vehicle));
var vehicle2 = new car;
vehicle2.nameOfTheVehicle = "car";
vehicle2.wheels();
vehicle2.mirrors();
vehicle2.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
var jeep = /** @class */ (function (_super) {
    __extends(jeep, _super);
    function jeep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOfWheels = 4;
        _this.noOfMirrors = 2;
        _this.noOfBrakes = 1;
        _this.wheels = function () {
            console.log("jeep has " + vehicle3.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("jeep has " + vehicle3.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("jeep has " + vehicle3.noOfBrakes + " brakes");
        };
        return _this;
    }
    return jeep;
}(Vehicle));
var vehicle3 = new jeep;
vehicle3.nameOfTheVehicle = "jeep";
vehicle3.wheels();
vehicle3.mirrors();
vehicle3.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
var lorry = /** @class */ (function (_super) {
    __extends(lorry, _super);
    function lorry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOfWheels = 6;
        _this.noOfMirrors = 2;
        _this.noOfBrakes = 3;
        _this.wheels = function () {
            console.log("lorry has " + vehicle4.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("lorry has " + vehicle4.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("lorry has " + vehicle4.noOfBrakes + " brakes");
        };
        return _this;
    }
    return lorry;
}(Vehicle));
var vehicle4 = new lorry;
vehicle4.nameOfTheVehicle = "lorry";
vehicle4.wheels();
vehicle4.mirrors();
vehicle4.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
var bus = /** @class */ (function (_super) {
    __extends(bus, _super);
    function bus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOfWheels = 8;
        _this.noOfMirrors = 2;
        _this.noOfBrakes = 3;
        _this.wheels = function () {
            console.log("bus has " + vehicle5.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("bus has " + vehicle5.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("bus has " + vehicle5.noOfBrakes + " brakes");
        };
        return _this;
    }
    return bus;
}(Vehicle));
var vehicle5 = new bus;
vehicle5.nameOfTheVehicle = "bus";
vehicle5.wheels();
vehicle5.mirrors();
vehicle5.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
var tracter = /** @class */ (function (_super) {
    __extends(tracter, _super);
    function tracter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOfWheels = 8;
        _this.noOfMirrors = 2;
        _this.noOfBrakes = 2;
        _this.wheels = function () {
            console.log("tracter has " + vehicle6.noOfWheels + " wheels");
        };
        _this.mirrors = function () {
            console.log("tracter has " + vehicle6.noOfMirrors + " mirrors");
        };
        _this.brakes = function () {
            console.log("tracter has " + vehicle6.noOfBrakes + " brakes");
        };
        return _this;
    }
    return tracter;
}(Vehicle));
var vehicle6 = new tracter;
vehicle6.nameOfTheVehicle = "tracter";
vehicle6.wheels();
vehicle6.mirrors();
vehicle6.brakes();
console.log("------------------>>>>>>>>>>>>>>>");
