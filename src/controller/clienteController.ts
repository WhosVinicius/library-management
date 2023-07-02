import { Request, Response } from 'express';
import { Cliente, clienteModel } from "../models/clienteModel";
import { badRequest, validateNumber } from '../services/utils';

export class clienteController {

    public static async insertClient (req: Request, res: Response): Promise<void> {

        let cliente = req.body;

        if (!cliente) {
            return badRequest(res, 'cliente invalido');
        }
        else if (!cliente.nome) {
            return badRequest(res, 'informe o nome');
        }
        else if (!cliente.cpf) {
            return badRequest(res, 'informe o cpf');
        }
        else if (!cliente.endereco) {
            return badRequest(res, "informe o endereço");
        }
        else if (!cliente.data) {
            return badRequest(res, "informe a data de nascimento");
        }
        else if (await clienteModel.getClient(cliente.cpf) == null) {
            return badRequest(res, "cliente ja cadastrado")
        }

        clienteModel.insertClient(cliente as Cliente);

        res.status(200).json(cliente);
    }

    public static async getClient (req: Request, res: Response) {
        const cpf: string = req.params.id;
        if (!validateNumber(parseInt(cpf))) {
            return badRequest(res, 'pedido invalido')
        }
        const cliente = clienteModel.getClient(cpf);
        res.status(200).json(cliente);
    }

    public static async deleteClient (req: Request, res: Response): Promise<void> {
        const cpf: number = parseInt(req.params.id);
        if (!validateNumber(cpf)) {
            return badRequest(res, 'pedido invalido')
        }
        res.status(200).json({ message: { cpf } + `removido com sucesso` })
    }
}