"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static criaLivro(autor, titulo, genero) {
        const novo_livro = new Book(titulo, autor, genero);
        return novo_livro;
    }
}
exports.Book = Book;
class bookModel {
    static insertBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            Lib_1.Library.addLivro(book);
            return book;
        });
    }
    static getBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.buscaLivroID(id);
        });
    }
    static deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield bookModel.getBook(id);
            if (book != null) {
                Lib_1.Library.removeLivro(book);
            }
        });
    }
}
exports.bookModel = bookModel;
