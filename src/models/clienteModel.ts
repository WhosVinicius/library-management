import { Library } from "../Lib"
import { Emprestimo } from "../Emprestimo";

export class Cliente {
    nome: String;
    nascimento: String;
    endereço: endereco;
    ficha: Array<Emprestimo>;
    cpf: String;

    constructor (nome: String, data: String, endereco: endereco, cpf: String) {
        this.ficha = [];
        this.nome = nome;
        this.nascimento = data;
        this.endereço = endereco;
        this.cpf = cpf;
    }
}

class endereco {
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

    public static async insertClient (cliente: Cliente) {

        Library.addCliente(cliente);
        return cliente;
    }

    public static async getClient (cpf: string) {
        return Library.buscaCPF(cpf);
    }

    public static async deleteCient (cpf: string) {
        const cliente = await clienteModel.getClient(cpf);
        if (cliente != null) {
            Library.removeCliente(cliente);
        }
    }

}