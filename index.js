const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.render("index");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on Port " + port);
})