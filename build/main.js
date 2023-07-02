"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Lib_1 = require("./Lib");
const body_parser_1 = __importDefault(require("body-parser"));
const clienteController_1 = require("./controller/clienteController");
const bookController_1 = require("./controller/bookController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.json({ message: 'hello world with Typescript' });
});
app.get('/clientes', (req, res) => {
    const clientes = Lib_1.Library.listaClientes();
    res.status(200).send(clientes);
});
app.post('/clientes', (req, res) => {
    clienteController_1.clienteController.insertUser(req, res);
});
app.delete('/clientes', (req, res) => {
    const data = req.body.cpf;
    const cliente = Lib_1.Library.buscaCPF(data);
    if (cliente != null) {
        Lib_1.Library.removeCliente(cliente);
    }
    res.status(200).send('cliente deletado com sucesso');
});
app.get('/books', (req, res) => {
    const livros = Lib_1.Library.listaLivros();
    res.status(200).send(livros);
});
app.post('/books', (req, res) => {
    bookController_1.bookController.insertBook(req, res);
});
app.listen(3000, () => {
    console.log('server rodando na porta 3000');
});
