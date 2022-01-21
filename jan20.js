
"use strict" ; // This will ensure that a variable is dec

class Circle {
    static shape = "Circle";
    radius  ;

    constructor(radius){
        this.radius = radius ;
    }

    static circumference(radius){
        return 2*3.14*radius;
    }

    area(){
        return 3.14*this.radius*this.radius ;
    }

}




function Person(){
    this.name = "Vishwa";
    this.age = 19 ;
}




const person1 = new Person();
const person2 = new Person();

console.log(person1);
console.log(person2);


/**
 * Create objects from the class
 */

const obj  = new Circle(7);

console.log(Circle.shape);



class Student {
    
    // make fields private
    #name ;
    #marks ;

    constructor(name, marks){
        this.#name = name ;
        this.#marks = marks ;
    }

    //setters and getter
    getName(){
        return this.#name;
    }

    getMarks(){
        return this.#marks;
    }

    setName(name){
        this.#name = name ;
    }

    setMarks(marks){
        this.#marks = marks ;
    }
}


const stdObject = new Student("Vishwa", 99);

console.log(stdObject.getName());

stdObject.setName("Vishwa Mohan Singh"); //change the value
console.log(stdObject.getName());




class Person1 {

    /**
     * No one can either change or use it
     */
    #land ;
    #car ;

    /**
     * I want some people like my relative to use it or change it if needed
     */

    getLand(){
        return this.#land;
    }


    setLand(land){
        this.#land = land ;
    }
}



function Login (userName, passWord) {
    this.userName = userName;
    this.passWord = passWord ;
}  

//Hiding the loginLogic
Login.prototype.loginLogic = function(){
    console.log("Logic to  login the user");
}

const loginObect = new Login("vimohan", "Welcome1");

console.log(loginObect);


class Animal {
    static xyz ="123";
    eat(){
       console.log ("Animal is eating");
    }
}

/**
 * extend keyword is used to express the parent child relationship
 */
class Dog extends Animal {

}

const dog = new Dog();
dog.eat();
console.log(Dog.xyz);


/**
 * Polymorphism
 */

class Parent {
    eat(){
        console.log("Parent is eating");
    }
    
}

class Child1 extends Parent{
    
    eat(){
        console.log("Child1 is eating");
    }

    eat(rice, dal){
        console.log("Eating "+ rice +" "+ dal);
    }
    
}
const childObject  = new Child1();
childObject.eat(); // Eating undefined undefined





class Child2 extends Parent{
    eat(){
        console.log("Child2 is eating");
    }
}

const p1 = new Parent();
const p2 = new Child1();
const p3 = new Child2();

p1.eat();
p2.eat();
p3.eat();