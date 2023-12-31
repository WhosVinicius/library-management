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
exports.clienteModel = void 0;
const Lib_1 = require("../Lib");
class clienteModel {
    static getClient(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.buscaCPF(cpf);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.listaClientes();
        });
    }
    static insertClient(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            Lib_1.Library.addCliente(cliente);
            return cliente;
        });
    }
    static updateCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.updateCliente(cliente);
        });
    }
    static deleteCient(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.removeCliente(cliente);
        });
    }
}
exports.clienteModel = clienteModel;
