import { Book } from "./models/bookModel";
import { Cliente } from "./models/clienteModel";
import { registroEmprestimo } from "./Emprestimo";


export class Library {
    static allBooks: Array<Book> = [];
    static clientes: Array<Cliente> = [];
    static log: Array<registroEmprestimo> = [];

    static addLivro (livro: Book): void {
        this.allBooks.push(livro);
    }

    static removeLivro (livro: Book): void {
        if (this.allBooks.includes(livro)) {
            const index: number = this.allBooks.indexOf(livro);
            this.allBooks.splice(index, 1);
        }
    }

    static buscaLivro (titulo: String): Book | null {
        this.allBooks.forEach(livro => {
            if (livro.titulo == titulo) {
                return livro;
            }
        });
        return null;
    }

    static buscaLivroID (id: number): Book | null {
        this.allBooks.forEach(livro => {
            if (livro.id == id) {
                return livro;
            }
        })
        return null;
    }

    static listaLivros (): Array<Book> {
        this.allBooks.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n")
        });
        return this.allBooks;
    }

    static buscaAutor (autor: String): Array<Book> {
        const livros: Array<Book> = [];
        this.allBooks.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }

    static buscaaGenero (genero: String): Array<Book> {
        const livros: Array<Book> = [];
        this.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        })
        return livros;
    }

    static buscaCPF (cpf: String): Cliente | null {
        this.clientes.forEach(cliente => {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        });
        return null;
    }

    static buscaNome (nome: String): Array<Cliente> {
        const clientes_encontrados: Array<Cliente> = [];
        this.clientes.forEach(cliente => {
            if (cliente.nome == nome) {
                clientes_encontrados.push(cliente);
            }
        });
        return clientes_encontrados;
    }

    static removeCliente (cliente: Cliente): void {
        if (this.clientes.includes(cliente)) {
            const index: number = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1)
        }
    }

    static addCliente (cliente: Cliente) {
        if (cliente.cpf.length == 11 && (this.buscaCPF(cliente.cpf) != null)) {
            this.clientes.push(cliente);
        }
    }

    static listaClientes (): Array<Cliente> {
        this.clientes.forEach(element => {
            console.log(element.nome + " ", element.cpf + "\n")
        });
        return this.clientes;
    }
}

