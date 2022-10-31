
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

/* ~~~~~``````````
<div class="card swiper-slide">
    <div class="image-content">
        <span class="overlay"></span>

        <div class="card-image">
            <!--<img src="images/profile8.jpg" alt="" class="card-img">-->
        </div>
    </div>

    <div class="card-content">
        <h2 class="name">David Dell</h2>
        <p class="description">The lorem text the section that contains header with having open
            functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

        <button class="button">View More</button>
    </div>
</div>
// ~~~~~``````````*/

// document.getElementById("cardwra").onload = function () { init() };
// // var onloadFunction = () => {
// //     document.getElementById("textHolder").innerHTML = "The Image is loaded";
// // }

function init() {
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {
            data.forEach(sof => {
                createCard(sof.imgSrc, sof.header, sof.desc, sof.id)
            })
        })
}
function createCard(imgSrc, header, desc, id) {
    const card1Div = document.createElement('div')
    card1Div.className = 'card swiper-slide';
    //column

    const card2Div = document.createElement('div')
    card2Div.className = 'image-content';

    const span1 = document.createElement('span')
    span1.className = 'overlay'

    const imgDiv = document.createElement('div')
    imgDiv.className = 'card-image';

    const imga = document.createElement('a')
    imga.href = "/orders.html?id=" + id

    const img = document.createElement('img')
    const imgUrl = `./imege/${imgSrc}`
    img.src = imgUrl
    img.alt = `${imgSrc}`
    img.className = 'card-img'

    imga.innerHTML += img.outerHTML

    imgDiv.innerHTML += imga.outerHTML

    card2Div.innerHTML += span1.outerHTML
    card2Div.innerHTML += imgDiv.outerHTML

    const card3Div = document.createElement('div')
    card3Div.className = 'card-content'

    const h2 = document.createElement('h2')
    h2.className = 'name'
    h2.innerText = header


    const description = document.createElement('p')
    description.className = 'description'
    description.innerText = desc

    const btna = document.createElement('a')
    btna.href = "/orders.html?id=" + id

    const btn = document.createElement('button')
    btn.className = 'button'
    btn.innerText = 'view my items'

    btna.innerHTML += btn.outerHTML


    card3Div.innerHTML += h2.outerHTML
    card3Div.innerHTML += description.outerHTML
    card3Div.innerHTML += btna.outerHTML

    card1Div.innerHTML += card2Div.outerHTML
    card1Div.innerHTML += card3Div.outerHTML

    const div = document.getElementById("cardwra")
    div.appendChild(card1Div)


}
