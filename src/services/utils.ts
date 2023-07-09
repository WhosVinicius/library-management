import { Endereco } from './../classes/cliente/Endereco';
import { Response } from "express";
export class utils {

    static checkAdress (end: Endereco): boolean {
        if (end.bairro == '') {
            return false;
        }
        else if (!end.numero || end.numero == 0) {
            return false;
        }
        if (end.rua == '') {
            return false;
        }
        return true;
    }

    static badRequest = (res: Response, err: string): void => {
        res.status(400).json({
            err
        });
    }

    static notFound = (res: Response) => res.sendStatus(404);

    static ok = (res: Response) => res.sendStatus(200);

    static internalServerError = (res: Response, err: Error) => {
        res.status(500).json({
            err: err.message
        })
    }

    static validateNumber = (num: any): boolean => { return parseFloat(num) > 0 }
}