"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpServer = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const clientes_1 = require("../routes/clientes");
const books_1 = require("../routes/books");
class ExpServer {
    constructor(portNumber) {
        this.port = portNumber;
        this.app = (0, express_1.default)();
        this.init();
    }
    init() {
        this.app.listen(this.port, () => {
            console.log("server running on port:", this.port);
        });
        this.app.use(body_parser_1.default.json());
        this.startRoutes();
    }
    startRoutes() {
        this.app.use(clientes_1.clientRoutes);
        this.app.use(books_1.bookRoutes);
    }
}
exports.ExpServer = ExpServer;
