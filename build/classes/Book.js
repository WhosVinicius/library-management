"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(titulo, autor, genero) {
        this.autor = autor;
        this.titulo = titulo;
        this.genero = genero;
        this.id = 2;
    }
    static criaLivro(autor, titulo, genero) {
        const novo_livro = new Book(titulo, autor, genero);
        return novo_livro;
    }
}
exports.Book = Book;
