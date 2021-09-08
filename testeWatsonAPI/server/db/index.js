const mysql = require("mysql");

const pool = mysql.createPool({
  //informaçoes para conexão com o banco
  connectionLimit: 10, //numero de conexÕes com o banco de dados
  password: "",
  user: "root",
  database: "comments",
  host: "localhost",
  port: "3306",
});

let commentsdb = {};

commentsdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM comments_table`, (err, results) => {
      if (err) {
        return reject(err); //se houver erro ele é retornado
      }
      return resolve(results); //caso contrario o resultado é retornado
    });
  });
};

commentsdb.send = (req) => {
  var comment = req.body.comment;
  console.log(req.body);
  var sql = `INSERT INTO comments_table (comentario) VALUES ('${comment}')`;
  console.log(sql);
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) {
        return reject(err); //se houver erro ele é retornado
      }
      return resolve(results); //caso contrario o resultado é retornado
    });
  });
};

module.exports = commentsdb;
