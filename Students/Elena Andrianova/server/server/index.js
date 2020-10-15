const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {

   // let data = null;
   // fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
   //     if(!error) {
   //         res.json(JSON.parse(data));
   //     }
   // })

    let data = JSON.parse(fs.readFileSync('./server/db/catalog.json', 'utf-8'))
    res.json(data);
});

//server.get('/basket', (req, res) => {
//     let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'))
//     res.json(data);
//});


server.listen(3000);