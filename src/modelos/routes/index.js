import express from "express";
import livros from "./livros.Routes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("<body style=background-color:black> <h2 style=color:white> API rodando com sucesso 👌💣🎆</h1>"));

    app.use(express.json(), livros);
};

export default routes;