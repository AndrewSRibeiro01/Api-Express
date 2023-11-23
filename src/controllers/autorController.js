import { autor } from "../modelos/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
            res.status(200).json(AutorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do autor` });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` });
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await Autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await Autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluido com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao exclusão` });
        }
    };
};

export default AutorController;
