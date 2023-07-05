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
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield clienteModel_1.clienteModel.getAll();
            try {
                return res.status(200).json(books);
            }
            catch (e) {
                if (e instanceof Error) {
                    return (0, utils_1.internalServerError)(res, e);
                }
            }
        });
    }
    static getClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.params.id;
            if (!(0, utils_1.validateNumber)(parseInt(cpf))) {
                return (0, utils_1.badRequest)(res, 'pedido invalido');
            }
            const cliente = yield clienteModel_1.clienteModel.getClient(cpf);
            res.status(200).json(cliente);
        });
    }
    static insertClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente = req.body;
            if ((yield clienteModel_1.clienteModel.getClient(cliente.cpf)) != null) {
                return (0, utils_1.badRequest)(res, "cliente ja esta cadastrado");
            }
            if (!cliente) {
                return (0, utils_1.badRequest)(res, 'cliente invalido');
            }
            if (!cliente.nome) {
                return (0, utils_1.badRequest)(res, 'informe o nome');
            }
            if (!cliente.cpf) {
                return (0, utils_1.badRequest)(res, 'informe o cpf');
            }
            if (!cliente.endereco) {
                return (0, utils_1.badRequest)(res, "informe o endereço");
            }
            if (!cliente.data) {
                return (0, utils_1.badRequest)(res, "informe a data de nascimento");
            }
            try {
                const cl = yield clienteModel_1.clienteModel.insertClient(cliente);
                if (!cl) {
                    return (0, utils_1.notFound)(res);
                }
                res.status(200).json(cliente);
                return cl;
            }
            catch (e) {
                if (e instanceof Error) {
                    return (0, utils_1.internalServerError)(res, e);
                }
            }
        });
    }
    static deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.query.id;
            console.log(cpf, typeof (cpf));
            if (!cpf || !(0, utils_1.validateNumber)(cpf)) {
                return (0, utils_1.badRequest)(res, 'pedido invalido');
            }
            else if ((yield clienteModel_1.clienteModel.getClient(cpf.toString().trim())) == null) {
                return (0, utils_1.badRequest)(res, 'cliente nao cadastrado');
            }
            const cl = yield clienteModel_1.clienteModel.deleteCient(cpf.toString().trim());
            console.log(cl);
            res.status(200).json({
                message: `${cl === null || cl === void 0 ? void 0 : cl.cpf}:${cl === null || cl === void 0 ? void 0 : cl.nome} removido com sucesso`
            });
        });
    }
}
exports.clienteController = clienteController;
