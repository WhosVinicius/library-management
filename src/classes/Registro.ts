import { Book } from "./Book";
import { Cliente } from "./Cliente/Cliente";

export class Registro {
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
}
