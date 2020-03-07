var express = require ("express"), 
    app     = express();

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/login", function (req, res){
    res.render("login")
})

app.listen(3000, function () {
    console.log ("We're Live")
})