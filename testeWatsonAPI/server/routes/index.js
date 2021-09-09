const express = require("express"); //utilizaremos aqui o Express, agora para as rotas
const db = require("../db");
const router = express.Router();
router.get("/", async (req, res, next) => {
  //ao receber uma requisição GET retornamos todos os comentarios
  //res.json({ test: "test" }); //ao receber aqui a requisição retornamos uma resposta teste

  try {
    let results = await db.all(); //resultados são retornados de forma assincrona
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500); //caso haja erro ao buscar os dados retorna-se codigo 500
  }
});

router.post("/post", async (req, res, next) => {
  //ao receber uma requisição GET retornamos todos os comentarios
  //res.json({ test: "test" }); //ao receber aqui a requisição retornamos uma resposta teste
  try {
    await db.send(req); //resultados são retornados de forma assincrona
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500); //caso haja erro ao buscar os dados retorna-se codigo 500
  }
});

router.post("/audio", async (req, res, next) => {
  //console.log(req.body.comentario);
  //ao receber o comentario retornamos as credenciais url e auth para que o front end receba o
  var request = [
    process.env.TEXT_TO_SPEECH_URL +
      "/v1/synthesize?accept=audio%2Fogg&text=" +
      encodeURIComponent(req.body.comentario) +
      "&voice=pt-BR_IsabelaVoice",
    process.env.TEXT_TO_SPEECH_APIKEY,
  ];
  res.json(request); //retornamos o link
});

// update router.put
// delete router.delete
// create router.post

module.exports = router;
