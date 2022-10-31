function signIn() {
    const email2 = document.getElementById('email').value
    const pasword2 = document.getElementById('paswo').value
    let id
    let var1 = 0;
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {

            try {


                data.forEach(sof => {
                    id = sof.id
                    var1 = chackPas(sof.email, sof.pasword)

                    if (var1 === 1) {
                        throw 'Break';
                    }
                    alert("email or password not corect")
                })
            } catch (error) {
                if (error !== 1) throw error
            }
            // if (!var1) { alert("email or password not corect") }

            // if (var1) {
            //     alert("check your orders")
            //     return;
            // } else {
            //     alert("email or password not corect")
            // }

        })

    function chackPas(email, password) {
        if ((email == email2) && (password === pasword2)) {
            location.replace(`http://localhost:3000/cards/${id}`);
            throw 1;
        }

    }
}






// signinRouter.post("/signin", async (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     // if (email == "1234" && password == "1234")
//     // {
//     // return res.status(201).redirect("http://127.0.0.1:5555/fronted/store.html")
//     // }
//     const existingUser = await User.findOne({ "email": email, "password": password })

//     const findall = await User.find()

//     console.log(findall, "kkkkkkkkkkkkk", existingUser, email, password)


//     if (existingUser) {

//         return res.status(201).render("Management")


//     }
//     return res.send("not faund")