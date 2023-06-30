import { Request, Response } from 'express';
import { Cliente, clienteModel } from "../models/clienteModel";
import { badRequest } from '../services/utils';

export class clienteController {
    public async insertUser (req: Request, res: Response) {

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
}