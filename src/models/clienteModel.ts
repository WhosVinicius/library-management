import { Library } from "../Lib"
import { Emprestimo } from "../Emprestimo";

export class Cliente {
    nome: String;
    nascimento: String;
    endereço: Endereço;
    ficha: Array<Emprestimo>;
    cpf: String;

    constructor (nome: String, data: String, endereco: Endereço, cpf: String) {
        this.ficha = [];
        this.nome = nome;
        this.nascimento = data;
        this.endereço = endereco;
        this.cpf = cpf;
    }
}

class Endereço {
    rua: String;
    bairro: String;
    numero: number;

    constructor (rua: String, bairro: String, numero: number) {
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}

export class clienteModel {
    public static insertClient (cliente: Cliente) {
        Library.addCliente(cliente);
        return cliente;
    }
}