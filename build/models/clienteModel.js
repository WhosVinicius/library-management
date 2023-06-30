"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
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
class Endereço {
    constructor(rua, bairro, numero) {
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
class clienteModel {
    insertBook(cliente) {
        Lib_1.Library.add_cliente(cliente);
    }
}
