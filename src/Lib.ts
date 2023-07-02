import { Book } from "./models/bookModel";
import { Cliente } from "./models/clienteModel";
import { registroEmprestimo } from "./Emprestimo";


export class Library {
    static allBooks: Array<Book> = [];
    static clientes: Array<Cliente> = [];
    static registro: Array<registroEmprestimo> = [];

    static addLivro (livro: Book): void {
        Library.allBooks.push(livro);
    }

    static removeLivro (livro: Book): void {
        if (Library.allBooks.includes(livro)) {
            const index: number = Library.allBooks.indexOf(livro);
            Library.allBooks.splice(index, 1);
        }
    }

    static buscaLivro (titulo: String): Book | null {
        Library.allBooks.forEach(livro => {
            if (livro.titulo == titulo) {
                return livro;
            }
        });
        return null;
    }

    static buscaLivroID (id: number): Book | null {
        Library.allBooks.forEach(livro => {
            if (livro.id == id) {
                return livro;
            }
        })
        return null;
    }

    static listaLivros (): Array<Book> {
        Library.allBooks.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n")
        });
        return Library.allBooks;
    }

    static buscaAutor (autor: String): Array<Book> {
        const livros: Array<Book> = [];
        Library.allBooks.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }

    static buscaaGenero (genero: String): Array<Book> {
        const livros: Array<Book> = [];
        Library.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        })
        return livros;
    }

    static buscaCPF (cpf: String): Cliente | null {
        Library.clientes.forEach(cliente => {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        });
        return null;
    }

    static buscaNome (nome: String): Array<Cliente> {
        const clientes_encontrados: Array<Cliente> = [];
        Library.clientes.forEach(cliente => {
            if (cliente.nome == nome) {
                clientes_encontrados.push(cliente);
            }
        });
        return clientes_encontrados;
    }

    static removeCliente (cliente: Cliente): void {
        if (Library.clientes.includes(cliente)) {
            const index: number = Library.clientes.indexOf(cliente);
            Library.clientes.splice(index, 1)
        }
    }

    static addCliente (cliente: Cliente) {
        if (cliente.cpf.length == 11 && (Library.buscaCPF(cliente.cpf) != null)) {
            Library.clientes.push(cliente);
        }
    }

    static listaClientes (): Array<Cliente> {
        Library.clientes.forEach(element => {
            console.log(element.nome + " ", element.cpf + "\n")
        });
        return Library.clientes;
    }

    static addLog (reg: registroEmprestimo) {
        Library.registro.push(reg);
        return;
    }

    static Log (): Array<registroEmprestimo> {
        Library.registro.forEach(reg => {
            console.log(reg);
        })
        return Library.registro;
    }

}

