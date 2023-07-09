import Router from 'express'
import { bookController } from '../controllers/bookController';
const bookRoutes = Router();

bookRoutes.get('/clientes', bookController.getAll);
bookRoutes.post('/clientes', bookController.insertBook);
bookRoutes.put('/clientes', bookController.updateBook);
bookRoutes.delete('/livros/:id', bookController.deleteBook);

export { bookRoutes }
