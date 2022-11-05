
// document.querySelector('id_row').addEventListener('load', function () {
//     init();
// });
function init() {
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {
            data.forEach(sof => {
                createCard(sof.imgSrc, sof.header, sof.desc)
            })
        })
}
function createCard(imgSrc, header, desc) {
    const culomnDiv = document.createElement('div')
    culomnDiv.className = 'col';
    //column

    const cardDiv = document.createElement('div')
    culomnDiv.className = 'card';

    const img = document.createElement('img')
    const imgUrl = `./imege/${imgSrc}`
    img.src = imgUrl
    img.alt = "Stam store"
    img.style.width = '100%'

    const h1 = document.createElement('h1')
    h1.innerText = header


    const description = document.createElement('p')
    description.innerText = desc


    const btn = document.createElement('button')
    btn.innerText = 'view my items';
    btn.onclick = function () {
        alert("dyyy");
    }



    cardDiv.innerHTML += img.outerHTML
    cardDiv.innerHTML += h1.outerHTML
    cardDiv.innerHTML += description.outerHTML
    cardDiv.innerHTML += btn.outerHTML


    culomnDiv.innerHTML = cardDiv.outerHTML

    const div = document.getElementById("id_row")
    div.appendChild(culomnDiv)


}