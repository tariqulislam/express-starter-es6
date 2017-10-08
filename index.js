import express from 'express'

let app = express()

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(5000, () => {
    console.log("App is running at 5000 port")
})

module.exports = app;