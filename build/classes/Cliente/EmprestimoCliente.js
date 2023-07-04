"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoCliente = void 0;
class EmprestimoCliente {
    constructor(livro, data) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
    }
}
exports.EmprestimoCliente = EmprestimoCliente;
