{
    async function getData(){
        let image = document.getElementById("myimage")
       
        let response = await fetch(" https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        console.log(data);
        image.src=data.message
    }
    button = document.getElementById("clickme")
    button.addEventListener("click",getData)
    getData()
}

{
    async function getJoke(){
        let myparr = document.getElementById("joke")
        let answer = await fetch("https://official-joke-api.appspot.com/random_joke")
        let data = await answer.json()
    }
}