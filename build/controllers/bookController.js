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
exports.bookController = void 0;
const bookModel_1 = require("../models/bookModel");
const utils_1 = require("../services/utils");
class bookController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield bookModel_1.bookModel.getAll();
            try {
                return res.status(200).json(books);
            }
            catch (e) {
                if (e instanceof Error) {
                    return utils_1.utils.internalServerError(res, e);
                }
            }
        });
    }
    static getBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            if (!id || utils_1.utils.validateNumber(id)) {
                return utils_1.utils.badRequest(res, "id invalido");
            }
            try {
                const book = yield bookModel_1.bookModel.getBook(id);
                if (!book) {
                    return utils_1.utils.notFound(res);
                }
                res.status(200).json(book);
                return book;
            }
            catch (e) {
                if (e instanceof Error) {
                    return utils_1.utils.internalServerError(res, e);
                }
            }
        });
    }
    static insertBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = req.body;
            if (!book)
                return utils_1.utils.badRequest(res, "Produto inválido");
            if (!book.titulo)
                return utils_1.utils.badRequest(res, 'Informe o nome do livro');
            if (!book.autor)
                return utils_1.utils.badRequest(res, 'Informe o autor');
            if (!book.genero)
                return utils_1.utils.badRequest(res, 'Informe o genero');
            try {
                const livro = yield bookModel_1.bookModel.insertBook(book);
                if (!livro) {
                    return utils_1.utils.notFound(res);
                }
                return livro;
            }
            catch (e) {
                if (e instanceof Error) {
                    return utils_1.utils.internalServerError(res, e);
                }
            }
            res.status(200).json(book);
        });
    }
    static updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = req.body;
            if (book.id == null) {
                return utils_1.utils.badRequest(res, 'pedido invalido NO-ID');
            }
            if ((yield bookModel_1.bookModel.getBook(book.id)) == null) {
                return utils_1.utils.badRequest(res, "livro nao esta cadastrado");
            }
            if (!book) {
                return utils_1.utils.badRequest(res, 'pedido invalido');
            }
            if (!book.titulo) {
                return utils_1.utils.badRequest(res, 'informe o nome');
            }
            if (!book.id) {
                return utils_1.utils.badRequest(res, 'informe o cpf');
            }
            if (!book.genero) {
                return utils_1.utils.badRequest(res, "informe o endereço");
            }
            if (!book.autor) {
                return utils_1.utils.badRequest(res, "informe a data de nascimento");
            }
            try {
                const bk = yield bookModel_1.bookModel.updateBook(book);
                res.status(200).json(book);
                return bk;
            }
            catch (e) {
                if (e instanceof Error) {
                    return utils_1.utils.internalServerError(res, e);
                }
            }
        });
    }
    static deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            if (!utils_1.utils.validateNumber(id)) {
                return utils_1.utils.badRequest(res, 'id invalido');
            }
            if ((yield bookModel_1.bookModel.getBook(id)) == null) {
                return utils_1.utils.badRequest(res, 'book nao cadastrado');
            }
            try {
                res.status(200).json({
                    message: `livro ${id} deletado com sucesso`
                });
                return yield bookModel_1.bookModel.deleteBook(id);
            }
            catch (e) {
                if (e instanceof Error) {
                    return utils_1.utils.internalServerError(res, e);
                }
            }
        });
    }
}
exports.bookController = bookController;
