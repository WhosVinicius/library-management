"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro_emprestimo = exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, data) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
    }
    static cria_emprestimo(livro, data = "11/07") {
        const emprestimo = new Emprestimo(livro, data);
        return emprestimo;
    }
    static realiza_emprestimo(cliente, livro, data) {
        const emprestimo = this.cria_emprestimo(livro, data);
        cliente.ficha.push(emprestimo);
    }
}
exports.Emprestimo = Emprestimo;
class Registro_emprestimo {
    constructor(livro, data, cliente) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
        this.cliente = cliente;
    }
}
exports.Registro_emprestimo = Registro_emprestimo;
