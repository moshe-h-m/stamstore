function submit() {
    const imgSrc = document.getElementById('imageSrc').value
    const header = document.getElementById('header').value
    const desc = document.getElementById('desc').value

    window.fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imgSrc,
            header,
            desc
        })
    })
        .then(() => { })
        .catch(console.log)


}