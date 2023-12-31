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
const utils_1 = require("../services/utils");
class clienteController {
    static insertClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente = req.body;
            if (!cliente) {
                return (0, utils_1.badRequest)(res, 'cliente invalido');
            }
            else if (!cliente.nome) {
                return (0, utils_1.badRequest)(res, 'informe o nome');
            }
            else if (!cliente.cpf) {
                return (0, utils_1.badRequest)(res, 'informe o cpf');
            }
            else if (!cliente.endereco) {
                return (0, utils_1.badRequest)(res, "informe o endereço");
            }
            else if (!cliente.data) {
                return (0, utils_1.badRequest)(res, "informe a data de nascimento");
            }
            else if ((yield clienteModel_1.clienteModel.getClient(cliente.cpf)) == null) {
                return (0, utils_1.badRequest)(res, "cliente ja cadastrado");
            }
            clienteModel_1.clienteModel.insertClient(cliente);
            res.status(200).json(cliente);
        });
    }
    static getClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.params.id;
            if (!(0, utils_1.validateNumber)(parseInt(cpf))) {
                return (0, utils_1.badRequest)(res, 'pedido invalido');
            }
            const cliente = clienteModel_1.clienteModel.getClient(cpf);
            res.status(200).json(cliente);
        });
    }
    static deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = parseInt(req.params.id);
            if (!(0, utils_1.validateNumber)(cpf)) {
                return (0, utils_1.badRequest)(res, 'pedido invalido');
            }
            res.status(200).json({ message: { cpf } + `removido com sucesso` });
        });
    }
}
exports.clienteController = clienteController;
