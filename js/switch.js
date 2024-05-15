{
    let a = 4;
    let b = 7;
    let x=(a+b)%2;

    switch(x){
        case 0:
        console.log("x is even number");
        break;
        default:
            console.log("x is an odd number");
    }

}
{
    let a= 15;
    switch(a){
        case 5:
            console.log("a is 5");
            break
        case 10:
            console.log("a is 10");
            break
        case 15:
            console.log("a is 15");
            break
            default:
            console.log("value not found");
    }

}
{
    let a = 14;
    let r =(a%3)
    switch(r){
        case 0:
            console.log("value divisible by three");
            break
        default:
            console.log("value not divisible by three")

    }
}