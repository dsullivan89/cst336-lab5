const express = require("express");
const app = express();

var IP = process.env.IP || "localhost";
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("it works");
});

app.listen(PORT, IP, function() {
    console.log(`Server is running. http://${IP}:${PORT}`);
});