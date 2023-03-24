const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Good going");
})

// bbfc5b7f3994b11c98025a37456a99a6-us21