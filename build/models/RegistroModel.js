"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroModel = void 0;
const Lib_1 = require("../Lib");
class RegistroModel {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Lib_1.Library.Log();
        });
    }
    static insertEmprestimo(reg) {
        return __awaiter(this, void 0, void 0, function* () {
            Lib_1.Library.addLog(reg);
            return;
        });
    }
}
exports.RegistroModel = RegistroModel;
