import Router from 'express'
import { clienteController } from '../controllers/clienteController';

const clientRoutes = Router();
clientRoutes.get('/clientes', clienteController.getAll);
clientRoutes.post('/clientes', clienteController.insertClient);
clientRoutes.put('/clientes', clienteController.updateClient);
clientRoutes.delete('/clientes', clienteController.deleteClient);

export { clientRoutes }
