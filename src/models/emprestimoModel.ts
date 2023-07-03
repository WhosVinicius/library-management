import { Library } from "../Lib";
import { Book } from "./bookModel";
import { Cliente } from "./clienteModel";

export class RegistroE {
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

export class registroEModel {

    public static async getAll (): Promise<RegistroE[]> {
        return Library.Log();
    }

    public static async insertEmprestimo (reg: RegistroE) {
        Library.addLog(reg);
        return;
    }
}