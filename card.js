function createCard(imgSrc, header, desc) {
    const culomnDiv = document.createElement('div')
    culomnDiv.className = 'column';

    const cardDiv = document.createElement('div')
    culomnDiv.className = 'card';

    const img = document.createElement('img')
    const imgUrl = `./imege/${imgSrc}`
    img.src = imgUrl
    img.alt = "Denim Jeans"
    img.style.width = '100%'

    const h1 = document.createElement('h1')
    h1.innerText = header

    const description = document.createElement('p')
    description.innerText = desc


    const btn = document.createElement('button')
    btn.innerText = 'Add to card'

    cardDiv.innerHTML += img.outerHTML
    cardDiv.innerHTML += h1.outerHTML
    cardDiv.innerHTML += description.outerHTML
    cardDiv.innerHTML += btn.outerHTML

    culomnDiv.innerHTML = cardDiv.outerHTML

    const div = document.getElementById("id_row")
    div.appendChild(culomnDiv)
}