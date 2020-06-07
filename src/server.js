const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.static("public"))

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    // Get data on database
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length

        // console.log("Aqui estão os seus registros:")
        // console.log(rows)
        return res.render("search-results.html", {places: rows, total: total})
    })


})

server.listen(3000)