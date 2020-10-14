const express = require('express');
const fs = require('fs');
const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
    // Асинхронное чтение = НЕ возвращает данные, ошибкиу обработает
    // fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
    //     if (!error) {
    //         res.json(JSON.parse(data))
    //     }
    // })

    // Синхронное чтение = возвращает данные, ошибки НЕ обработает
    let data = JSON.parse(fs.readFileSync('./server/db/catalog.json', 'utf-8'));
    res.json(data);
});

// server.get('/', (req, res) => {
//     res.send('Hello')
// });

// server.get('/wold', (req, res) => {
//     res.send('wold')
// });

// server.get('/basket', (req, res) => {
//     res.json({ content: [{id: 1}, {id: 2}] })
// });

server.listen(3000);