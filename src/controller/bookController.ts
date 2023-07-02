import { Request, Response } from 'express';
import { Book, bookModel } from '../models/bookModel';
import { badRequest, internalServerError, validateNumber } from '../services/utils';

export class bookController {

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

        bookModel.insertBook(book as Book)
        return res.status(200).json(book)
    }

    public static async deleteBook (req: Request, res: Response) {
        const id: string = req.params.id;
        if (!validateNumber(id)) {
            return badRequest(res, 'id invalido')
        }
        return;
    }
}