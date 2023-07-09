import express from 'express'
import bodyParser from 'body-parser'; import { clienteController } from './controllers/clienteController';
import { clientRoutes } from './routes/clientes';
import { bookRoutes } from './routes/books';
import { ExpServer } from './services/server';

const app: ExpServer = new ExpServer(3000);
