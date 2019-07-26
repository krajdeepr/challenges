
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this._strength += 5;
    }
    get name() {
        console.log("get name");
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}
const city = Symbol();
const state = Symbol();

class Human extends superhero {
    constructor(healthpoints,city,state, ...superherostuff) {
        super(...superherostuff);
        this[city] = city;
        this[state] = state;
        this._healthpoints = healthpoints;
    }
     set name(name) {
         this._name = name;
     }
     powerUp() {
         super.powerUp();
         this._strength += 2;
         console.log("The power is incremented by 2");
    }
    powerHalf(){
        this._strength= this._strength/2;
    }
    changeName(){
        this._name="Mr " +this._name;
    }
}
let details = [20,"Hyd","TS", "Bill", 10, 8]
let hero3 = new Human(...details);
hero3.powerUp();
hero3.changeName();
console.log(hero3);
console.log(hero3)
const hero4 = new superhero(20, "abc", 8);
console.log(hero4);
