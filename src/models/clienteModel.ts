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

    public static async deleteCient (cpf: string) {
        const cliente = await clienteModel.getClient(cpf);
        if (cliente != null) {
            Library.removeCliente(cliente);
            return cliente;
        }
    }

}