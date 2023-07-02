import { Request, Response } from 'express';
import { Book, bookModel } from '../models/bookModel';
import { badRequest, internalServerError, validateNumber } from '../services/utils';
import { Library } from '../Lib';

export class bookController {

    public static async getAll (req: Request, res: Response) {
        const books: Array<Book> = await bookModel.getAll();
        return res.status(200).json(books);
    }

    public static insertBook (req: Request, res: Response) {
        let book = req.body;

        if (!book)
            return badRequest(res, "Produto inválido");

        if (!book.titulo)
            return badRequest(res, 'Informe o nome do livro');

        if (!book.autor)
            return badRequest(res, 'Informe o autor');

        if (!book.genero)
            return badRequest(res, 'Informe o genero');

        bookModel.insertBook(book as Book)
        return res.status(200).json(book)
    }

    public static async deleteBook (req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        if (!validateNumber(id)) {
            return badRequest(res, 'id invalido')
        }
        return res.status(200).json({ message: { id } + 'deletado com sucesso' });
    }



}