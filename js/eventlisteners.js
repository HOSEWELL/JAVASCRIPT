{
    const button = document.getElementById("click-me");
let bodyisDefault = true
    
    function changeBackground(){
         document.body.style.backgroundColor ="violet"
        
    }
    button.addEventListener("click", changeBackground)
}
{
 
    const button= document.getElementById("click-me")
    const h1= document.getElementById("event")
    function changeColor(){
        h1.style.color="green"
    }
    button.addEventListener('mouseover',changeColor);

    function changeColoragain(){
        h1.style.color="black"
    }
    button.addEventListener('mouseout',changeColoragain)

}