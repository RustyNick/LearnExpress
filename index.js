const fs = require('fs');
const express = require('express');
const server = express();
const port = 3000;

server.use(express.json())

server.get('/api', (req, res) => {
    let raw = fs.readFileSync("mydata.json")
    let mydata = JSON.parse(raw)
    res.json(JSON.stringify(mydata))

})

server.post('/api', (req, res) => {
    try {
        let raw = fs.readFileSync("mydata.json")
        let mydata = JSON.parse(raw)
        mydata.push(req.body)
        fs.writeFileSync("mydata.json", JSON.stringify(mydata))
        res.json("sparat")
        console.log(req.body)
    } catch (err) {

    }

})

server.use(express.static('public'))

server.listen(port, () => { console.log("Applikationen är igång") })