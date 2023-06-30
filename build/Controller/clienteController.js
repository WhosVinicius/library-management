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
exports.clienteController = void 0;
const clienteModel_1 = require("../models/clienteModel");
class clienteController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, data, endereco, cpf } = req.body;
            const cliente = new clienteModel_1.Cliente(nome, data, endereco, cpf);
            res.status(200).json(cliente);
        });
    }
}
exports.clienteController = clienteController;
