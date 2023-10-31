import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import { livro } from "./modelos/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("<body style=background-color:black> <h2 style=color:white> API rodando com sucesso 👌💣🎆</h1>")
});

app.get("/livros", async (req, res) => {
    try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", async (req, res) => {
    await livro.create(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso")
});

export default app;