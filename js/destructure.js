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


// {

// function studentAverage(students) {
//     students.forEach(({ name, age, scores }) => {
//         const { math, eng, kisw, comp } = scores
//         let averageMarks = ((math + eng + kisw + comp) / 4)

//         console.log(`Name:${name}, Age:${age},Average marks:${averageMarks}`);

//     });
// }
// studentAverage([{ name: "Paul", age: "15", scores: { math: 80, eng: 75, kisw: 85, comp: 75 } },
// { name: "Mercy", age: "17", scores: { math: 60, eng: 80, kisw: 75, comp: 85 } },
// { name: "Hosewell", age: "18", scores: { math: 80, eng: 70, kisw: 90, comp: 75 } },
// { name: "Hellen", age: "16", scores: { math: 85, eng: 80, kisw: 65, comp: 70 } },
// { name: "James", age: "17", scores: { math: 70, eng: 70, kisw: 80, comp: 65 } }
// ])


// }

// {
//     const person = {
//         name:"John",
//         school: "Mangu",
//         numberStudents: 2000,
//         county: "Kiambu",
//         level: "National",
//         score: {
//             math: 50,
//             eng: 60,
//             kisw: 70
//         }
//     }


//     let {name,school,county, level, score: { math, eng, kisw } } = person;
//     console.log(`My Name is ${name}, I went to ${school} highschool which is located at ${county} county which was a ${level} school. My score in maths was ${math} and my english score was ${eng} and my score in kiswahili was ${kisw}`);
// }

// {
//      const country = [{
//         name:"kenya",
//         population:"50m",
//         continenet: "Africa",
//         lang:"Kiswahili"
//      },
//      {
//         name:"Austraria",
//         population:"40m",
//         continent:"Austraria",
//         lang:"English"

//      },
//      {
//         name:"France",
//         population:"70m",
//         continent:"Europe",
//         lang:"Frence"
//      }
//     ]
//         const countNation = () => {
//              country.forEach(({name, population, continent, lang}) => { 
//                 console.log(`This is ${name} with a population of ${population} people, found in ${continent} and the language we speak is ${lang}`); 
//     }); 
// };
//      countNation();
        
// }

// {
//     const person= {
//         name:"solo",
//         age:30,
//         country:"kenya"
//     }
//     let newperson = {...person}
//     newperson.name = "Agnes"

//     console.log(person);
//     console.log(newperson);
// }

// {
//     const person= {
//         name:"solo",
//         age:30,
//         county:"kenya",
//         profession:{
//             field:"IT",
//             subField:"Machine Learning"
//         }
//     }
//     let newperson = {...person,name:"Agnes", Gender:"M", county:"kiambu", profession: {...person.profession,type:"hybrid"}}

//     console.log(person);
//     console.log(newperson);
// }

// {
//     const country= {
//         name:"kenya",
//         population:"42M",
//         continent:"Africa",
//         more:{
//             climate:"Hot and Wet",
//             level:"Developing",
//         }
        
//     }
//     const newCountry = {...country,name:"CNDA",population:"50M",continent:"North America",language:"French",level:"Development",more:{...country.more,climate:"wet",level:"Developed",airport:"20"}}
//     console.log(country);
//     console.log(newCountry);
// }

// {
//     const student= {
//         name:"abel",
//         course:"programming",
//         subject:{
//             math: 56,
//             eng:78,
//             kisw:60,
//             sci:80
//         }
//     }
//     let  {name,course,...subject} = student;
//     console.log(student);
// }

{


    /// just  a test !!!!!!
    name="kenya",
    lang="english",
    population={
        male:700000,
        female:80000,
        children:20000
    }

    let country = {name,lang, population}
    console.log(country);
}