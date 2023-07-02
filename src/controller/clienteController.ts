import { Request, Response } from 'express';
import { Cliente, clienteModel } from "../models/clienteModel";
import { badRequest, validateNumber } from '../services/utils';

export class clienteController {
    public static async insertUser (req: Request, res: Response): Promise<void> {

        let cliente = req.body;

        if (!cliente) {
            return badRequest(res, 'cliente invalido');
        }
        if (!cliente.nome) {
            return badRequest(res, 'informe o nome');
        }
        if (!cliente.cpf) {
            return badRequest(res, 'informe o cpf');
        }
        if (!cliente.endereco) {
            return badRequest(res, "informe o endereço");
        }
        if (!cliente.data) {
            return badRequest(res, "informe a data de nascimento");
        }

        clienteModel.insertClient(cliente as Cliente);
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