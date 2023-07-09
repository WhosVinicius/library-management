"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
const express_1 = __importDefault(require("express"));
const clienteController_1 = require("../controllers/clienteController");
const clientRoutes = (0, express_1.default)();
exports.clientRoutes = clientRoutes;
clientRoutes.get('/clientes', clienteController_1.clienteController.getAll);
clientRoutes.post('/clientes', clienteController_1.clienteController.insertClient);
clientRoutes.put('/clientes', clienteController_1.clienteController.updateClient);
clientRoutes.delete('/clientes/:id', clienteController_1.clienteController.deleteClient);
