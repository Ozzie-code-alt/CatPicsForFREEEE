let pressButton = document.querySelector(".clickCat");

pressButton.addEventListener('click',getPics);

function getPics(){
    let CatPics = document.querySelector(".CatPics")
    CatPics.innerHTML = ''// generate an image null then reappear on click
    fetch('https://api.thecatapi.com/v1/images/search') // returns a json data from cat api
    .then((response) => response.json()) // then get response 
    .then((data)=>{ 
       let catsURL = data[0].url //console.log(data[0].url)//grab data from URL in an array
       let catElement = document.createElement("img")
        catElement.setAttribute('src', `${catsURL}`)//set attribute as source then convert it to string using back strings
        catElement.classList.add("case")
        let CatPics = document.querySelector(".CatPics")
        CatPics.appendChild(catElement)
    })
    .catch(err => console.log(err))
}