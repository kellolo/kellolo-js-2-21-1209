const basket = require('./services/basket')
const writer = require('./utils/writer')

const express = require('express');
const fs = require('fs')
const server = express();

server.use(express.json());
server.get('/catalog', (req, res) => {

    /*     fs.readFile('./server/db/catalog.json', 'utf-8', (error,data)=>{
            if(!error){
                res.json(JSON.parse(data))
            }
        }) */
    let data = JSON.parse(fs.readFileSync('./server/db/catalog.json', 'utf-8'))
    res.json(data)

})

server.get('/basket', (req, res) => {

    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
    res.json(data)

})

server.post('/basket', (req, res) => {

    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
    let newBasket = basket.add(data, req.body)

    writer('./server/db/basket.json', newBasket)
    .then(status =>{
        if (status){
            res.json({ status: true })
        }
        else{
            /* res.json({ status: false }) */
            res.sendStatus(500)
        }
    })
})

server.put('/basket/:id', (req, res) => {

    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
    let newBasket = basket.change(data, req.params.id, req.body.amount)

    writer('./server/db/basket.json', newBasket)
    .then(status =>{
        if (status){
            res.json({ status: true })
        }
        else{
            /* res.json({ status: false }) */
            res.sendStatus(500)
        }
    })
})
server.delete('/basket/:id', (req, res) => {

    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
    let newBasket = basket.delete(data, req.params.id)

    writer('./server/db/basket.json', newBasket)
    .then(status =>{
        if (status){
            res.json({ status: true })
        }
        else{
            /* res.json({ status: false }) */
            res.sendStatus(500)
        }
    })
})

/* server.put('/basket/:id', (req, res) => { 

    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
    let newBasket = basket.change(data, req.params.id, req.body.amount)

    fs.writeFile('./server/db/basket.json', JSON.stringify(newBasket, null, ' '), err=>{
        if (!err){
            res.json({ status: true })
        } else{
            res.json({ status: false })
        }
    })
}) */









server.listen(3000);


/* server.get('/', (req, res) => {
    res.send('hello')
}) */