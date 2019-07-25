// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%
class person {
    constructor(firstName,lastName,age,registered,itemCost) {
        this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.registered = registered;
            this.itemCost = itemCost;
    }
    checkingDiscount() {
        if (this.registered === true) {
            this.itemCost = this.itemCost - this.itemCost * 5 / 100;
            return `${this.firstName} ${this.lastName} whose age is ${this.age} is eligible for a discount of 5% so the payable price will be ${this.itemCost}`;
        }
        else{
            this.itemCost = this.itemCost - this.itemCost * 4 / 100;
            return `${this.firstName} ${this.lastName} whose age is ${this.age} is eligible for a discount of 4% so the payable price will be ${this.itemCost}`;
        }
    }
    
}
console.log(new person("Dhruv","Bhatnagar",21,false,1000).checkingDiscount());

console.log(new person("Nike","Mike",21,true,2000).checkingDiscount());
