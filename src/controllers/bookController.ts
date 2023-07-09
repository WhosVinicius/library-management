import { Request, Response } from 'express';
import { bookModel } from '../models/bookModel';
import { Book } from '../classes/Book';
import { utils } from '../services/utils';
export class bookController {

    public static async getAll (req: Request, res: Response) {
        const books: Book[] = await bookModel.getAll();
        try {
            return res.status(200).json(books);
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                return utils.internalServerError(res, e);
            }
        }
    }

    public static async getBook (req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        if (!id || utils.validateNumber(id)) {
            return utils.badRequest(res, "id invalido")
        }
        try {
            const book: Book | null = await bookModel.getBook(id)
            if (!book) {
                return utils.notFound(res);
            }
            res.status(200).json(book);
            return book;
        }
        catch (e) {
            if (e instanceof Error) {
                return utils.internalServerError(res, e);
            }
        }
    }

    public static async insertBook (req: Request, res: Response) {
        let book = req.body;

        if (!book)
            return utils.badRequest(res, "Produto inválido");

        if (!book.titulo)
            return utils.badRequest(res, 'Informe o nome do livro');

        if (!book.autor)
            return utils.badRequest(res, 'Informe o autor');

        if (!book.genero)
            return utils.badRequest(res, 'Informe o genero');
        try {
            const livro: Book | null = await bookModel.insertBook(book as Book)
            if (!livro) {
                return utils.notFound(res);
            }
            return livro;
        }
        catch (e) {
            if (e instanceof Error) {
                return utils.internalServerError(res, e);
            }
        }
        res.status(200).json(book);
    }

    public static async updateBook (req: Request, res: Response) {
        const book = req.body;
        if (book.id == null) {
            return utils.badRequest(res, 'pedido invalido NO-ID')
        }
        if (await bookModel.getBook(book.id) == null) {
            return utils.badRequest(res, "livro nao esta cadastrado");
        }
        if (!book) {
            return utils.badRequest(res, 'pedido invalido');
        }
        if (!book.titulo) {
            return utils.badRequest(res, 'informe o nome');
        }
        if (!book.id) {
            return utils.badRequest(res, 'informe o cpf');
        }
        if (!book.genero) {
            return utils.badRequest(res, "informe o endereço");
        }
        if (!book.autor) {
            return utils.badRequest(res, "informe a data de nascimento");
        }
        try {
            const bk: Book | null = await bookModel.updateBook(book as Book)
            res.status(200).json(book);
            return bk;
        }
        catch (e) {
            if (e instanceof Error) {
                return utils.internalServerError(res, e);
            }
        }

    }

    public static async deleteBook (req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        if (!utils.validateNumber(id)) {
            return utils.badRequest(res, 'id invalido');
        }
        if (await bookModel.getBook(id) == null) {
            return utils.badRequest(res, 'book nao cadastrado');
        }
        try {
            res.status(200).json({
                message: `livro ${ id } deletado com sucesso`
            })
            return await bookModel.deleteBook(id);
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                return utils.internalServerError(res, e);
            }
        }
    }
}