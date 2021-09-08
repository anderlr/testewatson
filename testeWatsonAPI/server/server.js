const express = require("express"); //utilizaremos aqui os modulos Express e Cors além das rotas q
const apiRouter = require("./routes");
const cors = require("cors");
require("dotenv").config();
const app = express(); //iniciando o app

app.use(cors()); //inicializando o middleware cors para as rotas

app.use(express.json()); //através do express apenas request do formato .json

app.use("/api/comments", apiRouter);

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port : ${process.env.API_PORT}`);
  //o porte padrão aqui é definido como 300 ou que estiver no .env futuramente
});
