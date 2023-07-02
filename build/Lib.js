"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    static addLivro(livro) {
        this.allBooks.push(livro);
    }
    static removeLivro(livro) {
        if (this.allBooks.includes(livro)) {
            const index = this.allBooks.indexOf(livro);
            this.allBooks.splice(index, 1);
        }
    }
    static buscaLivro(titulo) {
        this.allBooks.forEach(livro => {
            if (livro.titulo == titulo) {
                return livro;
            }
        });
        return null;
    }
    static buscaLivroID(id) {
        this.allBooks.forEach(livro => {
            if (livro.id == id) {
                return livro;
            }
        });
        return null;
    }
    static listaLivros() {
        this.allBooks.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n");
        });
        return this.allBooks;
    }
    static buscaAutor(autor) {
        const livros = [];
        this.allBooks.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static buscaaGenero(genero) {
        const livros = [];
        this.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static buscaCPF(cpf) {
        this.clientes.forEach(cliente => {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        });
        return null;
    }
    static buscaNome(nome) {
        const clientes_encontrados = [];
        this.clientes.forEach(cliente => {
            if (cliente.nome == nome) {
                clientes_encontrados.push(cliente);
            }
        });
        return clientes_encontrados;
    }
    static removeCliente(cliente) {
        if (this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
        }
    }
    static addCliente(cliente) {
        if (cliente.cpf.length == 11 && (this.buscaCPF(cliente.cpf) != null)) {
            this.clientes.push(cliente);
        }
    }
    static listaClientes() {
        this.clientes.forEach(element => {
            console.log(element.nome + " ", element.cpf + "\n");
        });
        return this.clientes;
    }
}
exports.Library = Library;
Library.allBooks = [];
Library.clientes = [];
Library.log = [];
