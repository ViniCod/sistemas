//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
const cont = 1;
const livros = [
    {
        id: 1,
        título: 'Solo Leveling',
        descricao: 'Do mais fraco ao mais poderoso! Uma história de perseverança e superação pessoal!',
        edicao: 'Volume 1',
        autor: 'Chugong'
    }
];

app.set('port', porta);
app.post('/livros', (req, res, next) => {
    const livro = req.body;
    livros.push({id: contador += 1, título: livro.titulo, descrição: livro.descricao, edição: livro.edicao, autor: livro.autor});
    console.log(livros);
    res.status(201).json(livros);
})
app.get('livros', (req, res, next) => {
    res.json(livros);
});
app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;
        }
    })
    res.status(200).json(livros);
});
app.delete('/livros', (req, res, next) => {
    livros.forEach(livro=> {
        if (livro.id === req.body.id) {
            const index = livros.indexOf(livro, 0);
            livros.splice(index, 1)
        }
    })
    res.status(200).json(livros);
});