import "reflect-metadata";
import express from "express";
import { router } from "./routes";

const port = process.env.PORT || 3000;

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => console.log("Servidor rodando na porta " + port));
