"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
class Registro {
    constructor(livro, data, cliente) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
        this.cliente = cliente;
    }
}
exports.Registro = Registro;
