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
exports.clienteModel = exports.Cliente = void 0;
const Lib_1 = require("../Lib");
class Cliente {
    constructor(nome, data, endereco, cpf) {
        this.ficha = [];
        this.nome = nome;
        this.nascimento = data;
        this.endereço = endereco;
        this.cpf = cpf;
    }
}
exports.Cliente = Cliente;
class endereco {
    constructor(rua, bairro, numero) {
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
class clienteModel {
    static insertClient(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            Lib_1.Library.addCliente(cliente);
            return cliente;
        });
    }
    static getClient(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.buscaCPF(cpf);
        });
    }
    static deleteCient(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield clienteModel.getClient(cpf);
            if (cliente != null) {
                Lib_1.Library.removeCliente(cliente);
            }
        });
    }
}
exports.clienteModel = clienteModel;
