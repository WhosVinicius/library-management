import { Library } from "../Lib"

export class Book {
    titulo: String;
    autor: String;
    genero: String;
    id: number;

    constructor (titulo: String, autor: String, genero: String) {
        this.autor = autor;
        this.titulo = titulo;
        this.genero = genero;
        this.id = 2;
    }

    public static criaLivro (autor: String, titulo: String, genero: String): Book {
        const novo_livro: Book = new Book(titulo, autor, genero);
        return novo_livro;
    }
}

export class bookModel {
    public static insertBook (book: Book) {
        Library.addLivro(book);
        return book;

    }
}