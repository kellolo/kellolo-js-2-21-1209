const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json());

server.use('/', express.static('./public'))

server.get('/catalog', (req, res) => {
    // fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
    //     if (!error) {
    //         res.json(JSON.parse(data))
    //     }
    // })

    let data = JSON.parse(fs.readFileSync('./server/db/catalog.json', 'utf-8'));
    res.json(data);
})

// server.get('/', (req, res) => {
//     res.send('Hello')
// })


// server.get('/world', (req, res) => {
//     res.send('world')
// })

// server.get('/basket', (req, res) => {
//     res.json({ content: [{id: 1}, {id: 2}] })
// })

server.listen(3000);