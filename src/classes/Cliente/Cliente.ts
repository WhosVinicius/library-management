import { EmprestimoCliente } from "./EmprestimoCliente";

export class Cliente {
    nome: String;
    nascimento: String;
    endereço: Endereco;
    ficha: EmprestimoCliente[];
    cpf: string;

    constructor (nome: String, data: string, endereco: Endereco, cpf: string) {
        this.ficha = [];
        this.nome = nome;
        this.nascimento = data;
        this.endereço = endereco;
        this.cpf = cpf;
    }
}