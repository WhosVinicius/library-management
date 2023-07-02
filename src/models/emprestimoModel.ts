import { Book } from "./bookModel";
import { Cliente } from "./clienteModel";

export class registroEmprestimo {
    livro: Book;
    data: String;
    ativo: Boolean;
    devolvido: Boolean;
    cliente: Cliente;

    constructor (livro: Book, data: String, cliente: Cliente) {
        this.livro = livro;
        this.data = data;
        this.ativo = true;
        this.devolvido = false;
        this.cliente = cliente;
    }

    public static async getAll () {
        return;
    }

}