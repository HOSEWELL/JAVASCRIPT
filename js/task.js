{
    let button = document.getElementById("mybutton")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\\|*&%^$£!@"
    sampleChars="abcdefghijklmnopqrstuvwxyz"
    function checkpassword(password, regular) {
        for(i =0;i<regular.length;i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }
    function validatePassword(){
        let password = document.getElementById("input").value
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial) && checkpassword(password,sampleChars)&&(password.length>8)){
            alert("Correct input")
        } else if(!checkpassword(password,sampleChars)){
                alert("does not contain letters")
            }
            else if(!checkpassword(password,sampleChars)){
                alert("does not contain special characters")
            }
            else if(!checkpassword(password,sampleNumbers)){
                alert("does not contain numbers")}
            else if(password.length<8){
                alert("add more characters")
            }
        else{
            alert("Incorrect")
        }
    }
    button.addEventListener('click', validatePassword)
}