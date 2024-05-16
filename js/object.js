{const car1= {
    type:"Nissan",
    color:"Blue",
    model:"Y789"
}
const car2={
    type:"Honda",
    color:"white",
    model:"B3"
}
console.log(car1["color"])
}

{
    const person1={
        firstname: "hosewell",
        lastname: "karanja",
        age:"20"
    }
    
        const person2={
            firstname:"mark",
            lastname:"orengo",
            age:"43"
        }
        const person3={
            firstname:"Hellen",
            lastname:"muthoni",
            age:"15",
            fullname:function(){
                console.log(this.firstname+""+this.lastname)
            }
        }  
        person3.firstname;
        person3.fullname()
}

{
    const person={
        fname:"john",
        lname:"doe",
        yob:2001,
        fullname:function(){
            console.log(this.fname+""+this.lname)
        },
        age:function(currentyear){
        return currentyear - this.yob
        }
    }
    console.log(person.age(2024));
    person.fullname; 
    person.fullname()
}
