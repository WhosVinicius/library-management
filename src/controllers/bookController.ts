import { Request, Response } from 'express';
import { bookModel } from '../models/bookModel';
import { Book } from '../classes/Book';
import { badRequest, internalServerError, notFound, validateNumber } from '../services/utils';
import { Library } from '../Lib';

export class bookController {

    public static async getAll (req: Request, res: Response) {
        const books: Book[] = await bookModel.getAll();
        try {
            return res.status(200).json(books);
        }
        catch (e) {
            if (e instanceof Error) {
                return internalServerError(res, e)
            }
        }
    }

    public static async getBook (req: Request, res: Response) {
        const id = parseInt(req.params.id);
        if (!id || validateNumber(id)) {
            return badRequest(res, "id invalido")
        }
        try {
            const book: Book | null = await bookModel.getBook(id)
            if (!book) {
                return notFound(res);
            }
            return book;
        }
        catch (e) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }

    public static async insertBook (req: Request, res: Response) {
        let book = req.body;

        if (!book)
            return badRequest(res, "Produto inválido");

        if (!book.titulo)
            return badRequest(res, 'Informe o nome do livro');

        if (!book.autor)
            return badRequest(res, 'Informe o autor');

        if (!book.genero)
            return badRequest(res, 'Informe o genero');
        try {
            const livro: Book | null = await bookModel.insertBook(book as Book)
            if (!livro) {
                return notFound(res);
            }
            return livro;
        }
        catch (e) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
        res.status(200).json(book)
    }

    public static updateBook (req: Request, res: Response) {

    }

    public static async deleteBook (req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        if (!validateNumber(id)) {
            return badRequest(res, 'id invalido')
        }
        return res.status(200).json({ message: { id } + 'deletado com sucesso' });
    }
}