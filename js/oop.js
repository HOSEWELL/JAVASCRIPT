class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`My name is ${this.name} and am ${this.age} years old.
        and my salary is ${this.calculateSalary()}`);
    }
    calculateSalary(){
        if(this.age >= 40){
            return 40000
        }else{
            return 30000
        }
    }
}
let person1 = new Person("John",50);
let person2 = new Person("Alex",30)

// person1.introduce()
// person2.introduce()
console.log(person1.introduce());


// {
//     class Car{
//         constructor(color,model,mileage,weight,price){
//             this.color = color;
//             this.model = model;
//             this.mileage = mileage;
//             this.weight = weight;
//             this.price = price
//         }
//         //methods
//         introduce(){
//             console.log(`This is a ${this.color} car, it is a ${this.model} model. It has a mileage of ${this.mileage}  and it weighs  ${this.weight}.Its costs is ${this.price}`);
//         }
//         }
//     }
//     let car1= new Car("Black",2018,"2000km","1.5t","$2000")

//     car1.introduce()
// }