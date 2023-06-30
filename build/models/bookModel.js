"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = exports.Book = void 0;
const Lib_1 = require("../Lib");
class Book {
    constructor(titulo, autor, genero) {
        this.autor = autor;
        this.titulo = titulo;
        this.genero = genero;
        this.id = 2;
    }
    static cria_livro(autor, titulo, genero) {
        const novo_livro = new Book(titulo, autor, genero);
        return novo_livro;
    }
}
exports.Book = Book;
class bookModel {
    insertBook(Book) {
        Lib_1.Library.add_livro(Book);
    }
}
exports.bookModel = bookModel;
