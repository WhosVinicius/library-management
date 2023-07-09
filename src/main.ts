import express from 'express'
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { clienteController } from './controllers/clienteController';
import { bookController } from './controllers/bookController';
import { clientRoutes } from './routes/clientes';

class Server {
  private port: number;
  private app;

  constructor (portNumber: number) {
    this.port = portNumber;
    this.app = express();
  }

  init (): void {
    this.app.listen(this.port, () => {
      console.log("server running on port:", this.port)
      app.use(bodyParser.json())
    })
  }
}

const app = express();

app.use(bodyParser.json());

app.use(clientRoutes)


app.delete('clientes/id:', (req: Request, res: Response) => {
  clienteController.deleteClient(req, res);
})

app.get('/books', (req: Request, res: Response) => {
  bookController.getAll(req, res);
})

app.post('/books', (req: Request, res: Response) => {
  bookController.insertBook(req, res);
})

function init (): void {
  app.listen(3000, () => {
    console.log('server rodando na porta 3000')
  })
}

init();
