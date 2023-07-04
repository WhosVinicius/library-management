import { EmprestimoCliente } from "./EmprestimoCliente";

export class Cliente {
    nome: String;
    nascimento: String;
    endereço: Endereco;
    ficha: EmprestimoCliente[];
    cpf: String;

    constructor (nome: String, data: String, endereco: Endereco, cpf: String) {
        this.ficha = [];
        this.nome = nome;
        this.nascimento = data;
        this.endereço = endereco;
        this.cpf = cpf;
    }
}