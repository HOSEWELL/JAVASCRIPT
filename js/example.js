const myPar = document.getElementById("demo text");
myPar.innerHTML=`<h1 style="font-style: italic;">Am Hosewell &#128514;</h1>`

const myPar2 = document.getElementsByTagName("p");
console.log(myPar2);

const elementsClass= document.getElementsByClassName("heading");
// console.log(elementsClass);
for (i=0; i< elementsClass.length; i++);
console.log(elementsClass[i]);

const elementsByQuery = document.querySelectorAll("h.heading");
console.log(elementsByQuery);

const myimage=document.getElementById("sampleimage");

{

    function changeStyle(){

  const button = document.getElementById("body")
  button.style.backgroundColor="red"
}
}

