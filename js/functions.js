{
    //Functions
    //take note: Blocks
    //use all the knowledge from previous topics
    //get the area of a rectangle
    //rectanlge one
    let l = 30
    let w = 70
    //2100
    function areaOfRectangle(l, w){ //position holders
        let area = l * w;
        console.log("Area is " + area)
    } // function definition
    console.log(l);
    areaOfRectangle(l, w);
    //always put parameter in the same order
    function tellMeSomethingGood(){
        console.log("Arsenal will not win the league")
    }
    tellMeSomethingGood()
    function twoGreetings(greeting1, greeting2){
        console.log("Greeting one is " + greeting1);
        console.log("Greeting two is " + greeting2)
    }
    twoGreetings("Jambo", "Hello")
}

{
    function getsum(n){
        let sum=(n*(n+1))/2;
        return (n*(n+1))/2;
    }
    let ans= getsum(5)
    console.log(getsum(5));
}
{
    function getsum(n){
        if (n==0){
            return 0
        }
        return getsum(n-1)+n;
    }
    console.log(getsum(5));
}

{
    function getareaoftrapizium(a, b, h){
        return((a+b)/2*h);
    }
    let ans=getareaoftrapizium(20,40,16);
    console.log(ans)
}









