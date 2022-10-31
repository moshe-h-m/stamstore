const express = require("express");

const app = express();

// app.post('/signup', async (req, res, next) => {
//     console.log(req.body)
//     if (!req.body) {
//         return res.status(400).send("no valid")
//     }
//     const email = req.body.email
//     const password = req.body.password
//     console.log(password)
//     if (!email || !password) {

//         // return res.status(201).send(user).redirect("http://127.0.0.1:5555/fronted/store.html")
//         return res.send("email or password not valid")
//     }
//     try {
//         const existingUser = await User.findOne({ email: email })
//         if (existingUser) {

//             return res.send("email existing in db try anthur email ")

//         }
//         const user = new User({
//             email: email,
//             password: password
//         });
//         await user.save();
//         return res.status(201).render("Management")

//         return res.status(201).send(user)

//     } catch (err) {
//         return res.status(500).send(err)
//     }


// app.use((req, res) => {
//     console.log("we get a new request");
//     res.send("<h1> we got your request, thank you!!");
// });
app.get('/r/:subtitle', (req, res) => {
    const { subtitle } = req.params;
    res.send(`<ah1>HI bro;<br></br><h2>${subtitle} ~we got your request!`);
})

app.get('/r/:subtitle/:postid', (req, res) => {
    const { subtitle, postid } = req.params;
    res.send(`<h1>HI bro;<br></br><h2>this page of ${subtitle} and ${postid} @@`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>HI bro;<br></br><h2>this is the ${q} page`);
})

app.get('/cats', (req, res) => {
    res.send("<h1>HI bro;<br></br><h2>wegot your request! (cats)");
});
app.get('/dogs', (req, res) => {
    res.send("<h1>HI bro;<br></br><h2>wegot your request! (hou< dogs)");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})