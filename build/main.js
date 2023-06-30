"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Lib_1 = require("./Lib");
const bookModel_1 = require("./models/bookModel");
const clienteModel_1 = require("./models/clienteModel");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'hello world with Typescript' });
});
app.get('/clientes', (req, res) => {
    const clientes = Lib_1.Library.list_clients();
    res.status(200).send(clientes);
});
app.post('/clientes', (req, res) => {
    const data = req.body;
    const cliente = new clienteModel_1.Cliente(data.nome, data.cpf, data.endereco, data.nasc);
    Lib_1.Library.add_cliente(cliente);
    res.status(200).send('cliente cadastrado com sucesso');
});
app.delete('/clientes', (req, res) => {
    const data = req.body.cpf;
    const cliente = Lib_1.Library.busca_cpf(data);
    if (cliente != null) {
        Lib_1.Library.remove_cliente(cliente);
    }
    res.status(200).send('cliente deletado com sucesso');
});
app.get('/books', (req, res) => {
    const livros = Lib_1.Library.lista_livros();
    res.status(200).send(livros);
});
app.post('/books', (req, res) => {
    const data = req.body;
    const livro = new bookModel_1.Book(data.titulo, data.autor, data.genero);
    Lib_1.Library.add_livro(livro);
    res.status(200).send('livro cadastrado com sucesso');
});
app.listen(3000, () => {
    console.log('server rodando na porta 3000');
});
