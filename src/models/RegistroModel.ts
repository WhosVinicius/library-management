import { Library } from "../Lib";
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