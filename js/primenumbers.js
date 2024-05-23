{
    function primenumbers(a){
    if (a<=1){
        return false
    }
    else if (a==2){
        return true
    }
    else {
        for(let i=2; i<a; i++){
            if( a % i == 0){
                return false
            }
            else{
                return true
            }
        }
    }
}
console.log(primenumbers(7))
}
{
    function drawCenteredTriangle(game){
        for(let m = 1; m <= game; m++){
            let newLine = "";
            let spaces = game - m;
            for(let s = 0; s < spaces; s++){
                newLine += " ";
            }
            for(let k = 1; k <= m; k++){
                newLine += k + " ";
            }
            console.log(newLine);
        }
    }
    drawCenteredTriangle(15)
}
