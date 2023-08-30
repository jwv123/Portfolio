const app = require("express")();
require("dotenv").config();

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    next();
});

app.get('/', (req, res) => {
    res.send("Page Under Construction");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on Port " + port);
})