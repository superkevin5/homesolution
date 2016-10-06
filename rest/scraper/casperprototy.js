//var links = [];
//var util = require('util');
//var casper = require('casper').create({
//    verbose: false,
//    logLevel: "debug",
//    pageSettings: {
//        loadImages: false,
//// The WebPage instance used by Casper will
//        loadPlugins: false
//    }
//});
//
//////
////casper.start('https://www.google.com.au/#gfe_rd=cr');
//////
////casper.thenOpen('https://www.google.com.au');
//////
//////
//////casper.thenOpen('http://foo.bar/3');
////
////
//////casper.back();
////
////casper.run(function(){
////    console.log('ssss');
////    console.log(this.getCurrentUrl());
////});
//
//casper.start();
//casper.then(function() {
//// This step will be executed
//});
//casper.then(function() {
//    this.bypass(2);
//});
//casper.then(function() {
//// This test won't be executed
//});
//casper.then(function() {
//// Nor this one
//});
//casper.run();

//
//var Vehicle = (function(){
//    function Vehicle(year,make,model){
//        this.year = year;
//        this.make = make;
//        this.model = model;
//    }
//
//
//    Vehicle.prototype.getInfo = function(){
//        return this.make + this.model;
//    }
//    return Vehicle;
//})();
//
//
//var Car =(function(parent){
//
//    Car.prototype = new Vehicle();
//    Car.prototype.constructor = Car;
//
//    function Car(year, make, model) {
//        parent.call(this,year,make,model);
//        this.wheelQuantity = 4;
//    }
//    Car.prototype.getInfo = function() {
//        return 'Vehicle Type: Car' + parent.prototype.getInfo.call(this);
//    };
//    return Car;
//})(Vehicle);
//
//
//
//var Car1 = new Car(1989,2,3);
//console.log(Car1.getInfo());
//

//var Animal = (function(){
//    function Animal(name){
//
//        this.name = name;
//    }
//    Animal.prototype.say = function(){
//      console.log(this.name);
//    };
//    return Animal;
//})();
//
//
//var Dog = (function(parent){
//    Dog.prototype = new Animal();
//    Dog.prototype.constructor = Dog;
//
//    function Dog(name,age){
//        parent.call(this, name);
//        this.name = name;
//        this.age = age;
//    }
//
//    return Dog;
//})(Animal);
//
//var d = new Dog("a",1);
//console.log(d);
//d.say();


var Book = function(name){
    this.name = name;
};

var parent = new Book('ss');



var rbook = function(){
    Book.call(this,'123');
};

rbook.prototype = Book.prototype;

var c = new rbook();
console.log(c.name);