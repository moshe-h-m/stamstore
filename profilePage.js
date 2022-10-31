const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

function nak() {
    alert(`trr${id}`);
    console.log(id)
}
function init() {
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {
            data.forEach(sof => {
                createCard(sof.imgSrc, sof.header, sof.desc, sof.id)
            })
        })
}

function createProfile(imgSrc, header, desc) {

    const img = document.createElement('img')
    const imgUrl = `./imege/${imgSrc}`
    img.src = imgUrl
    img.className = "userIM"

    const nameDiv = document.createElement('div')
    nameDiv.className = "d-flex justify-content-center mt-3"

    const nameSpan = document.createElement('span')
    nameSpan.innerText = header

    const desSpan = document.createElement('span')
    desSpan.innerText = desc

    nameDiv.innerHTML += nameSpan.outerHTML
    nameDiv.innerHTML += desSpan.outerHTML

    const divune = document.getElementById("mystore")
    divune.appendChild(img, nameDiv)








}