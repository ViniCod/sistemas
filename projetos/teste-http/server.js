const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
app.set('port', porta);
app.get('/teste', (req, res, next) => {
    res.send("Hello World!");
});
const server = http.createServer(app);
server.listen(3000);