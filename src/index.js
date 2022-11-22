const express = require("express");
const {
  filtrarProfessores,
  encontrarUmProfessor,
} = require("./controladores/professores");
const app = express();
const primeiroIntermediario = (req, res, next) => {
  console.log(`Passei no primeiro intermediário`);
  next();
};
const segundoIntermediario = (req, res, next) => {
  console.log(`Passei no segundo intermediário`);
  next();
};
const intermediarioDaRota = (req, res, next) => {
  console.log(`Passei no intermediário da rota`);
  next();
};

app.get("/professores/:id", encontrarUmProfessor);
app.get("/professores", intermediarioDaRota, filtrarProfessores);
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Página Inicial 0<h1>`);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
