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
    static insertBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = req.body;
            if (!book)
                return (0, utils_1.badRequest)(res, "Produto inválido");
            if (!book.titulo)
                return (0, utils_1.badRequest)(res, 'Informe o nome do livro');
            if (!book.autor)
                return (0, utils_1.badRequest)(res, 'Informe o autor');
            if (!book.genero)
                return (0, utils_1.badRequest)(res, 'Informe o genero');
            bookModel_1.bookModel.insertBook(book);
            return res.status(200).json(book);
        });
    }
    static deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            if (!(0, utils_1.validateNumber)(id)) {
                return (0, utils_1.badRequest)(res, 'id invalido');
            }
            return;
        });
    }
}
exports.bookController = bookController;
