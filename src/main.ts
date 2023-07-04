import express from 'express'
import { Request, Response } from 'express';
import { Library } from './Lib';
import bodyParser from 'body-parser';
import { Book } from './classes/Book';
import { clienteController } from './controller/clienteController';
import { bookController } from './controller/bookController';
import { Cliente } from './classes/cliente/Cliente';


const app = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.get('/clientes', (req: Request, res: Response) => {
  const clientes: Array<Cliente> = Library.listaClientes();
  res.status(200).send(clientes);
})


app.post('/clientes', (req: Request, res: Response) => {
  clienteController.insertClient(req, res);
})

app.delete('/clientes', (req: Request, res: Response) => {
  const data: String = req.body.cpf;
  const cliente: Cliente | null = Library.buscaCPF(data);
  if (cliente != null) {
    Library.removeCliente(cliente);
  }
  res.status(200).send('cliente deletado com sucesso')
})

app.get('/books', (req: Request, res: Response) => {
  const livros: Array<Book> = Library.listaLivros();
  res.status(200).send(livros);
})

app.post('/books', (req: Request, res: Response) => {
  bookController.insertBook(req, res);
})


app.listen(3000, () => {
  console.log('server rodando na porta 3000')
})


