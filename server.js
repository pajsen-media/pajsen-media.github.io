

// server.js
// where your node app starts


const express = require("express");
const app = express();


const api = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];



app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/views/index.html");
  
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname +  "/views/contact.html");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname +  "/views/api.html");
});

app.get("/software", (req, res) => {
  res.sendFile(__dirname +  "/views/software.html");
});

app.get("/acf-coding", (req, res) => {
  res.sendFile(__dirname + "/views/acf-coding.html")
});
app.get("/mobile", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/index.html")
})

app.get("/iphone", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/iphone.html")
})

app.get("/ipad", (req, res) => {
  res.sendFile(__dirname + "/views/mobile/ipad.html")
})
app.get("/games/a-star", (req, res) => {
  res.sendFile(__dirname + "/views/software/a-star.html")
})
app.get("/b-hed", (req, res) => {
  res.sendFile(__dirname + "/views/software/bhed.html")
})
app.get("/crf/benitorex", (req, res) => {
  res.sendFile(__dirname + "/views/software/benitorex.html")
})
app.get("/canium", (req, res) => {
  res.sendFile(__dirname + "/views/software/canium.html")
})
app.get("/seeme", (req, res) => {
  res.sendFile(__dirname + "/views/software/seeme.html")
})
app.get("/apps/seeme", (req, res) => {
  res.sendFile(__dirname + "/views/software/seeme.html")
})
app.get("/shoggoth", (req, res) => {
  res.sendFile(__dirname + "/views/software/shoggoth.html")
})
app.get("/trashbunny", (req, res) => {
  res.sendFile(__dirname + "/views/software/trashbunny.html")
})
app.get("/underbox-ed", (req, res) => {
  res.sendFile(__dirname + "/views/software/underbox-ed.html")
})
app.get("/urat", (req, res) => {
  res.sendFile(__dirname + "/views/software/urat.html")
})
app.get("/vue", (req, res) => {
  res.sendFile(__dirname + "/views/vue.html")
})

app.get("/javascript", (req, res) => {
  res.sendFile(__dirname + "/views/javascript.html")
})
app.get("/instagram", (req, res) => {
//  res.sendFile("https://instagram.com/dev.pajsen")
    res.redirect('https://instagram.com/dev.pajsen/');

})



app.use(function (req, res, next) {
  //res.status(404).send("Sorry can't find that!")
  res.sendFile(__dirname + "/views/404.html"); 
});




const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);

});


