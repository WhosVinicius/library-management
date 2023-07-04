import { Library } from "../Lib"
import { Cliente } from "../classes/Cliente/Cliente";

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