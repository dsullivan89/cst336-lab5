const express = require("express");
const app = express();

app.set("view engine", "ejs");

var IP = process.env.IP || "localhost";
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.render("index");
});

if(PORT == 3000)
{
    app.listen(PORT, IP, function() {
        console.log(`Server is running. http://${IP}:${PORT}`);
    });
}
else
{
    app.listen(PORT, function() {
        console.log(`Server is running on port ${PORT}.`);
    });
}