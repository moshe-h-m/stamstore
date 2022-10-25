function init() {
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {
            data.forEach(sof => {
                createCard(sof.imgSrc, sof.header, sof.desc)
            })
        })
}
