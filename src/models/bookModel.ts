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

    public static async getAll () {
        return Library.listaLivros();
    }

    public static async insertBook (book: Book) {
        Library.addLivro(book);
        return book;
    }

    public static async getBook (id: number) {
        return Library.buscaLivroID(id);
    }

    public static async deleteBook (id: number) {
        const book = await bookModel.getBook(id);
        if (book != null) {
            Library.removeLivro(book);
        }
    }
}