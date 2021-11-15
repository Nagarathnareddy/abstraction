console.log("<<<<<<<<<<<<<<<<----Abstract is animal-------------->>>>>>>>>>>>>>>")
 abstract class Animal
{
    nameOfTheAnimal:string;
    noOfEyes:number;
    noOfLegs:number;
    noOfTails:number;
    noofHearts:number;
    Playing = function()
    {
        console.log("Animal playing in the ground");
    }

    abstract breathing();
    abstract eatingBehaviour();
    abstract sleepingBehaviour();
}
class Lion extends Animal
{
   

   breathing = function()
   {
       console.log("Lion breathes 42 to 76 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Lion eats only meat ")
   }
   sleepingBehaviour= function()
   {
       console.log("Lion sleeps 16-20 hrs each day")
   }


}
let animal1 = new Lion();
animal1.nameOfTheAnimal = "Lion";
animal1.noOfEyes =2;
animal1.noOfLegs=4;
animal1.noOfTails=1;
animal1.noofHearts=1;
animal1.breathing();
animal1.eatingBehaviour();
animal1.sleepingBehaviour();
animal1.Playing();
console.log("------------------>>>>>>>>>>>>>>>")




class Tiger extends Animal
{
   breathing = function()
   {
       console.log("Tiger breathes 56 to 97 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Tiger eats pigs,cows,goats.  ")
   }
   sleepingBehaviour= function()
   {
       console.log("Tiger sleeps 18-20 hrs each day")
   }

}
let animal2 = new Tiger();
animal2.nameOfTheAnimal = "Tiger";
animal2.noOfEyes =2;
animal2.noOfLegs=4;
animal2.noOfTails=1;
animal2.noofHearts=1;
animal2.breathing();
animal2.eatingBehaviour();
animal2.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>")




class Cheetah extends Animal
{
   breathing = function()
   {
       console.log("Cheetah breathes 120 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Cheetah eats fresh meat ")
   }
   sleepingBehaviour= function()
   {
       console.log("Cheetah sleeps 12hrs each day")
   }
}


   let animal3 = new Cheetah ();
   animal3.nameOfTheAnimal = "Cheetah";
   animal3.noOfEyes =2;
   animal3.noOfLegs=4;
   animal3.noOfTails=1;
   animal3.noofHearts=1;
   animal3.breathing();
   animal3.eatingBehaviour();
   animal3.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>")



class Elephant extends Animal
{
   breathing = function()
   {
       console.log("Elephant breathes 30 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Elephant eats variety of plants  ")
   }
   sleepingBehaviour= function()
   {
       console.log("Elephant sleeps 2-4 hrs each day")
   }

}
let animal4 = new Elephant ();
animal4.nameOfTheAnimal = "Elephant";
animal4.noOfEyes =2;
animal4.noOfLegs=4;
animal4.noOfTails=1;
animal4.noofHearts=1;
animal4.breathing();
animal4.eatingBehaviour();
animal4.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>")

class Zebra extends Animal
{
   breathing = function()
   {
       console.log("Zebra breathes 120 to 180 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Zebra eats grass,leaves ")
   }
   sleepingBehaviour= function()
   {
       console.log("Zebra sleeps 7hrs each day")
   }

}
let animal5 = new Zebra ();
animal5.nameOfTheAnimal = "Zebra";
animal5.noOfEyes =2;
animal5.noOfLegs=4;
animal5.noOfTails=1;
animal5.noofHearts=1;
animal5.breathing();
animal5.eatingBehaviour();
animal5.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>")

class Crocodile extends Animal
{
   breathing = function()
   {
       console.log("Crocodile breathes 2 to 3 times per minute")
   }
   eatingBehaviour = function()
   {
       console.log("Crocodile eats insects,fishes,small frogs,lizards  ")
   }
   sleepingBehaviour= function()
   {
       console.log("Crocodile sleeps 17 hrs each day")
   }

}
let animal6 = new Crocodile ();
animal6.nameOfTheAnimal = "Crocodile";
animal6.noOfEyes =2;
animal6.noOfLegs=4;
animal6.noOfTails=1;
animal6.noofHearts=1;
animal6.breathing();
animal6.eatingBehaviour();
animal6.sleepingBehaviour();
console.log("------------------>>>>>>>>>>>>>>>");


console.log("<<<<<<<<<<<<<<<<----vehicle is animal-------------->>>>>>>>>>>>>>>");
abstract class Vehicle
{
    noOfWheels:number=2;
    noOfMirrors:number=2;
    noOfBrakes:number=2;
    nameOfTheVehicle:string;
    
    abstract wheels();
    abstract mirrors();
    abstract brakes();
   
}
class Bike extends Vehicle
{
   
    wheels = function()
    {
        console.log(`Bike has ${vehicle1.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`Bike has ${vehicle1.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`Bike has ${vehicle1.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle1 = new Bike
vehicle1.nameOfTheVehicle = "Bike";
vehicle1.wheels();
vehicle1.mirrors();
vehicle1.brakes();
console.log("------------------>>>>>>>>>>>>>>>");

class car extends Vehicle
{
    noOfWheels:number=4;
    noOfMirrors:number=2;
    noOfBrakes:number=1;
    nameOfTheVehicle:string;
    
    wheels = function()
    {
        console.log(`car has ${vehicle2.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`car has ${vehicle2.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`Bicarke has ${vehicle2.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle2 = new car
vehicle2.nameOfTheVehicle = "car";
vehicle2.wheels();
vehicle2.mirrors();
vehicle2.brakes();
console.log("------------------>>>>>>>>>>>>>>>");


class jeep extends Vehicle
{
    noOfWheels:number=4;
    noOfMirrors:number=2;
    noOfBrakes:number=1;
    nameOfTheVehicle:string;
    
    wheels = function()
    {
        console.log(`jeep has ${vehicle3.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`jeep has ${vehicle3.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`jeep has ${vehicle3.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle3 = new jeep
vehicle3.nameOfTheVehicle = "jeep";
vehicle3.wheels();
vehicle3.mirrors();
vehicle3.brakes();
console.log("------------------>>>>>>>>>>>>>>>");



class lorry extends Vehicle
{
    noOfWheels:number=6;
    noOfMirrors:number=2;
    noOfBrakes:number=3;
    nameOfTheVehicle:string;
    
    wheels = function()
    {
        console.log(`lorry has ${vehicle4.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`lorry has ${vehicle4.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`lorry has ${vehicle4.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle4 = new lorry
vehicle4.nameOfTheVehicle = "lorry";
vehicle4.wheels();
vehicle4.mirrors();
vehicle4.brakes();
console.log("------------------>>>>>>>>>>>>>>>");

class bus extends Vehicle
{
    noOfWheels:number=8;
    noOfMirrors:number=2;
    noOfBrakes:number=3;
    nameOfTheVehicle:string;
    
    wheels = function()
    {
        console.log(`bus has ${vehicle5.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`bus has ${vehicle5.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`bus has ${vehicle5.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle5 = new bus
vehicle5.nameOfTheVehicle = "bus";
vehicle5.wheels();
vehicle5.mirrors();
vehicle5.brakes();
console.log("------------------>>>>>>>>>>>>>>>");

class tracter extends Vehicle
{
    noOfWheels:number=8;
    noOfMirrors:number=2;
    noOfBrakes:number=2;
    nameOfTheVehicle:string;
    
    wheels = function()
    {
        console.log(`tracter has ${vehicle6.noOfWheels} wheels`)
    }
    mirrors = function()
    {
        console.log(`tracter has ${vehicle6.noOfMirrors} mirrors`)
    }
    brakes= function()
    {
        console.log(`tracter has ${vehicle6.noOfBrakes} brakes`)
    } 
   
   
}
let vehicle6 = new tracter
vehicle6.nameOfTheVehicle = "tracter";
vehicle6.wheels();
vehicle6.mirrors();
vehicle6.brakes();
console.log("------------------>>>>>>>>>>>>>>>");


