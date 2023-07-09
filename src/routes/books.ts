import Router from 'express'
import { bookController } from '../controllers/bookController';

const bookRoutes = Router();

bookRoutes.get('/livros', bookController.getAll);
bookRoutes.post('/livros', bookController.insertBook);
bookRoutes.put('/livros', bookController.updateBook);
bookRoutes.delete('/livros/:id', bookController.deleteBook);

export { bookRoutes }
