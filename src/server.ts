import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { router } from "./routes";
import { RequestMiddlewareError } from "./middleware/RequestMiddlewareError";

const port = process.env.PORT || 3000;

import "./database";

const app = express();

app.use(express.json());

app.use(router);
app.use(RequestMiddlewareError);

app.listen(port, () => console.log("Servidor rodando na porta " + port));
