"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    static add_livro(livro) {
        this.All_books.push(livro);
    }
    static remove_livro(livro) {
        if (this.All_books.includes(livro)) {
            const index = this.All_books.indexOf(livro);
            this.All_books.splice(index, 1);
        }
    }
    static busca_livro(titulo) {
        this.All_books.forEach(livro => {
            if (livro.titulo == titulo) {
                return livro;
            }
        });
        return null;
    }
    static lista_livros() {
        this.All_books.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n");
        });
        return this.All_books;
    }
    static busca_autor(autor) {
        const livros = [];
        this.All_books.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static busca_genero(genero) {
        const livros = [];
        this.All_books.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static busca_cpf(cpf) {
        this.clientes.forEach(cliente => {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        });
        return null;
    }
    static busca_nome(nome) {
        const clientes_encontrados = [];
        this.clientes.forEach(cliente => {
            if (cliente.nome == nome) {
                clientes_encontrados.push(cliente);
            }
        });
        return clientes_encontrados;
    }
    static remove_cliente(cliente) {
        if (this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
        }
    }
    static add_cliente(cliente) {
        if (cliente.cpf.length == 11 && (this.busca_cpf(cliente.cpf) != null)) {
            this.clientes.push(cliente);
        }
    }
    static list_clients() {
        this.clientes.forEach(element => {
            console.log(element.nome + " ", element.cpf + "\n");
        });
        return this.clientes;
    }
}
exports.Library = Library;
Library.All_books = [];
Library.clientes = [];
Library.log = [];
