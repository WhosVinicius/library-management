import { Cliente } from "./models/clienteModel";
import { Book } from "./models/bookModel";

export class Emprestimo {
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

	public static criaEmprestimo (livro: Book, data: String = "11/07"): Emprestimo {
		const emprestimo = new Emprestimo(livro, data)
		return emprestimo;
	}

	public static realizaEmprestimo (cliente: Cliente, livro: Book, data: String) {
		const emprestimo = this.criaEmprestimo(livro, data);
		cliente.ficha.push(emprestimo);

	}

}

export class RegistroEmprestimo {
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