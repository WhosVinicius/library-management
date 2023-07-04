import { Library } from "../Lib";
import { Cliente } from "../classes/Cliente/Cliente";
import { Book } from "../classes/Book";
import { Registro } from "../classes/Registro";

export class RegistroModel {

    public static async getAll (): Promise<Registro[]> {
        return Library.Log();
    }

    public static async insertEmprestimo (reg: Registro) {
        Library.addLog(reg);
        return;
    }
}