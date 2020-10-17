const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {

    // синхронное чтение (если нужно обработать ошибки)
    // fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
    //     if (!error) {
    //         res.json(JSON.parse(data))
    //     }
    // })

    //асинхронное чтение (если нужно данные прочитать и вернуть наружу)
    let data = JSON.parse(fs.readFileSync('./server/db/catalog.json', 'utf-8'));
    res.json(data);
})

server.get('/basket', (req, res) => {

    // синхронное чтение (если нужно обработать ошибки)
    // fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
    //     if (!error) {
    //         res.json(JSON.parse(data))
    //     }
    // })

    //асинхронное чтение (если нужно данные прочитать и вернуть наружу)
    let datab = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    res.json(datab);
})

// server.get('/', (req, res) => {
//     res.send('Hello')
// }) 

// server.get('/world', (req, res) => {
//     res.send('Hello world')
// })

// server.get('/basket', (req, res) => {
//     res.json({ content: [{id: 1}, {id: 2}]})
// })

server.listen(3000);