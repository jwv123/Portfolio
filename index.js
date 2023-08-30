const app = require("express")();
require("dotenv").config();

app.get('/', (req, res) => {
    res.send("Page Under Construction");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on Port " + port);
})