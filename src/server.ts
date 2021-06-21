import express from "express";

// TODO: criar repositório ainda hoje. E também o README.md

const app = express();

app.use(express.json());

app.get("/teste", (req, res) => {
  return res.send("Foguete NLW decolando ... ->");
});

app.post("/teste-post", (req, res) => {
  const { nome, email } = req.body;
  return res.status(201).json({
    statusCode: 201,
    success: true,
    payload: {
      name: nome,
      mail: email,
    },
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
