function signIn() {
    const email2 = document.getElementById('typeEmailX').value
    const pasword2 = document.getElementById('typePasswordX').value

    let i = 0;



    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {

            data.forEach(sof => {
                i = sof.id

            })
            data.forEach(sof => {
                chackPas(sof.email, sof.pasword, sof.id)

            })

        })

    function chackPas(email, password, id) {

        if ((email == email2) && (password === pasword2)) {
            location.replace("/myorder.html?id=" + id);
            throw 1;
        } else
            if (i == id) {
                alert("email or password not corect")
            }

    }
}






