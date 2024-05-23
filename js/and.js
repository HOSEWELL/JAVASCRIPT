{
    let age = 21;
    let gender= "male"

    if((age>=18) && (gender=="male")) {
    console.log("Allowed In")
}else{
    console.log("Not Allowed In")

}
}
let age = 15;
    let gender = "female"
    let height = 220
{
    if ( age>18 ){
        if(gender == "male"){
            if (height >= 200){
                console.log("Too tall")
            }else if(height >= 150){
                console.log("Allowed")
            }else if( height <= 100){
                console.log("Don't even think about it")
            }else{
                console.log("Considerable")
            }
        }else{
            console.log("You are not male")
        }
    }else{
        console.log("You are not old enough");
    }
}
{
    if(("age>=18") ||("gender==male")) {
        console.log("Allowed");
    }else{
    console.log("Not Allowed");
}
}

{
    let maths = "fail";
    let english = "fail";
    let chemistry = "fail";
    let physics = "fail";
    let kiswahili = "fail";


    
    if ((maths=="pass") && (english=="pass") && (chemistry=="pass") &&(physics=="pass") && (kiswahili=="pass")){
        console.log("can choose any course");
    }
    else if((maths=="pass") && (english=="pass" || kiswahili=="pass")){
        console.log("computer science");
    }else if((maths=="pass") && (english=="pass") && (kiswahili=="pass")){
        console.log("journalism");
    }else if((maths=="pass") && (physics=="pass") && (kiswahili=="pass" || english=="pass")){
        console.log("engineer");
    }else if((maths=="pass")&& (chemistry=="pass") && (english=="pass" || kiswahili=="pass")){
        console.log("medicine");
    }else if ((maths=="pass") && (english=="pass") && (chemistry=="pass") &&(physics=="pass") && (kiswahili=="pass")){
        console.log("can choose any course");
    }
    else{
        console.log("not qualified");
    }
}
{

let math="pass"
let eng="pass"
let kisw="pass"
let bio="pass"
let physics="pass"
let chem="pass"
let geo="pass"
let history="pass"

if((math="pass")&&(eng=="pass") && (kisw=="pass")&& (bio=="pass") &&(physics=="pass")&& (chem=="pass")&& (geo="pass")&& (history="pass")){
    console.log("You Can Choose Any Course")
}else if((math=="pass") &&(eng=="pass" || kisw =="pass") && (geo=="pass" || history=="pass")){
    console.log("Computer Science")
}else if((math=="pass") && (eng="pass")&&(kisw="pass")&&(geo="pass" || history=="pass")){
    console.log("Journalism")
}else if((math=="pass")&&(eng=="pass" || kisw=="pass") &&(geo="pass" || history=="pass") && (physics=="pass" || chem=="pass")){
    console.log("Engineering")
}else if((math=="pass") && (eng=="pass" || kisw=="pass") &&(chem="pass") && (chem="pass") &&(geo="pass" || history=="pass")){
    console.log("Medicine")
}else
console.log("Not qualified")

}


{
    age=3;

    if(age<=3){
        console.log("stay at home");
    }
    else if(age<=6){
        console.log("kindergarten");
    }
    else if(age<=10){
        console.log("lower primary");
    }
    else if(age<=14){
        console.log("upper primary");
    }
    else if(age<=18){
        console.log("high school");
    }
    else if(age<=24){
        console.log("campus");
    }
    else if(age<=60){
        console.log("employed");
    }
    else{
        console.log(retired);
    }
    }
     









