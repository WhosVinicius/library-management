import { Book } from "../Book";

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
}

