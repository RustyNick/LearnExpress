const fs = require('fs');
const express = require('express');
const { parse } = require('path');
const { json } = require('express');
const server = express();
const port = 3000;

server.use(express.json())

server.get('/api', (req, res) => {
    let raw = fs.readFileSync("mydata.json")
    let mydata = JSON.parse(raw)
    res.json(JSON.stringify(mydata))
})

server.get('/api/id', (req, res) => {

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

/* server.put('/api') */

server.delete('/api/:id', (req, res) => {
    let raw = fs.readFileSync("mydata.json")
    let mydata = JSON.parse(raw)
    const card = mydata.map(function (card) { return card.id }).indexOf(req.params.id)
    if (card === -1) {
        res.status(404).json("the ID you are looking for does not exist")
    } else {
        card.splice(0.1)
        res.json("Deleted")
    }
}

);

server.use(express.static('public'))

server.listen(port, () => { console.log("Applikationen är igång") })