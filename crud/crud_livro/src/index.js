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
let id = 2;
let livros = [
    {
        id: 1,
        titulo: "Solo Leveling",
        descricao: "Do mais fraco ao mais poderoso! Uma história de perseverança e superação pessoal!",
        edicao: "Volume 1",
        autor: "Chugong",
        isbn: "978-65-86799-19-4"
    },
    {
        id: 2,
        titulo: "Solo Leveling",
        descricao: "Não há o que temer. Afinal ele já morreu uma vez",
        edicao: "Volume 2",
        autor: "Chugong",
        isbn: "978-65-86799-20-0"
    }
];

app.set("port", porta);
app.post("/livros", (req, res, next) => {
    const livro = {
        id: id += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbn: req.body.isbn
    }
    livros.push(livro)
    res.status(201).json(livros);
})
app.get("/livros", (req, res, next) => {
    res.json(livros);
});
app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor,
            livro.isbn = req.body.isbn
        }
    })
    res.status(200).json(livros);
});
app.delete("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id)  {
            const index = livros.indexOf(livro, 0)
            livros.splice(index, 1)
        }
    })
    res.status(200).json(livros);
});