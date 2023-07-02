"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    static addLivro(livro) {
        Library.allBooks.push(livro);
    }
    static removeLivro(livro) {
        if (Library.allBooks.includes(livro)) {
            const index = Library.allBooks.indexOf(livro);
            Library.allBooks.splice(index, 1);
        }
    }
    static buscaLivro(titulo) {
        Library.allBooks.forEach(livro => {
            if (livro.titulo == titulo) {
                return livro;
            }
        });
        return null;
    }
    static buscaLivroID(id) {
        Library.allBooks.forEach(livro => {
            if (livro.id == id) {
                return livro;
            }
        });
        return null;
    }
    static listaLivros() {
        Library.allBooks.forEach(element => {
            console.log(element.titulo + " ", element.autor + "\n");
        });
        return Library.allBooks;
    }
    static buscaAutor(autor) {
        const livros = [];
        Library.allBooks.forEach(livro => {
            if (livro.autor == autor) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static buscaaGenero(genero) {
        const livros = [];
        Library.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static buscaCPF(cpf) {
        Library.clientes.forEach(cliente => {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        });
        return null;
    }
    static buscaNome(nome) {
        const clientes_encontrados = [];
        Library.clientes.forEach(cliente => {
            if (cliente.nome == nome) {
                clientes_encontrados.push(cliente);
            }
        });
        return clientes_encontrados;
    }
    static removeCliente(cliente) {
        if (Library.clientes.includes(cliente)) {
            const index = Library.clientes.indexOf(cliente);
            Library.clientes.splice(index, 1);
        }
    }
    static addCliente(cliente) {
        Library.clientes.push(cliente);
    }
    static listaClientes() {
        Library.clientes.forEach(element => {
            console.log(element.nome + " ", element.cpf + "\n");
        });
        return Library.clientes;
    }
    static addLog(reg) {
        Library.registro.push(reg);
        return;
    }
    static Log() {
        Library.registro.forEach(reg => {
            console.log(reg);
        });
        return Library.registro;
    }
}
exports.Library = Library;
Library.allBooks = [];
Library.clientes = [];
Library.registro = [];
