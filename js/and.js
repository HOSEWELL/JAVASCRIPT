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
        econsole.log("computer science");
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









