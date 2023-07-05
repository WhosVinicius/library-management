import { Cliente } from "./classes/cliente/Cliente";
import { Registro } from "./classes/Registro";
import { Book } from "./classes/Book";

export class Library {
    static allBooks: Book[] = [];
    static clientes: Cliente[] = [];
    static registro: Registro[] = [];

    static addLivro (livro: Book): void {
        Library.allBooks.push(livro);
    }

    static removeLivro (livro: Book): void {
        if (Library.allBooks.includes(livro)) {
            const index: number = Library.allBooks.indexOf(livro);
            Library.allBooks.splice(index, 1);
        }
    }

    static buscaLivro (titulo: string): Book | null {
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

    static listaLivros (): Book[] {
        Library.allBooks.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n")
        });
        return Library.allBooks;
    }

    static buscaAutor (autor: string): Book[] {
        const livros: Book[] = [];
        Library.allBooks.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }

    static buscaGenero (genero: string): Book[] {
        const livros: Book[] = [];
        Library.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        })
        return livros;
    }

    static addCliente (cliente: Cliente) {
        Library.clientes.push(cliente);
    }

    static buscaCPF (cpf: string): Cliente | null {
        let ret = null;
        for (let i: number = 0; i < Library.clientes.length; i++) {
            if (Library.clientes[i].cpf.trim().toLocaleLowerCase() == cpf.trim().toLocaleLowerCase()) {
                ret = Library.clientes[i]
                break;
            }
        }
        return ret;
    }

    static buscaNome (nome: string): Cliente[] {
        const clientes_encontrados: Cliente[] = [];
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

    static listaClientes (): Cliente[] {
        // Library.clientes.forEach(element => {
        //     console.log(element.nome + " ", element.cpf + "\n")
        // });
        return Library.clientes;
    }

    static addLog (reg: Registro) {
        Library.registro.push(reg);
        return;
    }

    static Log (): Registro[] {
        Library.registro.forEach(reg => {
            console.log(reg);
        })
        return Library.registro;
    }

}

