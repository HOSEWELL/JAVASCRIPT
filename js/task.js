{
    let button = document.getElementById("mybutton")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\\|*&%^$£!@"
    sampleChars="abcdefghijklmnopqrstuvwxyz"
    sampleupper="QWERTYUIOPLKJHGFDSAZXCVBNM"
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
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial) && checkpassword(password,sampleChars)&&(password.length>8) && checkpassword(password,sampleupper)){
            alert("Correct input")
        } else if(!checkpassword(password,sampleChars)){
                alert("does not contain small letters")
            }
            else if(!checkpassword(password,sampleSpecial)){
                alert("does not contain special characters")
            }else if(!checkpassword(password,sampleNumbers)){
                alert("does not contain numbers")
            }else if(password.length<8){
                alert("add more characters")
            }else if(!checkpassword(password,sampleupper)){
                alert("does not contain uppercase")
            }
        else{
            alert("Incorrect")
        }
    }
    button.addEventListener('click', validatePassword)
}

    let button = document.getElementById("input");
