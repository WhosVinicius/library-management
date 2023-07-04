import { Book } from "../Book";
import { Cliente } from "./Cliente";

export class EmprestimoCliente {
    livro: Book;
    data: String;
    ativo: Boolean;
    devolvido: Boolean;

    constructor (livro: Book, data: String) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
    }

    public static criaEmprestimo (livro: Book, data: String = "11/07"): EmprestimoCliente {
        const emprestimo = new EmprestimoCliente(livro, data)
        return emprestimo;
    }

    public static realizaEmprestimo (cliente: Cliente, livro: Book, data: String) {
        const emprestimo = this.criaEmprestimo(livro, data);
        cliente.ficha.push(emprestimo);

    }
}

