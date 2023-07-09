import bodyParser from "body-parser";
import express from "express";
import { clientRoutes } from "../routes/clientes";
import { bookRoutes } from "../routes/books";

export class ExpServer {
    private port: number;
    private app;

    constructor (portNumber: number) {
        this.port = portNumber;
        this.app = express();
        this.init();
    }

    private init () {
        this.app.listen(this.port, () => {
            console.log("server running on port:", this.port);
        });
        this.app.use(bodyParser.json());
        this.startRoutes();

    }
    private startRoutes () {
        this.app.use(clientRoutes);
        this.app.use(bookRoutes);
    }
}

