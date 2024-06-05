// {
// const person = {
//     name: "john",
//     name2:"paul",
//     age: "70",
//     country: "Meru",
//     school: {
//         name: "st Peters",
//         location:"Central",
//         level: "National"
//     },
//     salary:"100,000"
// }
// const {name,name2,age,country,fullame=`${name} ${name2}`,school:{location}} = person
// let salary= age> 40 ? 200000 : 100000

// console.log(fullame,age,country,location);
// console.log(salary);

// }
// {
//     const car= [
//         {name:"Audi", color:"Black", cc:"1800"},
//         {name:"Benz", color:"White", cc:"1600"},
//         {name:"Dodge", color:"Blue",cc:"2000"}
//     ]
//     car.forEach(({name,color,cc})=>{
//         console.log(`This is a ${color} ${name} with ${cc}cc`);
//     });
// }


{
    
function studentAverage(students) {
    students.forEach(({ name, age, scores }) => {
        const { math, eng, kisw, comp } = scores
        let averageMarks = ((math + eng + kisw + comp) / 4)

        console.log(`Name:${name}, Age:${age},Average marks:${averageMarks}`);

    });
}
studentAverage([{ name: "Paul", age: "15", scores: { math: 80, eng: 75, kisw: 85, comp: 75 } },
{ name: "Mercy", age: "17", scores: { math: 60, eng: 80, kisw: 75, comp: 85 } },
{ name: "Hosewell", age: "18", scores: { math: 80, eng: 70, kisw: 90, comp: 75 } },
{ name: "Hellen", age: "16", scores: { math: 85, eng: 80, kisw: 65, comp: 70 } },
{ name: "James", age: "17", scores: { math: 70, eng: 70, kisw: 80, comp: 65 } }
])


}