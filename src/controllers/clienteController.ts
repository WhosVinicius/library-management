import { Request, Response } from 'express';
import { clienteModel } from "../models/clienteModel";
import { Cliente } from '../classes/cliente/Cliente';
import { checkAdress, badRequest, internalServerError, notFound, validateNumber } from '../services/utils';
export class clienteController {

    public static async getAll (req: Request, res: Response) {
        const clientes: Cliente[] = await clienteModel.getAll();
        try {
            console.log(JSON.stringify(clientes))
            return res.status(200).json(clientes);
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }

    public static async getClient (req: Request, res: Response) {
        const cpf = req.params.id;
        if (!cpf || !validateNumber(cpf)) {
            return badRequest(res, 'pedido invalido');
        }
        const cl = await clienteModel.getClient(cpf.toString().trim().toLowerCase());
        if (cl == null) {
            return badRequest(res, 'cliente nao cadastrado');
        }
        try {
            res.status(200).json(cl);
            return await clienteModel.deleteCient(cl);
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }

    public static async insertClient (req: Request, res: Response) {
        const cliente = req.body;
        if (await clienteModel.getClient(cliente.cpf) != null) {
            return badRequest(res, "cliente ja esta cadastrado");
        }
        if (!cliente) {
            return badRequest(res, 'cliente invalido');
        }
        if (!cliente.nome) {
            return badRequest(res, 'informe o nome');
        }
        if (!cliente.cpf) {
            return badRequest(res, 'informe o cpf');
        }
        if (!cliente.endereco || checkAdress(cliente.endereco) == false) {
            return badRequest(res, "informe o endereço");
        }
        if (!cliente.data) {
            return badRequest(res, "informe a data de nascimento");
        }
        try {
            const cl: Cliente | null = await clienteModel.insertClient(cliente as Cliente)
            if (!cl) {
                return notFound(res);
            }
            res.status(200).json(cliente);
            return cl;
        }
        catch (e) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }

    public static async updateClient (req: Request, res: Response) {
        const cliente = req.body;
        if (cliente.cpf == null) {
            return badRequest(res, 'pedido invalido NO-CPF')
        }
        if (await clienteModel.getClient(cliente.cpf) == null) {
            return badRequest(res, "cliente nao esta cadastrado");
        }
        if (!cliente) {
            return badRequest(res, 'pedido invalido');
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
        try {
            const cl: Cliente | null = await clienteModel.updateCliente(cliente as Cliente)
            res.status(200).json(cliente);
            return cl;
        }
        catch (e) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }

    public static async deleteClient (req: Request, res: Response) {
        const cpf = req.params.id;
        if (!cpf || !validateNumber(cpf)) {
            return badRequest(res, 'pedido invalido');
        }
        const cl = await clienteModel.getClient(cpf.toString().trim().toLowerCase());
        if (cl == null) {
            return badRequest(res, 'cliente nao cadastrado');
        }
        try {
            res.status(200).json({
                message: `cpf ${ cpf } deletado com sucesso`
            });
            return await clienteModel.deleteCient(cl);
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                return internalServerError(res, e);
            }
        }
    }
}
