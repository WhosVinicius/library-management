"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroEmprestimo = exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, data) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
    }
    static criaEmprestimo(livro, data = "11/07") {
        const emprestimo = new Emprestimo(livro, data);
        return emprestimo;
    }
    static realizaEmprestimo(cliente, livro, data) {
        const emprestimo = this.criaEmprestimo(livro, data);
        cliente.ficha.push(emprestimo);
    }
}
exports.Emprestimo = Emprestimo;
class registroEmprestimo {
    constructor(livro, data, cliente) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
        this.cliente = cliente;
    }
}
exports.registroEmprestimo = registroEmprestimo;
