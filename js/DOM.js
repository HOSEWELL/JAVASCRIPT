const mypar = document.getElementById("myh1")
const mybutton = document.getElementById("myButton")
let bodyIsDefault = true

function changeMyH1(){
    if(bodyIsDefault){
        mypar.className="heading2"
        bodyIsDefault = false
    }else{
        mypar.className = "heading"
        bodyIsDefault = true
    }
    
}