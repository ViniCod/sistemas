const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
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
const server = http.createServer(app);
server.listen(3000);