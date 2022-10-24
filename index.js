const express = require("express");

const app = express();

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