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
class bookController {
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, autor, genero } = req.body;
            const livro = new bookModel_1.Book(titulo, autor, genero);
            res.status(200).json(livro);
        });
    }
}
exports.bookController = bookController;
