"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const clienteController_1 = require("./controllers/clienteController");
const bookController_1 = require("./controllers/bookController");
class Server {
    constructor(portNumber) {
        this.port = portNumber;
        this.app = (0, express_1.default)();
    }
    init() {
        this.app.listen(this.port, () => {
            console.log("server running on port:", this.port);
            app.use(body_parser_1.default.json());
        });
    }
}
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/clientes', (req, res) => {
    clienteController_1.clienteController.getAll(req, res);
});
app.post('/clientes', (req, res) => {
    clienteController_1.clienteController.insertClient(req, res);
});
app.delete('/clientes', (req, res) => {
    clienteController_1.clienteController.deleteClient(req, res);
});
app.delete('clientes/id:');
app.get('/books', (req, res) => {
    bookController_1.bookController.getAll(req, res);
});
app.post('/books', (req, res) => {
    bookController_1.bookController.insertBook(req, res);
});
function init() {
    app.listen(3000, () => {
        console.log('server rodando na porta 3000');
    });
}
init();
