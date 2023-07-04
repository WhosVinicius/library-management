import { Library } from "../Lib"
import { Book } from "../classes/Book";

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