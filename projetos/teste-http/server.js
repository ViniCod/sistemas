const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const porta = 3000;
let contador = 3;
const clientes = [
    {
        id: 1,
        nome: 'João',
        email: 'joao@email.com'
    },
    {
        id: 2,
        nome: 'Cristina',
        email: 'cristina@email.com'
    }
];
app.set('port', porta);
app.get('/clientes', (req, res, next) => {
    res.json(clientes);
});
app.post('/clientes', (req, res, next) => {
    const cliente = req.body;
    clientes.push({id: contador += 1, nome: cliente.nome, email: cliente.email});
    console.log(clientes);
    res.end();
});
const server = http.createServer(app);
server.listen(3000);