"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const bookRoutes = (0, express_1.default)();
exports.bookRoutes = bookRoutes;
bookRoutes.get('/livros', bookController_1.bookController.getAll);
bookRoutes.post('/livros', bookController_1.bookController.insertBook);
bookRoutes.put('/livros', bookController_1.bookController.updateBook);
bookRoutes.delete('/livros/:id', bookController_1.bookController.deleteBook);
