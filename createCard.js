function submit() {
    const imgSrc = document.getElementById('imageSrc').value
    const header = document.getElementById('header').value
    const desc = document.getElementById('desc').value
    const email = document.getElementById('email').value
    const pasword = document.getElementById('paswo').value



    if (imgSrc && header && desc && email && paswo) {
        window.fetch('http://localhost:3000/cards', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imgSrc,
                header,
                desc,
                email,
                pasword,



            })

        })
            .then(res => res.json())
            .then(data => {
                data.forEach(sof => {
                    if (email == sof.email) {
                        window.alert("this email is alrady exist, please sign in or use other mail adrees");
                    }
                })
            })


            .then(() => { })
            .catch(console.log)

        window.alert("dir " + header + " thank you for your regisern!");
        window.close()

    } else {
        window.alert("please complete the registrion form")

    }

}