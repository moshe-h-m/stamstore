function createProfile(imgSrc, header, desc) {
    // <div id="mystore">
    //     <img class="userIM" src="/imege/maran.jpg">


    //         <div class="d-flex justify-content-center mt-3"> <span class="text text-center">M-A-R-A-N<br> the crown of the
    //             genertion</span> </div>
    // </div>


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