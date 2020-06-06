const express = require("express")
const server = express()

server.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html")
})

server.listen(3000)