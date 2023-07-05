import express from 'express'
import { Request, Response } from 'express';
import { Library } from './Lib';
import bodyParser from 'body-parser';
import { Book } from './classes/Book';
import { clienteController } from './controllers/clienteController';
import { bookController } from './controllers/bookController';
import { Cliente } from './classes/cliente/Cliente';

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

app.get('/clientes', (req: Request, res: Response) => {
  clienteController.getAll(req, res);
})

app.post('/clientes', (req: Request, res: Response) => {
  clienteController.insertClient(req, res);
})

app.delete('/clientes', (req: Request, res: Response) => {
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
