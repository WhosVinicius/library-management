import express from 'express'
import { Request, Response } from 'express';
import { Library } from './Lib';
import { Book } from './models/bookModel';
import { Cliente } from './models/clienteModel';
import bodyParser from 'body-parser';


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
  const data = req.body;
  const cliente = new Cliente(data.nome, data.cpf, data.endereco, data.nasc);
  Library.addCliente(cliente);
  res.status(200).send('cliente cadastrado com sucesso');
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
  const data = req.body;
  const livro: Book = new Book(data.titulo, data.autor, data.genero);
  Library.addLivro(livro);
  res.status(200).send('livro cadastrado com sucesso');
})


app.listen(3000, () => {
  console.log('server rodando na porta 3000')
})


