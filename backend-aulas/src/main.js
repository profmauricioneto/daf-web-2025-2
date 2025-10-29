const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(error, data){
        res.send(data);
        res.end();
    });
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World From NodeJS</h1>')
// });

app.listen(PORT, () => {
    console.log(`Servidor executanto em: http://localhost:${PORT}`);
})