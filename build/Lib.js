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
    static buscaGenero(genero) {
        const livros = [];
        Library.allBooks.forEach(livro => {
            if (livro.genero == genero) {
                livros.push(livro);
            }
        });
        return livros;
    }
    static addCliente(cliente) {
        Library.clientes.push(cliente);
    }
    static buscaCPF(cpf) {
        let ret = null;
        for (let i = 0; i < Library.clientes.length; i++) {
            if (Library.clientes[i].cpf.trim().toLocaleLowerCase() == cpf.trim().toLocaleLowerCase()) {
                ret = Library.clientes[i];
                break;
            }
        }
        return ret;
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
    static updateCliente(cliente) {
        const updObj = Library.clientes.findIndex((e => e.cpf == cliente.cpf));
        Library.clientes[updObj] = cliente;
        return Library.clientes[updObj];
    }
    static removeCliente(cliente) {
        if (Library.clientes.includes(cliente)) {
            const index = Library.clientes.indexOf(cliente);
            Library.clientes.splice(index, 1);
        }
    }
    static listaClientes() {
        return Library.clientes;
    }
    static addLog(reg) {
        Library.registro.push(reg);
        return;
    }
    static Log() {
        return Library.registro;
    }
}
exports.Library = Library;
Library.allBooks = [];
Library.clientes = [];
Library.registro = [];
