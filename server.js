var express = require("express");
var app = express();

app.use(express.static("main"));

app.get("/", (request, res) => { res.sendFile(__dirname + " ~/index.html"); });

app.get("/contact", (req, res) => { res.sendFile(__dirname + "~/public/contact.html"); });

app.get("/about", (req, res) => { res.sendFile(__dirname + "~/public/about.html"); });

app.get("/SeeME", (req, res) => { res.sendFile(__dirname + "~/public/software/SeeME.html"); });
app.get("", (req, res) => { res.sendFile(__dirname + ""); });

app.get("", (req, res) => { res.sendFile(__dirname + ""); });

app.use(function(req, res, next) {
    res.sendFile(__dirname + "/views/404.html");
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});