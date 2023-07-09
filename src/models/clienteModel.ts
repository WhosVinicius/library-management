import { Library } from "../Lib"
import { Cliente } from "../classes/cliente/Cliente";

export class clienteModel {

    public static async getClient (cpf: string): Promise<Cliente | null> {
        return Library.buscaCPF(cpf);
    }

    public static async getAll () {
        return Library.listaClientes();
    }

    public static async insertClient (cliente: Cliente) {
        Library.addCliente(cliente);
        return cliente;
    }

    public static async updateCliente (cliente: Cliente) {
        return Library.updateCliente(cliente);
    }

    public static async deleteCient (cliente: Cliente) {
        return Library.removeCliente(cliente);
    }
}